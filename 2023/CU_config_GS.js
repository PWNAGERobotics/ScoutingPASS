var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "enable_google_sheets": "true",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "gsCol": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023flwp",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
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
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "gsCol": "mobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "gsCol": "autohighcube",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "automedcube",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "autolowcube",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "autohighcone",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "automedcone",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "autolowcube",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
      "code": "ad",
      "gsCol": "autodocked",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "gsCol": "cycletimer",
      "type": "cycle"
    },
    { "name": "High Cube Scored",
      "gsCol": "teleophighcube",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "teleopmedcube",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "teleoplowcube",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "teleophighcone",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "teleopmedcone",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "teleoplowcone",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Feeder Count",
      "gsCol": "feedercount",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "gsCol": "wasdefended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "gsCol": "smartplacement",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "gsCol": "cargointakefrom",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Substation<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "gsCol": "dockingTime",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "finalStatus",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of alliance bots docked/engaged",
      "gsCol": "botsDocked",
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
    { "name": "Links Scored",
      "gsCol": "linksScored",
      "code": "ls",
      "type": "counter"
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
    { "name": "Swerve drive?",
      "gsCol": "swerveDrive",
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
    { "name": "Avoided coopertition",
      "gsCol": "avoidedCoopertition",
      "code": "coo",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "gsCol": "goodAlliancePartner",
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
