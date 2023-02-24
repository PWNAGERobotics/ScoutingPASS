var config_data = `
{
  "title": "Scouting PASS 2022",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Iowa Competition",
      "code": "e",
      "type": "event",
      "defaultValue": "2022ilpe",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "Quals<br>",
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
    { "name": "Match #2",
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
    { "name": "On Powerstation?",
      "code": "at",
      "type": "bool"
    },
    { "name": "Pieces?",
      "code": "au",
      "type": "counter"
    },
    { "name": "Position?",
      "code": "al",
      "type": "counter"
    },
    { "name": "Score?",
      "code": "ac",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Power Station Scored",
      "code": "tu",
      "type": "counter"
    },
    { "name": "Average Time",
      "code": "tl",
      "type": "counter"
    },
    { "name": "Position",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Balance?",
      "code": "wbt",
      "type": "bool"
    },
     { "name": "What game peices can it pick up?",
      "code": "wbt",
      "type": "bool"
    },
    { "name": "Game Piece Intake From",
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
    { "name": "Heighest Tier it cane place",
      "code": "ss",
      "type": "field_image",
      "filename": "2022/field_image.png"
    }
  ],
  "endgame": [
    { "name": "Power Station",
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
    { "name": "Started Power Station before Endgame",
      "code": "be",
      "type": "bool"
    },
    { "name": "# of alliance bots are on the Power Station",
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
