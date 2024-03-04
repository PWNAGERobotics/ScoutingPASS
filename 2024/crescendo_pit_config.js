var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo - Copper Hawks",
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
    { "name": "Teleop - Acquire Notes",
      "type": "radio",
      "code": "fpu",
      "choices": {
        "f": "Floor<br>",
        "s": "Source<br>",
        "b": "Both"
      },
      "defaultValue": "b"
    },
    { "name": "Teleop - Score Speaker",
      "code": "spk",
      "type": "bool"
    },
    { "name": "Teleop - Score Amp",
      "code": "amp",
      "type": "bool"
    },
    { "name": "Teleop - Estimated Cycles",
      "code": "cyc",
      "type": "number",
      "tooltip": "How many notes they expect to score in teleop"
    },
    { "name": "Auto - Start Position",
      "code": "asp",
      "type": "radio",
      "choices": {
        "c": "Center Speaker<br>",
        "l": "Left Speaker<br>",
        "r": "Right Speaker<br>",
        "a": "Any Speaker<br>",
        "f": "Away from Speaker<br>"
      },
      "defaultValue": "f"
    },
    { "name": "Auto - Movement",
      "code": "move",
      "code": "trp",
      "type": "bool",
      "tooltip": "Are they capabable of reliably getting the movement bonus"
    },
    { "name": "Auto - Speaker Notes (reliable)",
      "code": "asn",
      "type": "number",
      "tooltip": "How many notes they expect to score in teleop"
    },
    { "name": "Auto - Other Comments",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Endgame - Climb",
      "code": "clb",
      "type": "radio",
      "choices": {
        "s": "Solo<br>",
        "h": "Harmony<br>",
        "n": "N/A"
      },
      "defaultValue": "n"
    },
    { "name": "Endgame - Score Trap",
      "code": "trp",
      "type": "bool"
    },
    { "name": "Endgame - High Note %",
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
