# Test Scouting Data Generator

## Overview

This Python script generates synthetic scouting data for robotics competitions (FIRST Robotics Competition events). It fetches real match schedules from The Blue Alliance API and creates realistic test data based on a configurable scouting form schema.

## Features

- Fetches live match schedules from The Blue Alliance (TBA) API
- Generates tiered performance data (Low/Med/High skill levels)
- Supports multiple field types: counters, booleans, radios, timers, clickable images, etc.
- Exports data in TSV (Excel-friendly) or CSV format
- Configurable via command-line arguments

## Requirements

- Python 3.6+
- Required packages:
  - `requests`
  - `json`, `re`, `csv`, `random`, `sys`, `argparse` (built-in)

Install dependencies:
```bash
pip install requests
```

## Configuration

### TBA API Key

Replace the placeholder in the script with your The Blue Alliance API key:
```python
key = "<YOUR TBA API KEY HERE>"
```

Get your API key at: https://www.thebluealliance.com/account

### Default Settings
```python
DEFAULT_EVENT = "2025mndu"           # Event code to fetch
OUTPUT_FILENAME = "test_scouting_data.tsv"
SEPARATOR = '\t'                     # Tab-separated by default
```

## Usage

### Basic Usage
```bash
python generate_test_data.py
```

### Command-Line Arguments
```bash
python generate_test_data.py -c <config_file> -o <output_file> -d <delimiter>
```

**Arguments:**

| Argument | Long Form | Description | Default |
|----------|-----------|-------------|---------|
| `-c` | `--config` | Path to config file | `./rebuilt_config.js` |
| `-o` | `--output` | Output filename | `test_scouting_data.tsv` |
| `-d` | `--delimiter` | Delimiter type (`tab` or `comma`) | `tab` |

### Examples
```bash
# Use custom config file
python generate_test_data.py -c my_config.js

# Export as CSV instead of TSV
python generate_test_data.py -d comma -o output.csv

# Full custom configuration
python generate_test_data.py -c custom_config.js -o my_data.tsv -d tab
```

## Config File Format

The script expects a JavaScript file containing a JSON configuration object within backticks:
```javascript
const config = `{
  "prematch": [...],
  "auton": [...],
  "teleop": [...],
  "endgame": [...],
  "postmatch": [...]
}`
```

Each section contains field definitions with properties like:

- `name`: Field identifier
- `type`: Field type (counter, bool, radio, timer, clickable_image, etc.)
- `expectedMax`: Maximum expected value for counters
- `min`/`max`: Range for number fields
- `choices`: Options for radio buttons
- `allowableResponses`: Valid positions for clickable images
- `clickRestriction`: Restriction type for clickable images

## Performance Tiers

Teams are assigned to one of three performance tiers using a rotating pattern system:

- **Low**: 0-60% of max performance (30% chance of zero)
- **Med**: 0-60% of max performance
- **High**: 0-100% of max performance

The tier assignment is deterministic based on match number and robot position, ensuring consistent test data.

## Supported Field Types

| Type | Description | Generated Value |
|------|-------------|-----------------|
| `scouter` | Scout identifier | `"gen"` |
| `event` | Event code | From context |
| `level` | Match level | `"qm"` (qualification match) |
| `match` | Match number | From schedule |
| `robot` | Robot position | `"b1"`, `"b2"`, `"b3"`, `"r1"`, `"r2"`, `"r3"` |
| `team` | Team number | From schedule |
| `counter` | Numeric counter | Scaled by performance tier |
| `number` | Numeric range | Random within min/max scaled by tier |
| `bool` | Boolean value | `0` or `1` based on tier |
| `radio` | Radio selection | Random choice weighted by tier |
| `timer` | Time value | Inverse scaling (lower is better) |
| `clickable_image` | Image coordinates | List of click positions |
| `text` | Text field | `"Generated for {tier} tier"` |

## Output Format

The script generates a tab-separated (or comma-separated) file with:

- Header row containing field names
- One row per robot per match (6 rows per match)
- All fields populated with tier-appropriate synthetic data

## Error Handling

The script includes error handling for:

- Missing or invalid config files
- TBA API request failures
- File I/O errors
- Invalid JSON parsing

All errors result in descriptive messages and a graceful exit with status code `-1`.

## Example Output
```tsv
scouter	event	level	match	robot	team	auto_pieces	...
gen	2025mndu	qm	1	b1	1234	5	...
gen	2025mndu	qm	1	b2	5678	3	...
gen	2025mndu	qm	1	b3	9012	7	...
```

## Notes

- Only qualification matches (`comp_level: 'qm'`) are processed
- Team performance tiers remain consistent throughout the event
- The pattern-based tier assignment creates realistic alliance balance
- Generated data is suitable for testing scouting analysis tools

## License

This script is provided as-is for testing and development purposes.
