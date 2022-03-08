var config_data = `
{
  "title":"Team 5924: Scouting PASS 2022",
  "page_title":"Rapid React - team 5924",
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
        "defaultValue":"2022 SFR",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
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
        "filename":"2022/field_image.png"
      },
      "Acquired Cargo?": {
        "code":"acqcar",
        "title": "Acquired Cargo?",
        "type":"bool"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Blue Upper Cargo Scored": {
        "code":"bau",
        "title": "Blue Upper Cargo Scored",
        "type":"counter"
      },
      "Blue Lower Cargo Scored": {
        "code":"bal",
        "title": "Blue Lower Cargo Scored",
        "type":"counter"
      },
      "Red Upper Cargo Scored": {
        "code":"rau",
        "title": "Red Upper Cargo Scored",
        "type":"counter"
      },
      "Red Lower Cargo Scored": {
        "code":"ral",
        "title": "Red Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
    },
    "teleop": {
      "Blue Upper Cargo Scored": {
        "code":"btu",
        "title": "Blue Upper Cargo Scored",
        "type":"counter"
      },
      "Blue Lower Cargo Scored": {
        "code":"btl",
        "title": "Blue Lower Cargo Scored",
        "type":"counter"
      },
      "Red Upper Cargo Scored": {
        "code":"rtu",
        "title": "Red Upper Cargo Scored",
        "type":"counter"
      },
      "Red Lower Cargo Scored": {
        "code":"rtl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "a":"Attempted but failed<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
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
      "Shot enemy balls away?": {
        "code":"ba",
        "title": "Shot enemy balls away?",
        "type":"bool"
      },
      "Penalties": {
        "code":"ps",
        "title": "Penalties",
        "type":"counter"
      },
      "Fouls": {
        "code":"fs",
        "title": "Fouls",
        "type":"counter"
      },
      "Received Red Card?": {
        "code":"rc",
        "title": "Received Red Card?",
        "type":"bool"
      },
      "Received Yellow Card?": {
        "code":"yc",
        "title": "Received Yellow Card?",
        "type":"bool"
      },
      "Bumpers fell off?": {
        "code":"bps",
        "title": "Bumpers fell off?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "(SKIP THIS) Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "v":"Very Confident<br>",
          "a":"Average<br>",
          "n":"Not Confident"
      },
       "defaultValue":"a"
    }
    }
  }
}`;
