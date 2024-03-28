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
    { "name": "Scoring capability",
      "code": "wid",
      "type": "radio",
      "choices": {
        "amp": "Amp<br>",
        "spk": "Speaker<br>",
        "amp+spk": "Both<br>"
      }
    },
    { "name": "Hang from chain?",
      "code": "wei",
      "type": "radio",
      "choices": {
        "+chain+H": "Yes with harmony<br>",
        "+chain-H": "Yes but no harmony<br>",
        "-chain-H": "No<br>"
      }
    },
    { "name": "Avg cycle estimate",
      "code": "drv",
      "type": "number"
    },
    { "name": "Pickup",
      "code": "odt",
      "type": "radio",
      "choices": {
        "g_pickup": "Ground<br>",
        "s_pickup": "Source<br>",
        "b_pickup": "Both<br>"
      }
    },
    { "name": "Can score trap?",
      "code": "sr",
      "type": "radio",
      "choices": {
        "y_trap": "Yes<br>",
        "n_trap": "No<br>"
      }
    },
    { "name": "Auto strat",
      "code": "mot",
      "type": "text"
    },
    { "name": "Additional notes",
      "code": "nob",
      "type": "text"
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
