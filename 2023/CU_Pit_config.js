var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
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
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
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
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1<br>",
        "2": "L2<br>",
        "3": "L3<br>",
        "4": "L4<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Game piece pick up",
      "code": "fco",
      "type":"radio",
      "choices": {
        "d": "Double Substation only<br>",
        "s": "Single Substation/Floor pick-up only<br>",
        "b": "Both substation<br>",
        "x": "Can not manipulate game pieces"
      },
      "defaultValue": "x"
    },
	{ "name": "Floor pick up",
      "code": "fcu",
      "type":"radio",
      "choices": {
        "u": "Cubes only<br>",
        "o": "Cones only<br>",
        "b": "Both<br>",
        "x": "Can not manipulate game pieces"
      },
      "defaultValue": "x"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
	{ "name": "Auton Start Position",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "shape": "circle 5 black red true"
    },
	{ "name": "Auton Scoring",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
	{ "name": "Where can they score in teleop?<br>(bottom, middle, top, or all rows)",
      "code": "ts",
      "type": "text",
      "size": 20,
      "maxSize": 250
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
