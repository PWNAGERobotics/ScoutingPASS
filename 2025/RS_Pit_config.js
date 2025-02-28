
var config_data = `
{
  "title": "Reefscape 2025",
  "page_title": "Reefscape",
  "pitConfig": "true",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
	  "code": "s", 
	  "type": "text",
	  "size": 10,
	  "maxsize": 15
	},
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Dimensions",
      "code": "dm",
      "type": "text",
      "size": 10,
      "maxSize": 15
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
		"d": "Doesn't Know<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
	{ "name": "Coral Pickup Location",
      "code": "asp",
      "type": "radio",
	  "choices": {
		  "s": "Floor<br>",
		  "a": "HP<br>",
		  "b": "Both<br>",
		  "x": "no coral<br>"
	  },
	  "defaultValue": "x"
    },
    { "name": "Coral Place Location",
      "code": "asc",
      "type": "radio",
	  "choices": {
		  "s": "L1 only <br>",
		  "a": "All Levels<br>",
		  "b": "None<br>",
		  "x": "L2-L4<br>"
	  },
	  "defaultValue": "x"
    },
        { "name": "Main strategy",
      "code": "str",
      "type": "radio",
	  "choices": {
		  "s": "Algae <br>",
		  "a": "Coral<br>",
		  "b": "Defense<br>",
		  "x": "Anything<br>"
	  },
	  "defaultValue": "x"
    },
	{ "name": "How many coral in auto?",
	  "code": "ac", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "How many coral in teleop?",
	  "code": "tc", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "Able to deep climb?",
	  "code": "tra",
	  "type": "bool"
	},
	{ "name": "Able to shallow climb?",
	  "code": "clm",
	  "type": "bool"
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
