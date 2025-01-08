var config_data = `
{
  "title":"Scouting PASS 2020",
  "page_title":"InFInItE RECHARGE",
  "version":"0.01",
  "schedule_file":"2020mokc.js",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
     },
     { "name": "Event",
       "code": "e",
       "type": "event",
       "defaultValue": "2020mokc",
       "required": "true",
       "disabled": "true"
     },
     { "name": "Match Level",
       "code": "l",
       "type": "level",
       "choices": {
         "qm": "Quals<br>",
         "ef": "Eighth-Final<br>",
         "qf": "Quarter-Final<br>",
         "sf": "Semi-Final<br>",
         "f": "Final"
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
       "required": "true"
     },
     { "name": "Team #",
       "code": "t",
       "type": "team",
       "min": 1,
       "max": 99999
     },
     { "name": "Auto Start Position",
       "code": "as",
       "type": "field_image",
       "filename": "2020/field_image.png"
     }
   ],
   "auton": [
     { "name": "Exit line",
       "code": "ae",
       "type": "bool"
     },
     { "name": "Lower Port",
       "code": "al",
       "type": "counter"
     },
     { "name": "Outer Port",
       "code": "ao",
       "type": "counter"
     },
     { "name": "Auto Aquire PCs",
       "code": "aa",
       "type": "bool"
     },
     { "name": "Trench Run Auto",
       "code": "at",
       "type": "bool"
     },
     { "name": "Opp Trench Run Auto",
       "code": "ax",
       "type": "bool"
     }
   ],
   "teleop": [
     { "name": "Lower Port",
       "code": "lp",
       "type": "counter"
     },
     { "name": "Outer Port",
       "code": "op",
       "type": "counter"
     },
     { "name": "Rotation Control",
       "code": "rc",
       "type": "pass_fail",
       "choices": {
         "pass": "Pass<br>",
         "fail": "Fail<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Position Control",
       "code": "pc",
       "type": "pass_fail",
       "choices": {
         "pass": "Pass<br>",
         "fail": "Fail<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Shooting Spot",
       "code": "ss",
       "type": "field_image",
       "filename": "2020/field_image.png"
     }
   ],
   "endgame": [
     { "name": "Climb",
       "code": "c",
       "type": "pass_fail",
       "choices": {
         "pass": "Pass<br>",
         "fail": "Fail<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Balanced",
       "code": "b",
       "type": "bool"
     },
     { "name": "Climb Assist",
       "code": "ca",
       "type": "radio",
       "choices": {
         "x": "Not Attempted<br>",
         "a": "Lifted another robot<br>",
         "l": "Lifted by another robot<br>",
         "f": "Failed buddy climb"
       },
       "defaultValue": "x"
     },
     { "name": "Balanced After Climb",
       "code": "cb",
       "type": "pass_fail",
       "choices": {
         "pass": "Pass<br>",
         "fail": "Fail<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Num of Robots Climbed",
       "code": "cn",
       "type": "counter"
     },
     { "name": "Climb Speed",
       "code": "cs",
       "type": "radio",
       "choices": {
         "s": "Slow<br>",
         "m": "Medium<br>",
         "f": "Fast<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Parked",
       "code": "p",
       "type": "bool"
     }
    ],
   "postmatch": [
     { "name": "Driver Skill",
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
     { "name": "Defense Rating",
       "code": "dr",
       "type": "radio",
       "choices": {
         "n": "Not Effective<br>",
         "a": "Average<br>",
         "v": "Very Effective<br>",
         "x": "Not Observed"
       },
       "defaultValue": "x"
     },
     { "name": "PC Loading",
       "code": "pl",
       "type": "radio",
       "choices": {
         "l": "Loading Bay<br>",
         "g": "Ground<br>",
         "b": "Both<br>",
         "x": "Not Attempted"
       },
       "defaultValue": "x"
     },
     { "name": "Entered Trench Zone",
       "code": "tr",
       "type": "bool"
     },
     { "name": "Was Defended",
       "code": "wd",
       "type": "bool"
     },
     { "name": "Died",
       "code": "d",
       "type": "bool"
     },
     { "name": "Tipped",
       "code": "to",
       "type": "bool"
     },
     { "name": "Card Foul",
       "code": "cf",
       "type": "bool"
     },
     { "name": "Comments",
       "code":"co",
       "type":"text",
       "size":15,
       "maxSize":50
     }
   ]
}`;
