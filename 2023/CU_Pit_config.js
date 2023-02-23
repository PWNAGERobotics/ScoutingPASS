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
    { "name": "Width (bumpers included)",
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
    { "name": "Swerve Ratio (speed)",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1 or 12-13 ft/sec)<br>",
        "2": "L2 (6.75:1 or 14-16 ft/sec)<br>",
        "3": "L3 (6.12:1 or 16-18 ft/sec)<br>",
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
    { "name": "Game piece pick up location",
      "code": "pul",
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
      "code": "fpu",
      "type":"radio",
      "choices": {
        "u": "Cubes only<br>",
        "o": "Cones only<br>",
        "b": "Both<br>",
        "x": "Can not manipulate game pieces"
     },
      "defaultValue": "x"
    },
    { "name": "Cone pick up orientation<br>from floor",
      "code": "coo",
      "type": "radio",
      "choices": {
        "u": "Upright only<br>",
        "s": "On side only<br>",
        "a": "All orientation<br>",
        "x": "Cannot pick up<br>cones off the floor"
      },
      "defaultValue":"x"
    },
	{ "name": "Auton Start Position",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "shape": "circle 5 black red true"
    },
	{ "name": "Auton Scoring<br>(highest scoring option)",
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
	{ "name": "Confidence engaging in auton",
      "code": "aec",
      "type":"radio",
      "choices": {
        "a": "1 (not tested at all, no confidence)<br>",
        "b": "2<br>",
        "c": "3<br>",
        "d": "4<br>",
		"e": "5 (highly tested, repeatable)<br>",
		"f": "Cannot engage in auton"
	  },
	  "defaultValue": "f"
    },
	{ "name": "Teleop scoring ability<br>(bottom, middle, top, or all rows)",
      "code": "ts",
      "type": "text",
      "size": 20,
      "maxSize": 250
	},
	{ "name": "# of cycles on teleop",
      "code": "tc",
      "type": "counter"
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
