var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024mndu",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Start",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ans",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "anm",
      "type": "counter"
    },
    { "name": "Pickup Method",
      "code": "apu",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x" 
    },
    { "name": "Removed Algae",
      "code": "AlgaeRemovedAuto",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "tnm",
      "type": "counter"
    },
    { "name": "Pickup Method",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      }
    },
    { "name": "Algae Removed",
      "code": "AlgaeRemovedTeleop",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Failed Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Attained Coopertition Point",
      "code": "cop",
      "type": "bool"
    },
    {"name": "Spent at least half of the match playing defense",
      "code": "RobotPlayedHeavyDefenseInMatch",
      "type": "bool"
    },
    { "name": "Defense Rating",
      "code": "DefenseRatingInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Driver Skill",
    "code": "DriverSkillInMatch",
    "type": "radio",
    "choices": {
      "5": "5(Very Effective)",
      "4": "4<br>",
      "3": "3(Average)<br>",
      "2": "2<br>",
      "1": "1(Not Effective)<br>",
      "0": "0(Not Observed)<br>"
    },
    "defaultValue": "0"
  },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 220
    }
  ]
}`;
