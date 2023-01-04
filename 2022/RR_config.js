var config_data = `
{
  "title": "Scouting PASS 2022",
  "page_title": "Rapid React",
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
      "defaultValue": "2022ilpe",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
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
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
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
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "auton": [
    { "name": "Taxied?",
      "code": "at",
      "type": "bool"
    },
    { "name": "Upper Cargo Scored",
      "code": "au",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "code": "al",
      "type": "counter"
    },
    { "name": "Picked up more cargo?",
      "code": "ac",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Upper Cargo Scored",
      "code": "tu",
      "type": "counter"
    },
    { "name": "Lower Cargo Scored",
      "code": "tl",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Wallbot?",
      "code": "wbt",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
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
      "code": "ss",
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "endgame": [
    { "name": "Climb",
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
      "code": "be",
      "type": "bool"
    },
    { "name": "# of alliance bots climbed",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
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
      "tooltip": "Strategically held enemy cargo during the match",
      "code": "hc",
      "type": "bool"
    },
    { "name": "Swerve drive?",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
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
      "code": "d",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
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
