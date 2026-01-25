# REBUILT 2026 - ScoutingPASS Configuration Files

## Overview

This directory contains configuration files for scouting the 2026 FIRST Robotics Competition game **REBUILT™ presented by Haas** using the ScoutingPASS system. These files define the data collection structure for both match scouting and pit scouting activities during competitions.

For complete information about ScoutingPASS and how to use these configuration files, visit the [ScoutingPASS GitHub Repository](https://github.com/PWNAGERobotics/ScoutingPASS).

## Files in This Directory

### Configuration Files

#### `rebuilt_config.js`
**Purpose:** Match scouting configuration for REBUILT 2026

This file defines all data fields collected during live match scouting. It structures data collection into five phases of a FIRST Robotics Competition match:

- **Pre-Match** - Team identification, match details, and robot starting position
- **Autonomous (AUTO)** - First 20 seconds of the match where robots operate autonomously
- **Teleoperated (TELEOP)** - 2 minutes 20 seconds of driver-controlled operation
- **Endgame** - Final 30 seconds focusing on climbing the TOWER
- **Post-Match** - Qualitative assessments and comments

**Key Features:**
- Tracks FUEL scoring (5.91" diameter foam balls - the only scoring element in REBUILT)
- Records robot pickup capabilities from Depot, Outpost, and field locations
- Captures shooting locations via clickable field image for heat map generation
- Monitors climbing performance (Level 1, 2, and 3)
- Collects qualitative data on driver skill, defense, speed, and reliability

#### `rebuilt_pit_scouting.js`
**Purpose:** Pre-competition robot capability assessment

This file defines data collected during pit scouting before matches begin. Pit scouting captures:

- **Physical Characteristics** - Dimensions, weight, drivetrain type, motors
- **Capability Claims** - What the team believes their robot can do
- **Strategic Information** - Autonomous routines, scouting methods used by the team

**Note:** Pit scouting data represents team *claims* about capabilities. Match scouting data shows what robots *actually* accomplish during competition, allowing scouts to verify or contradict pit scouting assessments.

### Analysis & Visualization

#### `REBUIT_Test_Data_with_Heat_Map.xlsm`
**Purpose:** Example analysis workbook with test data and heat map visualization

This Excel file demonstrates:
- **Test Dataset:** Pre-generated scouting data created by `generate_test_data.py`
- **Heat Map Functionality:** Visual representation of robot shooting locations on the field
- **Analysis Starting Point:** Template teams can use as reference for building their own visualization solutions

**Usage:**
Teams can use this file to:
- Understand the structure of scouting data output
- See examples of heat map visualizations for shooting location analysis
- Test their own data visualization tools (Tableau, Power BI, custom dashboards, etc.)
- Validate data import processes before competition

**Note:** This is a demonstration file. Teams should develop their own analysis solutions using Excel, Tableau, or other data visualization tools appropriate for their needs.

### Field Images

#### Image Files (half_field.png and field layout images)
**Purpose:** Visual references for clickable image scouting fields

These images show:
- **Numbered Grid (1-70):** Represents the coordinate system for clickable field positions
- **Field Layout:** Visual representation of the REBUILT game field with major elements

**Field Elements Shown:**
- Red and Blue areas (shooting zones or alliance zones)
- Yellow areas (depots/outposts)
- Field structure including HUB, BUMPS, TRENCHES, and TOWER locations

**Usage in Config:**
The `clickable_image` field type in the configuration files references these images. Scouts click on the image to record:
- **Auto Start Location:** Robot's starting position along the ROBOT STARTING LINE
- **Shooting Locations:** Where on the field the robot shoots from (generates heat maps)

Teams do not need to create their own field images - the provided images are ready to use with ScoutingPASS.

## REBUILT 2026 Game Overview

### Scoring Elements
- **FUEL:** 5.91" (15.0cm) diameter high-density foam balls
- Only scoring element in the game
- Robots may control unlimited FUEL at once

### Key Field Elements
- **HUB:** 47" x 47" structure with hexagonal opening where FUEL is scored
- **DEPOT:** 42" x 27" structure containing pre-staged FUEL
- **OUTPOST:** Assembly where HUMAN PLAYERS feed FUEL and receive FUEL from robots
- **BUMP:** 73" wide x 6.5" tall obstacles robots drive over
- **TRENCH:** 65.65" wide x 40.25" tall structures robots drive under
- **TOWER:** Structure with three RUNGS (LOW at 27", MID at 45", HIGH at 63") for climbing

### Match Structure (2:40 total)
1. **AUTO (0:20):** Autonomous operation, both HUBs active
2. **TRANSITION SHIFT (0:10):** Both HUBs active
3. **ALLIANCE SHIFTS (1:40):** Four 25-second periods where HUBs alternate active/inactive based on AUTO performance
4. **END GAME (0:30):** Both HUBs active, robots climb TOWER

### Scoring Actions
- **FUEL Scoring:** 1 point per FUEL in active HUB (AUTO and TELEOP)
- **Climbing:**
  - AUTO: 15 points for LEVEL 1 (max 2 robots)
  - TELEOP: 10 points (LEVEL 1), 20 points (LEVEL 2), 30 points (LEVEL 3)
- **Bonus Ranking Points:** ENERGIZED RP (100 FUEL), SUPERCHARGED RP (360 FUEL), TRAVERSAL RP (50 TOWER points)

## Understanding the Configuration Fields

### Scouting FUEL in the 2026 REBUILT Game

In the **2026 REBUILT** game, scouting **FUEL** presents a unique challenge due to the high-velocity scoring mechanics, where robots are expected to launch 1 to 10+ **FUEL** per second into the **HUB**. Because the sheer volume of scoring makes precise live counting nearly impossible, **ScoutingPASS** will implement a two-pronged approach that prioritizes relative performance and statistical distribution over absolute manual precision.

#### Method 1: Real-Time Estimation

During both the **AUTO** and **TELEOP** periods, scouts will be trained to record real-time estimates of **FUEL** scored. While this method carries an inherent margin of error, it effectively differentiates robots by their order of magnitude in performance.

*   **Differentiating Capacity**: A robot shooting a single round of 10 **FUEL** at max speed might be recorded as scoring 9, while a high-tier robot shooting 30 **FUEL** might be estimated at 25.
*   **Metric Priority**: Even with variance, the data clearly identifies the higher-volume shooter, which is the primary metric needed for alliance selection.
*   **Period Consistency**: This estimation is applied across both game periods to ensure a continuous profile of the robot's scoring capabilities.
*   **Additional ScoutingPASS Features**: ScoutingPASS has added the ability to add additional buttons to the counter field to allow adding to the counter in increments larger than 1. The REBUILT configuration adds +/-5 and +/-10 buttons to each Fuel counter allowing scouts to increase Fuel tracked by larger amounts.

#### Method 2: The Alliance Huddle and TBA Allocation

To reconcile live estimates with official match results, scouts from each alliance will huddle briefly following the match to determine a percentage-based contribution for each robot.

*   **Credit Assignment**: Scouts agree on the percentage of total **FUEL** scored by each of the three robots (e.g., 1%, 75%, and 24%).
*   **Official Data Integration**: The actual number of **FUEL** scored in the **HUB** is pulled from **The Blue Alliance**.
*   **Final Calculation**: Each robot is then credited with its assigned percentage of that official total; for instance, if 100 total **FUEL** were scored, the robots would be credited with 1, 75, and 24 **FUEL** respectively.

**Summary of Approach**

This strategy deliberately ignores the **HUMAN PLAYER**'s contributions, as the high-volume robot output is expected to render human-scored **FUEL** inconsequential to the final analysis. By combining live observations with post-match data reconciliation, **ScoutingPASS** provides a robust insight into robot performance that remains reliable even when tracking nearly identical, high-volume scoring machines.

### Pickup Location Tracking

The configuration tracks robot capabilities to pick up FUEL from various locations:

- **Depot Pickup:** Can the robot retrieve FUEL from the DEPOT?
- **Outpost Pickup:** Can the robot receive FUEL from HUMAN PLAYERS through the OUTPOST?
- **Floor/Neutral Zone Pickup:** Can the robot collect FUEL from the field carpet?

**AUTO vs TELEOP Context:**
- **AUTO:** "Pickup from Neutral Zone" specifically tracks floor pickup in the NEUTRAL ZONE, where FUEL is guaranteed to be staged
- **TELEOP:** "Pickup from Floor" tracks the ability to pick up FUEL anywhere on the field after initial placement

### Passing and FUEL Transfer

The "Pass from Neutral Zone" and "Pass from Opp Alliance Zone" counters track strategic FUEL redistribution:

**Purpose:** Identify robots that contribute to alliance scoring by relocating FUEL rather than scoring directly

**Examples:**
- Robot fills hopper with FUEL, drives to alliance zone, dumps FUEL near alliance partner
- Robot "shoots" FUEL from neutral or opposing zone to alliance zone for teammates to collect
- Robot cycles FUEL during inactive HUB periods to position FUEL for when HUB becomes active

**Strategic Value:** High passing numbers may indicate a valuable support robot even if direct scoring is low.

### Clickable Image Position Codes

**Auto Start Location:**
- `allowableResponses: "4 11 18 25 32 39 46 53 60 67"`
- These numbers correspond to specific positions along the ROBOT STARTING LINE
- Scouts click the starting position on the field image overlay

**Shooting Locations:**
- 40+ allowed positions covering most of the field
- Creates heat maps showing where robots prefer to shoot from
- Useful for identifying optimal shooting zones and planning defensive strategies

### Climbing Level Tracking

**AUTO Climbing:**
- Radio: "Climbed / Attempted / Not Attempted"
- Only tracks attempts at LEVEL 1 (15 points)
- Even if robot reaches higher level, only LEVEL 1 credit awarded in AUTO

**TELEOP Climbing:**
- Radio: "Level 1 / Level 2 / Level 3 / Attempted / Not Attempted"
- LEVEL 1: 10 points (no longer touching carpet/TOWER BASE)
- LEVEL 2: 20 points (BUMPERS completely above LOW RUNG)
- LEVEL 3: 30 points (BUMPERS completely above MID RUNG)

## Data Flow and Usage

### Development and Testing

1. **Configure:** Customize config files for your team's scouting priorities
2. **Generate Test Data:** Run `generate_test_data.py` to create realistic datasets
3. **Validate Tools:** Import test data into analysis tools to verify functionality
4. **Train Scouts:** Use test data to train scouts on the scouting interface
5. **Deploy:** Use refined configs and workflows at competitions

## Additional Resources

- **ScoutingPASS Documentation:** [https://github.com/PWNAGERobotics/ScoutingPASS](https://github.com/PWNAGERobotics/ScoutingPASS)
- **2026 Game Manual:** See [https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf](https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf) for complete game rules
- **The Blue Alliance:** [https://www.thebluealliance.com](https://www.thebluealliance.com) for event data and match schedules
- **FIRST Website:** [https://www.firstinspires.org](https://www.firstinspires.org) for program information

## Contributing

This configuration is designed for the 2026 REBUILT game. Teams are encouraged to:
- Customize configurations for their specific scouting strategies
- Share improvements and best practices with the FIRST community
- Contribute to the main ScoutingPASS project

## License

These configuration files are provided as-is for use by FIRST Robotics Competition teams participating in the 2026 season.

---

**Questions or Issues?**
- ScoutingPASS Issues: [GitHub Issues](https://github.com/PWNAGERobotics/ScoutingPASS/issues)
- REBUILT Game Questions: Post to [Chief Delphi](https://www.chiefdelphi.com/) scouting forums
