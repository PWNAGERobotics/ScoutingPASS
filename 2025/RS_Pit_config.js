
var config_data = `
{
  "title": "Reefscape 2025",
  "page_title": "reefscape",
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
	{ "name": "Can they drive under<br>the stage?",
	  "code": "dus",
	  "type": "bool"
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
    { "name": "Game piece pick up location",
      "code": "pul",
      "type":"radio",
      "choices": {
        "d": "Source/H.P. station only<br>",
		"f": "Floor pick-up only<br>",
        "b": "All locations<br>",
        "x": "Can not manipulate game pieces"
      },
      "defaultValue": "x"
    },
	{ "name": "Auton Start Position Preference<br>(Based on RED side)",
      "code": "sp",
      "type": "radio",
	  "choices": {
	    "r": "Right<br>",
		"c": "Center<br>",
		"l": "Left<br>",
		"o": "Off Speaker<br>",
		"v": "Varies/doesn't matter"
	  },
	  "defaultValue": "v"
    },
	{ "name": "Algae Scoring",
      "code": "asc",
      "type": "radio",
	  "choices": {
		  "s": "Algae off reef<br>",
		  "a": "Algae Ground <br>",
		  "b": "Both<br>",
		  "x": "no Algae<br>"
	  },
	  "defaultValue": "x"
    },
	{ "name": "How many in auto?",
	  "code": "ac", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "Coral scoring",
      "code": "ts",
      "type": "radio",
	  "choices": {
		  "s": "Reef only<br>",
		  "a": "Ground only<br>",
		  "b": "Both<br>",
		  "x": "no Coral"
	  },
	  "defaultValue": "x"
    },
	{ "name": "How many Coral in teleop?",
	  "code": "tc", 
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "Able to climb?",
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

