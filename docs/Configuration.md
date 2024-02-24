<div id="top"></div>

# Scouting P.A.S.S. Configuration

## **Configuration guide**

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#global">Global Attributes</a></li>
    <li><a href="#game-sections">Game Sections</a></li>
    <li><a href="#auton">Autonomous</a></li>
    <li><a href="#teleop">Teleop</a></li>
    <li><a href="#endgame">Endgame</a></li>
    <li><a href="#post-match">Post-Match</a></li>
    <li><a href="#element-types">Element Types</a></li>
  </ol>
</details>

<div id="overview"></div>

## Overview

A JSON configuration file controls the elements of the game to track.  Create a new configuration file each year for the new game, or tweak it week to week to refine your scouting.  No additional coding is needed.

Example configurations are located in the <YEAR> directories. For example, there are configurations for 2021, 2022, and 2023.

Technically, this is a javascript file that contains a variable that is a JSON string.  For all practical purposes, you can ignore the javascript part and treat this as a JSON file.

The main section of the JSON contains the global attributes and the 5 sections of the game.   (FIVE SECTIONS?!? - We consider pre-match and post-match as parts of the game to facilitate the collection of scouting data.)

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="global"></div>

## Global attributes

There are only a few global attributes to set up the application:
```
{ "dataFormat": "kvs",
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  <FIVE GAME SECTIONS>
}
```
### dataFormat
Two data formats are currently supported:<br>
 * kvs for key=value;key=value;...  (key, value, semicolon)
 * tsv for Tab-Separated Values, convenient for scanning or pasting directly into a spreadsheet row
### title
This is the title that will show up in the tab of the window.

### page-title
This will set the title at the top of each web page.

### checkboxAs
This configuration dictates how checkboxes data will be reported.   Default setting is "Y/N".

Acceptable values:<br>
"YN" - If checked the output of the element will contain a "Y".  If not checked it will contain a "N".<br>
"10" - If checked the output of the element will contain a "1".  If not checked it will contain a "0".<br>
"TF" - If checked the output of the element will contain a "T".  If not checked it will contain a "F".<br>

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="game-sections"></div>

## Game Sections

There are 5 game sections:

* Pre-Match
* Autonomous
* Teleop
* Endgame
* Post-Match

Each section is defined the same way.   Fields are added to each section to collect data related to that part of the game.

Each section maps to a separate page on the scouting screen and they progress in the order they are listed above.

The JSON is formatted like this:
```
{
  <GLOBAL ATTRIBUTES>,
  "prematch": [
    { Element1 Attributes },
    { Element2 Attributes },
    { ElementN Attributes }
  ],
  "auton": [
    { Element1 Attributes },
    { Element2 Attributes },
    { ElementN Attributes }
  ],
  "teleop": [
    { Element1 Attributes },
    { Element2 Attributes },
    { ElementN Attributes }
  ],
  "endgame": [
    { Element1 Attributes },
    { Element2 Attributes },
    { ElementN Attributes }
  ],
  "postmatch": [
    { Element1 Attributes },
    { Element2 Attributes },
    { ElementN Attributes }
  ]
}
```

### Pre-Match

Pre-Match is where the match details are set up.  This is data that can be collected before the match starts.

It includes many key fields, including Team Number, Match Number, Robot Position, and Scouter.

### Autonomous

Autonomous is for data that can be collected during the Autonomous period of the game. (Usually the first 15 seconds of a match)

### Teleop

Teleop collects data during the main portion of the game.

### Endgame

Games usually have a task that can only be done in the closing seconds of the game.  This would be the Endgame period.  

### Post-Match

Post-Match is used to collect data on the performance of the robot over the whole match.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="element-types"></div>

## Element Types

Each field element has specific attributes that are set in the JSON configuration.  

There are some attributes common to ALL elements:

* name - The text that is displayed on the left side of the screen for the element
* code - The code used to identify this element in the QR code encoding
* type - What type of element this is: text, number, counter, etc...
* tooltip (optional) - text intended to help clarify the meaning or use of the element.  It will appear when the mouse hovers over the "name".

The field elements are:

### Text - A freeform text field

```
{ "name": "My Text Field",
  "code": "mtf",
  "gsCol": "myTextField"
  "type": "text",
  "size": 15,
  "maxSize": 50,
  "disabled": "true",
  "defaultValue": "Text fields are awesome!",
  "tooltip": "Put help or more descriptive text here"
}
```
Specific attributes of text are:
* size (optional) - the number of characters displayed (default is usually 20)
* maxSize (optional) - the maximum number of characters allowed in this field (default = 524288)
* disabled (optional) - if "true", input to this field will be disabled. It will be read-only.  (default = false)
* defaultValue (optional) - set the field to start at a certain value

The text element will be set back to the defaultValue value when the Clear Form button is pressed.  
If there is no defaultValue it will be reset to blank.

Special sub-elements of text are "scouter" and "event".  These sub-types do not have any extra functionality.
However, they are required to move past Pre-Match as they are key elements to track scouting data.

### Number - A text field, but restricted to numbers

```
{ "name": "My Number Field",
  "code": "mnf",
  "type": "number",
  "min": 1,
  "max": 100,
  "disabled": "true",
  "defaultValue": 0,
  "tooltip": "Put help or more descriptive text here"
},
```
Specific attributes of number are:
* min (optional) - the lowest number allowed in this field
* max (optional) - the largest number allowed in this field
* disabled (optional) - if "true", input to this field will be disabled. It will be read-only.  (default = false)
* defaultValue (optional) - set the field to start at a certain value

The number element will be set back to the defaultValue value when the Clear Form button is pressed.  
If there is no defaultValue it will be reset to blank.

Special sub-elements of text are "match" and "team".  These sub-types will update the team number field and team nickname text if the TBA interface has been enabled. These two fields are required to move past Pre-Match as they are key elements to track scouting data.

### Counter - A counter that can be increased or decreased with a click or touch

```
{ "name": "My counter",
  "code": "mc",
  "type": "counter",
  "defaultValue": 0,
  "tooltip": "Put help or more descriptive text here"
}
```
The counter is displayed with two buttons labeled "-" and "+" to increase or decrease the counter number.

Specific attributes of counter are:
* defaultValue (optional) - set the field to start at a certain value

The counter element will be set back to the defaultValue value when the Clear Form button is pressed.  
If there is no defaultValue it will be reset to zero.

### Radio Buttons - A single choice between several Options

```
{ "name": "My Radio Button",
  "code": "mrb",
  "type": "radio",
  "choices": {
    "1": "Choice 1",
    "2": "Choice 2",
    "3": "Choice 3",
    "4": "Choice 4",
    "N": "Choice N"
  },
  "defaultValue": "a",
  "tooltip": "Put help or more descriptive text here"
}
```
The radio button element will display all the choices with a selection circle next to each one.
Click the circle next to the item you want to select.  Only one of the choices can be selected at any given time.

Specific attributes to counter are:
* choices - a map of the choices to select between.  The first string is the value that will be returned in the QR Code and the second string is the description text of the selection that shows on the screen.
* defaultValue (optional) - set the field to start at a certain value

The Radio Button element will be set back to the defaultValue value when the Clear Form button is pressed.  

Special sub-elements of the radio button element are "level" and "robot".  When updating the robot and level element it will update the team number field and team nickname text if the TBA interface has been enabled. These two fields are required to move past Pre-Match as they are key elements to track scouting data.

### Checkbox - A single on/off or yes/no checkbox

```
{ "name": "My Checkbox",
  "code": "mc",
  "type": "checkbox",
  "tooltip": "Put help or more descriptive text here"
}
```

A checkbox element represents a true/false or on/off option.  It toggles from true/false or on/off every time you click the box.

There are no specific attributes to this element.

You can also use type = "bool" which adds "(checked = Yes)" to the name.

### Timer - A time counter to count the number of seconds it takes to do something

```
{ "name": "My Timer",
  "code": "mt",
  "type": "timer",
  "tooltip": "Put help or more descriptive text here"
}
```

This element allows timing events.  The timer can be started, stopped, and reset.  Reset will stop the timer and reset the timer to zero.  Note - The start button turns into the stop button when the timer is pressed.

There are no specific attributes to this element.

The sub-type of timer, cycle timer, will be described in the next section.

### Cycle Timer - Start the timer and with 1 click track cycle times of robots.  

```
{ "name": "My Cycle Timer",
  "code": "mct",
  "type": "cycle"
}
```

The Cycle Timer element is a specialized Timer element.  It tracks cycles during the match.  When you start the timer, you have several options.  You can stop and reset the timer, like the Timer element.  In addition, you can click the "New Cycle" button and the current time will be stored in the text box above the timer and the timer is reset to zero and continue running.  You can do this as many times as you'd like.  If a cycle has been recorded mistakenly, there is an "Undo" button to remove the last cycle time.  You can undo as many times as you want until there are no cycle times left to remove.

There are no specific attributes to this element.

### Clickable Image - Allow recording locations on an image.  

```
{ "name": "My Clickable Image",
  "code": "mci",
  "type": "clickable_image",
  "filename": "2023/field_image.png",
  "dimensions": "12 6",
  "toggleClick": "true",
  "clickRestriction": "onePerBox",
  "showFlip": "false",
  "showUndo": "false",
  "shape": "circle 12 black red true",
  "cycleTimer": "tct"
}
```
The clickable_image element allows the collection of data through images.  The first use case was to record a robot's starting position on the field.  It is also used to record the shooting locations of robots.  The way it works is the image is turned into a grid of boxes.  Each box is numbered.  When the image is clicked, the box number corresponding to the X/Y coordinates is recorded.  Through the attributes of the element, you can record one or many different clicks/boxes.  The number of boxes is configurable as well as the behavior of each click.  You have the option of showing a "Flip" button which will flip the image 180 degrees, which is helpful if your scouters are sitting on the opposite side of the field and they see the field from the opposite direction.  There is also an "Undo" button which allows scouters to remove the last recorded box from the element.  There are also configuration settings for shape, size, color, and fill of the shape to mark your click.  Finally, this element can be tied into a cycle timer.  Every click will start a new cycle.  So, if you have an image of a scoring location, you just need to click the image and the program will not only record the scoring location, but the cycle time as well.

Specific attributes of Cycle Timer are:
* filename - the location of the file image that you want to use.  It must be local to the website you are using.
* dimensions (optional) - this controls the number of boxes the image will be divided into.  The first value is the number of boxes along the x-axis and the second number is the number of boxes along the y-axis.  (Default values are "12 6" for 72 boxes)
* toggleClick (optional)- if set to "true", if a box has already been clicked, clicking it again will "unclick" that box.  It will no longer be stored and reported. (Default value: false)
* clickRestrictions (optional) - this dictates how many clicks are allowed for this element.<br>Acceptable values are:<br>
  * none (default) - clicks are unrestricted
  * one - only one click is stored.  Clicks after the first will replace the value stored
  * onePerBox - only one click per box is stored.
* showFlip (optional) - Show the "Flip" button.  (Default value: true)
* showUndo (optional) - Show the "Undo" button.  (Default value: true)
* shape (optional) - configure the shape shown on the image at the location of a click.  The format for this attribute is "shape size lineColor fillColor fill".<br>
  * shape - "circle" is the only supported shape at this time
  * size - the radius of the circle in pixels (Default value: 5)
  * lineColor - color of the outline of the circle. (Default value: white)
  * fillColor - color to fill in the shape (Default value: none)
  * fill - if true, fill in the shape with the fillColor, otherwise do not fill in the shape
  * Note: Use predefined [HTML color names](https://www.w3schools.com/colors/colors_names.asp) only
* cycleTimer (optional) - tie clicks into a cycle timer to start new cycles every time the image is clicked.

The element field_image has been deprecated in favor of the new more flexible clickable_image.  It is currently still supported but may be removed from future releases.

<p align="right">(<a href="#top">back to top</a>)</p>
