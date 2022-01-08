var config_data = `
{
  "title":"Scouting PASS 2020",
  "page_title":"InFInItE RECHARGE",
  "version":"0.01",
  "schedule_file":"2020mokc.js",
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
        "defaultValue":"2020mokc",
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
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2020/field_image.png"
      }
    },
    "auton": {
      "Exit line": {
        "code":"ae",
        "title": "Exit Line",
        "type":"bool"
      },
      "Lower Port": {
        "code":"al",
        "title": "Lower Port Scores",
        "type":"counter"
      },
      "Outer Port": {
        "code":"ao",
        "title": "Outer Port Scores",
        "type":"counter"
      },
      "Auto Aquire PCs": {
        "code":"aa",
        "title": "Picked up more PC",
        "type":"bool"
      },
      "Trench Run Auto": {
        "code":"at",
        "title": "Trench Run",
        "type":"bool"
      },
      "Opp Trench Run Auto": {
        "code":"ax",
        "title": "Opponents Trench Run",
        "type":"bool"
      }
    },
    "teleop": {
      "Lower Port": {
        "code":"lp",
        "title": "Lower Port Scores",
        "type":"counter"
      },
      "Outer Port": {
        "code":"op",
        "title": "Outer Port Scores",
        "type":"counter"
      },
      "Rotation Control": {
        "code":"rc",
        "title": "Rotation Control",
        "type":"pass_fail",
        "choices":{
          "pass":"Pass<br>",
          "fail":"Fail<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Position Control": {
        "code":"pc",
        "title": "Position Control",
        "type":"pass_fail",
        "choices":{
          "pass":"Pass<br>",
          "fail":"Fail<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2020/field_image.png"
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
      "Balanced": {
        "code":"b",
        "title": "Balanced",
        "type":"bool"
      },
      "Climb Assist": {
        "code":"ca",
        "title": "Assisted Climb",
        "type":"radio",
        "choices":{
          "x":"Not Attempted<br>",
          "a":"Lifted another robot<br>",
          "l":"Lifted by another robot<br>",
          "f":"Failed buddy climb"
        },
        "defaultValue":"x"
      },
      "Balanced After Climb": {
        "code":"cb",
        "title": "Balanced after climb",
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
      "Climb Speed": {
        "code":"cs",
        "title": "Climber Speed",
        "type":"radio",
        "choices":{
          "s":"Slow<br>",
          "m":"Medium<br>",
          "f":"Fast<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
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
      "PC Loading": {
        "code":"pl",
        "title": "Pick up PC where",
        "type":"radio",
        "choices":{
          "l":"Loading Bay<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Entered Trench Zone": {
        "code":"tr",
        "title": "Entered Trench Zone",
        "type":"bool"
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
