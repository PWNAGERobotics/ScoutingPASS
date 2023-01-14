var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
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
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Grabbed Second Element",
      "code": "gse",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
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
    { "name": "High Cube Scored",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "tol",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Final Status",
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
    { "name": "Helping to Balance",
      "code": "htb",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Contribution",
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
    { "name": "Speed Rating",
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
      "code": "d",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
