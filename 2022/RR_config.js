var config_data = `
{
  "title":"Scouting PASS 2022",
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
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"wbt",
        "title": "Wallbot?",
        "type":"bool"
      },
      "Cargo Intake From": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
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
      "If climb failed,<br>Last successful rung,<br>if any": {
        "code":"lsr",
        "title": "If climb failed,<br>last successful rung,<br>if any",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "n":"No successful rung<br>",
          "x":"n/a"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
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
      "Died/Tipped": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
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
