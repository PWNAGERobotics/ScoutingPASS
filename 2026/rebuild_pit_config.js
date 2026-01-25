var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "<b>REBUILD</b>",
  "pitConfig": "true",
  "prematch": [

    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 20,
      "maxSize": 20,
      "required": "true"
    },

    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "required": "true"
    },
    
    { "name": "length(in)",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },

    { "name": "Width(in)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },

    { "name": "Height(in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    
    { "name": "Weight(lbs)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },

    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grasshopper<br>",
        "m": "Mecanum<br>"
      },
      "defaultValue": "o"
    },

    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "k": "Kraken<br>"
      },
      "defaultValue":"x"
    },

    { "name": "fuel intake amount",
     "code": "fia",
     "type": "number",
     "defaultValue": "0"
    },

    { "name": "number of limelights",
     "code": "nol",
     "type": "number",
     "defaultValue": "0"
    },



    { "name": "Go over bump",
      "code": "gob",
      "type": "bool"
    },

    { "name": "can go under trench",
     "code": "gut",
     "type": "bool"
    },

    { "name": "climb level",
     "code": "cl",
     "type": "radio",
        "choices": {
            "0": "No climb<br>",
            "1": "Level 1<br>",
            "2": "Level 2<br>",
            "3": "Level 3<br>"
        },
        "defaultValue":"0"
    },


    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },

    { "name": "auto score amount",
     "code": "asa",
     "type": "number",
     "defaultValue": "0"
    },

    { "name": "auto tower climb level",
     "code": "atcl",
     "type": "radio",
        "choices": {
            "0": "No climb<br>",
            "1": "Level 1<br>",
            "2": "Level 2<br>",
            "3": "Level 3<br>"
        },
        "defaultValue":"0"
    },

    {"name": "intake type",
    "code": "it",
    "type": "text",
    "size": 20,
    "maxSize": 100
    },

    { "name": "avg fuel per second",
     "code": "afps",
     "type": "number",
     "defaultValue": "0"
    },

    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
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
