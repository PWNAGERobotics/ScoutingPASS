var config_data = `
{
  "title": "Scouting PASS 2022",
  "page_title": "Rapid React",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2022ilpe",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "ef": "Eighth-Final<br>",
        "qf": "Quarter-Final<br>",
        "sf": "Semi-Final<br>",
        "f": "Final"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "matchNum",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "robot",
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
      "gsCol": "teamNum",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "autoStartPos",
      "code": "as",
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "auton": [
    { "name": "Taxied?",
      "gsCol": "taxi",
      "code": "at",
      "type": "bool"
    },
    { "name": "Upper Cargo Scored",
      "gsCol": "autoUpper",
      "code": "au",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "gsCol": "autoLower",
      "code": "al",
      "type": "counter"
    },
    { "name": "Picked up more cargo?",
      "gsCol": "autoPickUp",
      "code": "ac",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Upper Cargo Scored",
      "gsCol": "upper",
      "code": "tu",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "gsCol": "lower",
      "code": "tl",
      "type": "counter"
    },
    { "name": "Was Defended",
      "gsCol": "defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Wallbot?",
      "gsCol": "wallbot",
      "code": "wbt",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "gsCol": "cargoIntake",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Terminal<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Shooting Spot",
      "gsCol": "shootingSpots",
      "code": "ss",
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "gsCol": "climb",
      "code": "c",
      "type":"radio",
      "choices": {
        "1": "Low<br>",
        "2": "Mid<br>",
        "3": "High<br>",
        "4": "Traversal<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Started Climb before Endgame",
      "gsCol": "climbBeforeEndgame",
      "code": "be",
      "type": "bool"
    },
    { "name": "# of alliance bots climbed",
      "gsCol": "numClimbed",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "driverSkill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "gsCol": "defenseRating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Enemy Balls",
      "gsCol": "heldBalls",
      "tooltip": "Strategically held enemy cargo during the match",
      "code": "hc",
      "type": "bool"
    },
    { "name": "Swerve drive?",
      "gsCol": "swerve",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "gsCol": "speedRating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "gsCol": "died",
      "code": "d",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "gsCol": "goodPartner",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
      "gsCol": "confidenceRating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "v": "Very Confident<br>",
        "a": "Average<br>",
        "n": "Not Confident"
        },
      "defaultValue": "a"
    }
  ]
}`;
