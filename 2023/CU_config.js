var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024micmp1",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
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
    { "name": "Is their robot<br>on the field?",
      "code": "as",
      "type": "bool"
	}
  ],
  "auton": [
    { "name": "Leave Starting Zone",
	  "code": "al",
	  "type": "bool"
	},
    { "name": "Scored in Amp",
      "code": "asa",
      "type": "counter"
    },
    { "name": "Attempted in Amp",
      "code": "aaa",
      "type": "counter"
    },
    { "name": "Scored in Speaker",
      "code": "ass",
      "type": "counter"
    },
	{ "name": "Attempted in Speaker",
	  "code": "aas",
	  "type": "counter"
	}
  ],
  "teleop": [
    { "name": "Scored in Amp",
      "code": "tsa",
      "type": "counter"
    },
    { "name": "Attempted in Amp",
      "code": "taa",
	  "type": "counter"
	},
	{ "name": "Scored in Speaker",
      "code": "tss",
      "type": "counter"
    },
	{ "name": "Attempted in Speaker",
	  "code": "tas",
	  "type": "counter"
	},
	{ "name": "Launched across field",
	  "code": "laf",
	  "type": "counter"
	},
	{ "name": "Who defended them?<br>(if not defended, ignore)",
	  "code": "wdt",
	  "type": "text"
	},
    { "name": "Pickup From:",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
		    "o": "Onstage<br>",
		    "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
	{ "name": "Scored in Trap",
      "code": "sit",
      "type": "counter"
    },
	{ "name": "Attempted in Trap",
      "code": "ait",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average (the thought was there)<br>",
        "a": "Average (got in the way from time to time)<br>",
        "g": "Good (was very annoying)<br>",
        "e": "Excellent (An absolute menace)<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
	{ "name": "Who did they defend?",
	  "code": "who",
	  "type": "text"
	},
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 10000
    }
  ]
}`;
