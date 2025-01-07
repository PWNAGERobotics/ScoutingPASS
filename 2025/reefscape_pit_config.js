var config_data = `
{
    "dateFormat": "tsv",
    "title": "Scouting PASS 2025", 
    "page_title": "Reefscape",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Scouter Initials", 
            "code": "s",
            "size": 5,
            "maxSize": 5, 
            "required": "true"
        },
        {
            "name": "Event", 
            "code": "e",
            "type": "event",
            "defaultValue": "",
            "required": "true"
        },
        {
            "name": "Match Level",
            "code": "l",
            "type": "level",
            "choices": 
            {
                "qm": "Quals<br>",
                "sf": "Semifinals<br>",
                "f": "Finals"
            }
            "defaultValue": "qm"
            "required": "true"
        },
        { 
            "name": "Match #",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "required": "true"
        },
        {
            "name": "Robot",
            "code": "r",
            "type": "robot",
            "choices": 
            {
                "r1": "Red-1",
                "b1": "Blue-1<br>",
                "r2": "Red-2",
                "b2": "Blue-2<br>",
                "r3": "Red-3",
                "b3": "Blue-3"
            },
            "required":"true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999
        },
        {
            "name": "Started With Coral",
            "code": "sc",
            "type": "bool",
        }
    ],
    "auton": [
    
    ]
}`;