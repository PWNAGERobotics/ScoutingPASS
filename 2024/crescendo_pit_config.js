var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Acquire Notes",
      "type": "radio",
      "code": "fpu",
      "choices": {
        "f": "Floor<br>",
        "s": "Source<br>",
        "b": "Both"
      },
      "defaultValue": "b"
    },
    { "name": "Score Speaker in Tele",
      "code": "spk",
      "type": "bool"
    },
    { "name": "Score Amp in Tele",
      "code": "amp",
      "type": "bool"
    },
    { "name": "Estimated Cycles/Match",
      "code": "cyc",
      "type": "number"
    },
    { "name": "Auto Start Position",
      "code": "asp",
      "type": "radio",
      "choices": {
        "c": "Center Speaker<br>",
        "l": "Left Speaker<br>",
        "r": "Right Speaker<br>",
        "a": "Any Speaker<br>",
        "f": "Away from Speaker<br>",
      },
      "defaultValue": "f"
    },
    { "name": "Auto Movement",
      "code": "move",
      "code": "trp",
      "type": "bool"
    },
    { "name": "Auto Speaker Notes (reliable)",
      "code": "asn",
      "type": "number"
    },
    { "name": "Auto Comments",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Climb",
      "code": "clb",
      "type": "radio",
      "choices": {
        "s": "Solo<br>",
        "h": "Harmony<br>",
        "n": "N/A"
      },
      "defaultValue": "n"
    },
    { "name": "Score Trap",
      "code": "trp",
      "type": "bool"
    },
    { "name": "High Note Percentage",
      "code": "hnp",
      "type": "number"
    },
    { "name": "General Comments",
      "code": "co",
      "type": "text",
      "size": 40,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
