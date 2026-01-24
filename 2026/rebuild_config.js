var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "<b>REBUILD</b>",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "false"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026pnst",
      "required": "false"
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
      "required": "false"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "false"
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
      "required": "false"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Pre-Loaded",
      "code": "pl",
      "type": "bool"
    },
    { "name": "Climbed to Level 1",
      "code": "clo",
      "type": "bool"
    },
    { "name": "Collect From Depot",
      "code": "cfd",
      "type": "bool"
    },
    { "name": "Scored Into Hub",
      "code": "sih",
      "type": "bool"
    },
    { "name": "Collect From Neutral",
      "code": "cfn",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Full Sets of Coral Scored",
      "code": "scs",
      "type": "counter"
    },

    { "name": "Pickup From Neutral",
      "code": "pfn",
      "type": "bool"
    },
    { "name": "Pickup from depot",
      "code": "pfd",
      "type": "bool"
    },
    { "name": "goes under trench",
      "code": "gut",
      "type": "bool"
    },
    { "name": "Goes Over Bump",
      "code": "gob",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "climb timer",
      "code": "clt",
      "type": "timer"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "type": "radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Failed Climb<br>",
        "bb": "Level 1<br>",
        "bc": "Level 2<br>",
        "bd": "Level 3<br>",
        
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Algae Left in Reef",
      "code": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    },
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "b": "Bad<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Bad<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    }, 
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3 (fast)<br>"
      },
      "defaultValue":"2"
    },
    { "name": "energized",
      "code": "egz",
      "type": "bool"
    },
    { "name": "supercharged",
      "code": "sch",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
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
      "maxSize": 55
    }
  ]
}`;
