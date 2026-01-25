import json
import re
import requests
import sys
import random
import csv
from pprint import pprint
import argparse

# Set to True for verbose console output during execution
DEFAULT_EVENT = "2025mndu"
OUTPUT_FILENAME = "test_scouting_data.tsv"
# Use '\t' for TSV (Excel friendly) or ',' for CSV
SEPARATOR = '\t'

def get_config_file(filename):
    """Loads JSON data from within backticks in a JS file using a context manager."""
    try:
        with open(filename, 'r') as f:
            txt = f.read().replace('\n', '')
            # Regex to capture content between backticks
            match = re.search(r"`(.*?)`", txt)
            if match:
                config = json.loads(match.group(1))
                return config
            else:
                print("Error: Could not find config string between backticks.")
                sys.exit(-1)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"File Error: {e}")
        sys.exit(-1)

def get_field_list(config):
    """Flattens the config sections into a single list of fields."""
    nodes = ["prematch", "auton", "teleop", "endgame", "postmatch"]
    return [field for n in nodes for field in config.get(n, [])]

def get_event_schedule(event):
    """Fetches match schedule from TBA API using f-strings for URL construction."""
    key = "<YOUR TBA API KEY HERE>"
    url = f"https://www.thebluealliance.com/api/v3/event/{event}/matches/simple"
    try:
        resp = requests.get(url, headers={"X-TBA-Auth-Key": key})
        resp.raise_for_status()
        matches = resp.json()
    except Exception as e:
        print(f"API Error: {e}")
        sys.exit(-1)

    sched = {}
    for m in matches:
        if m['comp_level'] == 'qm':
            blue = [num[3:] for num in m['alliances']['blue']['team_keys']]
            red = [num[3:] for num in m['alliances']['red']['team_keys']]
            sched[m['match_number']] = [blue, red]
    return sched

# --- Patterns and Random Logic ---
PATTERNS = [
    [['Low', 'Low', 'Med'], ['Med', 'Low', 'Low']],
    [['Low', 'Low', 'Low'], ['Low', 'Low', 'Low']],
    [['Med', 'Med', 'Med'], ['Med', 'Med', 'Med']],
    [['High', 'High', 'High'], ['High', 'High', 'High']],
    [['Low', 'Med', 'High'], ['High', 'Med', 'Low']],
    [['Med', 'High', 'Low'], ['Med', 'Low', 'High']],
    [['High', 'Low', 'Med'], ['Low', 'Med', 'High']],
    [['Med', 'Low', 'Med'], ['Low', 'Med', 'Low']],
    [['Med', 'High', 'Med'], ['High', 'Med', 'High']]
]

def assign_level(match_num, robot_idx, color):
    """Assign a skill level to a team number"""
    pattern_idx = (match_num - 1) % len(PATTERNS)
    alliance_idx = 0 if color == 'blue' else 1
    return PATTERNS[pattern_idx][alliance_idx][robot_idx]

def get_rand_weight(level):
    """Provides specific performance floors/ceilings based on assigned tier."""
	# # Low between 0 and 30% of Max
	# # Med between 0% and 60% of Max
	# # High between 0% and 100% of Max
    if level == 'Low':
        return random.uniform(0.0, 0.6) if random.random() > 0.3 else 0.0
    if level == 'Med':
        return random.uniform(0.0, 0.6)
    return random.uniform(0.0, 1.0) # High robot

def generate_ci_value(level, field):
    """Generates coordinates for clickable images."""
    valid = list(map(int, field.get('allowableResponses', '').split()))
    if not valid:
        x, y = map(int, field.get('dimensions', '7 10').split())
        valid = list(range(x * y))

    count = 1 if field.get('clickRestriction') == 'one' else round(field.get('expectedMax', 25) * get_rand_weight(level))
    return str(random.choices(valid, k=count))

def gen_data(level, fields, context):
    dispatch = {
        'scouter': lambda f: 'gen',
        'event':   lambda f: context['event'],
        'level':   lambda f: 'qm',
        'match':   lambda f: str(context['match_num']),
        'robot':   lambda f: f"{context['color']}{context['robot_num']+1}",
        'team':    lambda f: str(context['team']),
        'clickable_image': lambda f: generate_ci_value(level, f),
        'counter': lambda f: str(round(f.get('expectedMax', 12) * get_rand_weight(level))),
        'number':  lambda f: str(f.get('min', 0) + round((f.get('max', 100) - f.get('min', 0)) * get_rand_weight(level))),
        'bool':    lambda f: str(round(1 * get_rand_weight(level))),
        'radio':   lambda f: (list(f['choices'].keys())[-1] if get_rand_weight(level) <= 0.3 else random.choice(list(f['choices'].keys()))),
        'timer':   lambda f: str(round((1 - get_rand_weight(level)) * 30, 2)),
        'text':    lambda f: f"Generated for {level} tier"
    }
    return [dispatch.get(field['type'], lambda f: "NA")(field) for field in fields]

def parse_args():
    """Parse command line arguments with defaults."""
    parser = argparse.ArgumentParser(description='Generate test scouting data')
    parser.add_argument('-c', '--config', default='./rebuilt_config.js',
            help='Config filename (default: ./rebuilt_config.js)')
    parser.add_argument('-o', '--output', default=OUTPUT_FILENAME,
            help=f'Output filename (default: {OUTPUT_FILENAME})')
    parser.add_argument('-d', '--delimiter', default='tab', choices=['tab', 'comma'],
            help='Delimiter type: tab or comma (default: tab)')
    return parser.parse_args()

def main():
    args = parse_args()
    delimiter = '\t' if args.delimiter == 'tab' else ','

    config = get_config_file(args.config)
    field_list = get_field_list(config)
    schedule = get_event_schedule(DEFAULT_EVENT)

    team_levels = {}
    data_rows = []

    # Process match schedule
    for m_num in sorted(schedule):
        for alliance_idx, color_key in enumerate(['blue', 'red']):
            for r_idx in range(3):
                team = schedule[m_num][alliance_idx][r_idx]

                if team not in team_levels:
                    team_levels[team] = assign_level(m_num, r_idx, color_key)

                context = {
                    'event': DEFAULT_EVENT,
                    'match_num': m_num,
                    'team': team,
                    'robot_num': r_idx,
                    'color': 'b' if color_key == 'blue' else 'r'
                }
                data_rows.append(gen_data(team_levels[team], field_list, context))

    # Export to File using CSV module for robust formatting
    header = [f['name'] for f in field_list]
    try:
        with open(OUTPUT_FILENAME, 'w', newline='') as f:
            writer = csv.writer(f, delimiter=SEPARATOR)
            writer.writerow(header)
            writer.writerows(data_rows)
        print(f"Successfully exported {len(data_rows)} rows to {OUTPUT_FILENAME}")
    except IOError as e:
        print(f"File Write Error: {e}")
        sys.exit(-1)

if __name__ == "__main__":
    main()