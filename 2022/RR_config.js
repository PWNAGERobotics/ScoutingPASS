var config_data = `
{
  "title":"Scouting PASS 2020",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022flwp",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999,
        "disabled":"true"
      }
    },
    "auton": {
      "Exit line": {
        "code":"ae",
        "title": "Exit Line",
        "type":"bool"
      },
      "Score Game Piece": {
        "code":"sg",
        "title": "Score Game Piece",
        "type":"counter"
      },
      "Auto Aquire Game Piece": {
        "code":"ag",
        "title": "Picked up more GP",
        "type":"bool"
      },
      "Special Auto Task": {
        "code":"at",
        "title": "Special Task",
        "type":"bool"
      }
    },
    "teleop": {
      "Score Game Piece": {
        "code":"gp",
        "title": "Score GP:",
        "type":"counter"
      },
      "Special Task": {
        "code":"ts",
        "title": "Special Task",
        "type":"pass_fail",
        "choices":{
          "pass":"Pass<br>",
          "fail":"Fail<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"pass_fail",
        "choices":{
          "pass":"Pass<br>",
          "fail":"Fail<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      },
      "Parked": {
        "code":"p",
        "title": "Parked",
        "type":"bool"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Died": {
        "code":"d",
        "title": "Died",
        "type":"bool"
      },
      "Tipped": {
        "code":"to",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;
