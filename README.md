<div id="top"></div>

# Scouting P.A.S.S.

#### A scouting system for FIRST FRC competitions developed by [PWNAGE - Team #2451](https://pwnagerobotics.org)

<a href="https://PWNAGERobotics.github.io/ScoutingPASS">Live Demo</a> . <a href="https://PWNAGERobotics.github.io/ScoutingPASS/pit.html">Pit Scouting</a> . <a href="#getting-started">Getting Started</a> . <a href="#faq">FAQ</a>

![Stars](https://img.shields.io/github/stars/PWNAGERobotics/ScoutingPASS?style=plastic) ![Forks](https://img.shields.io/github/forks/PWNAGERobotics/ScoutingPASS?style=plastic) ![watchers](https://img.shields.io/github/watchers/PWNAGERobotics/ScoutingPASS?style=plastic)
<h1></h1>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#live-app">Live Application</a></li>
    <li><a href="#description">Description</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#pit-scouting">Pit Scouting</a></li>
    <li><a href="#how-we-scout">How We Scout</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#things-to-add">Things To Add Someday</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#2026-changes">2026 Changes</a></li>
    <li><a href="#2025-changes">2025 Changes</a></li>
    <li><a href="#2024-changes">2024 Changes</a></li>
    <li><a href="#2023-changes">2023 Changes</a></li>
  </ol>
</details>

<div id="features"></div>

# Features:
### **Configurable**
  * A JSON configuration file controls the elements of the game to track.  Create a new configuration file each year for the new game, or tweak it week to week to refine your scouting.  No additional coding is needed.  See the [Configuration Docs](docs/Configuration.md) for details.
### **Universal**
  * Works on any device that has a web browser that runs JavaScript.  Apple, Android, phones, tablets, laptops, it works on them all.
### **Low/No Bandwidth**
  * Neither WiFi nor Cellular is required at the event.  The web page can be downloaded before the event and doesn't need to be reloaded.
### **Easy hosting**
  * Self-hosting via GitHub. (See directions below)
### [The Blue Alliance Integration](https://thebluealliance.com)
  * Pull data for the event from The Blue Alliance.  Team #s, Team Names, and Schedules
### [Google Sheets Integration](docs/GoogleSheets.md)
  * Details on how to use ScoutingPASS with a Google Sheets spreadsheet

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="live-app"></div>

## Live Application
This repository is hosted on GitHub Pages.  You can view a live version of it here: https://PWNAGERobotics.github.io/ScoutingPASS.  (You can host your version of the ScoutingPASS application on GitHub Pages as well.)

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="description"></div>

## Description:
Scouting PASS is a web page displayed in a browser.  It consists of 5 "swipeable" pages, each representing a specific aspect of a FRC match: Pre-Match, Autonomous, Teleop, End Game, and Post-Match.  A configuration file allows the screens to be easily modified to collect any metrics that are important for your scouting needs.  The scouter can use the "Next" or "Prev" buttons or a swiping motion on touchscreens to move between pages.  A QR code is dynamically generated on the last page.  This QR code can be scanned to transfer the data to your data repository.  The QR code can also be stored for processing later using a screenshot or camera.  Once the data has been transferred, the scout hits the clear button, and the form is cleared out and ready for the next match.

Configuration is as easy as creating a JSON file with the fields that your scouting team wants to track.  Some fields are common to all teams and years.  The basic fields are:
* Scouter - who is scouting this robot
* Event - the event that is being scouted
* Level - The level of competition (Qualifications, Double Elimination, Finals, etc)
* Match - the match number that is being scouted
* Robot - Which robot is being scouted (Red-1, Blue-1, etc.)
* Team # - What team is being scouted

User-defined fields can be of several different types:
* Text - A freeform text field
* Number - Like text, but restricted to numbers
* Counter - A counter that can be increased or decreased with a click or touch
* Radio Buttons - A single choice between several options (Ball pick up: ()Ground ()Loading Bay ()Both ()None)
* Checkbox - A single on/off or yes/no check box (Exit Start Line?  []Yes if checked)
* Timer - A time counter to count the number of seconds it takes to do something (How long did it take to climb?)
* Cycle Timer - Start the timer and with 1 click track cycle times of robots.  
* Field Image - Using an image of the field, select positions on the field. (Use to record starting point or shooting locations)

These should cover most of your scouting team's data collection needs.  The REBUIT (2026) configuration file is included as an example.  The import of the configuration file is in index.html and would need to be updated to import a different configuration file. Only import one configuration file.

Since this is an HTML/JavaScript web page, scouters can use almost any device that has a web browser.  If the device has a touchscreen, the screen can be used to swipe back and forth between pages and interact with the data elements.  The webpage only needs to be loaded once.  Once loaded, the functionality and data is stored locally in the webpage and doesn't need to be reloaded.  The QR code generation and clear button only reset the form and do not cause the page to reload.  This means that a cellular or WiFi connection is not needed at the competition as long as the webpage is loaded before the event.

If your team has a The Blue Alliance API access token (See https://www.thebluealliance.com/apidocs), the web page will pull team and schedule information from The Blue Alliance.  Put your access token in the authKey variable in resources/js/TBAInterface.js and when the web page is loaded, it will load the data (for the event code in the Event field).  This enables some features on the PreMatch Screen.  With the team information, the team name will populate just below the Team # field when the team # field is filled in.  If the schedule information is available when the web page is loaded, then when the match and robot fields are populated, it will automatically populate the team number and team name for the scouter.  This reduces typo errors when entering the team numbers manually.  (Schedules are usually published before the event a day or two before matches start.  However, it may be delayed for various reasons and may only be published hours or minutes before the start of a competition.)

The QR code can be read by a web camera or hand scanner to import the data into the Excel scouting database.  The hand scanner used reads the QR code and inputs the data as if it were typed in from a keyboard.  Included in this repository is the Excel code to pop up an input window and parse the QR data into a row in Excel. (see the [Excel directory](Excel))

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="getting-started"></div>

## Getting Started:
It's really simple to get started:
* Fork GitHub project (as public if you want to host on GitHub Pages)
* Change configuration file (REBUILT example in [2026](2026) folder)
  * Change the data elements to capture (OPTIONAL: only if desired)
* Enable GitHub Pages in your repository settings ([GitHub Pages Instructions](https://pages.github.com/))
* Load page via GitHub pages (https://<your_username>.github.io/ScoutingPASS)
<p>
To enable The Blue Alliance API:

* Put your API token in the authKey variable in resources/js/TBAInterface.js.  (line 4)
* Reload your page.

Note: For this to work, the schedule has to be posted to The Blue Alliance.  That usually doesn't happen until just before the event. (a few days to a few hours)  To test this, you can point it to a past event.   Set the event to 2020ilch.   Reload the page to load the schedule for that event. Select Match 6 and Blue-2.  You should see it populate the Team # to 2451, and the next line will show the team name, PWNAGE.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="pit-scouting"></div>

## Pit Scouting:

ScoutingPASS now supports Pit Scouting

To access the pit scouting page, add '/pit.html' to the end of your URL.  (i.e., http://pwnagerobotics.github.io/ScoutingPASS/pit.html)

It works almost exactly like the main scouting pages, except there is only one page of input.   Once your scouters have filled out the information, swipe left to display the QR code.   That QR code can be scanned to push the data to Excel.

The default configuration file is 2026/rebuilt_pit_config.js.   You can modify that configuration to meet your needs.

We realize that you may not want to lug your computer around the pits to scan each QR code.  Our recommendation is to have your scouters take screenshots of the QR codes.   Then, when they are back to the scouting computer, just go through the photos to scan each QR code.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="how-we-scout"></div>

## How We Scout

We have 6 scouts per match.  One for each robot.  Each scout has this website pre-loaded on their phone or a team tablet.

The lead scout has a laptop with Excel and a wired handheld scanner in the stands with the scouts.  ([Nadomoo Bur3072 - ~$55](https://www.amazon.com/NADAMOO-Wireless-Barcode-Cordless-Computer/dp/B06Y2RMM51?th=1))

At the end of each match, the lead scout kicks off an Excel macro that pops up an input box. (See an example Excel spreadsheet in the Excel directory)  The scouts show their QR code to the lead scout, one by one, who scans the QR code.  The data from the QR code is parsed, and a row is added to the Scouting Data Table in Excel.   If the table doesn't exist, it will create it.

We use custom Excel screens and graphs to determine a strategy for each of our matches.

The night before Eliminations, we load the Excel data into Tableau, where we use the data mining/graphing capabilities to make a pick list.

The pick list can be modified up to Alliance Selection based on the data that is still being collected up to the last match.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="contributing"></div>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply [open an issue](https://github.com/PWNAGERobotics/ScoutingPASS/issues/new) if anything is missing or unclear in this
  documentation. to let us know what you'd like changed.

Don't forget to give the project a star!

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="faq"></div>

## Frequently Asked Questions:

<details><summary>Why hardcode and disable the event field?</summary>
<br />
<strike>The biggest reason is that it doesn't get changed during the event.  If it's changed and you're using the TBA features, they will not work correctly.  There is no reason to change it during the event, and easy to change for your next event.  One more way to reduce mistakes during the event.</strike>

In past years, the event has been protected and can only be changed with a GitHub commit.  As the popularity of ScoutingPASS grows, more teams want to use the default ScoutingPASS site.  We've unprotected the event field so that teams can use it for any event.
</details>

<details><summary>Why doesn't my configuration file load?</summary>
<br />
JSON is a stickler for commas and brackets.  If you see JSON errors, check your JSON for missing or extra commas or brackets when adding or removing elements
</details>

<details><summary>What does P.A.S.S. stand for?</summary>
<br />
PWNAGE Analytical Strategy System
</details>

<details><summary>How does the Field Image element work?</summary>
<br />
The Field Image element allows tracking of the location of a robot.  It does this by dividing the field into 72 different boxes, 12 boxes (across the longest side of the field) by 6 boxes (across the shortest side of the field).   A box represents a 4.5' x 4.5' square on the field.  Each box is numbered from 1 to 72 per the diagram below.
<br />
<br />
Field Location Key:

![Field Location Key](resources/images/field_location_key.png)

When a scouter clicks on the image, the coordinates of the click location are translated into a box, and that number is stored in an array.   The array is passed as the data for the field element.  

The scouter can click as many times as they want, and duplicate clicks (boxes) are recorded.  

This could be used (as in our demo) to collect shooting information and create heat maps for each robot.

Note: The Auto Start (as) element is special in that it will only track one location.  There can only be one starting location.  Therefore, if you click more than once, it will only record the last location.
</details>

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="things-to-add"></div>

## Things we might want to add someday:
* Add images to Pit Scouting
* More options for processing the QR code
* Mac version of the Excel spreadsheet
* Drag and Drop configuration editing (Avoid JSON editing)
* Better Google Sheets integration/instructions
* Improve look and feel
* Create videos to illustrate how to set up, configure, and use the application
* Better error messages
* Pre-parse JSON for validity to avoid cryptic errors when parsing
* Incorporate [Statbotics.io](http://statbotics.io/) data
* See [issues](https://github.com/PWNAGERobotics/ScoutingPASS/issues) for more

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="license"></div>

## License
Distributed under the GNU GPL v3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="2026-changes"></div>

## 2026 Season Updates

<details open>
  <summary>2026 Season Updates</summary>
  <ul>
    <li>New configurations added for match and pit scouting, as well as the new field image</li>
    <li>Add the ability to add additional buttons to counters to increase/decrease the counter by a specified amount. (i.e., +5 or +10)</li>
    <li>Heat Map Excel example created to demonstrate how to track shooting locations</li>
    <li>Script to generate test data.  It uses the configuration file to determine data points.</li>
  </ul>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="2025-changes"></div>

## 2025 Season Updates

<details>
  <summary>2025 Season Updates</summary>
  <ul>
    <li>New configurations added for match and pit scouting, as well as the new field image</li>
    <li>Clean up files structur,e which was getting cluttered with all the years in the top folder.  See old configuration files in the archive folder.</li>
    <li>Warning: Default dataFormat continues to be tab delimited (tsv)<br>This allows for easier Excel input.  No Excel macro needed.  Just put the cursor in Column A of a blank row and scan the QR code.  To switch back, change the dataFormat configuration item from tsv to ksv.</li>
  </ul>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="2024-changes"></div>

## 2024 Season Updates

<details>
  <summary>2024 Season Updates</summary>
  <ul>
    <li>New configurations added for match and pit scouting, as well as the new field image</li>
    <li>Warning: Default dataFormat has been switched from semicolon delimited (ksv) to tab delimited (tsv)<br>This allows for easier Excel input.  No macro needed.  Just put the cursor in Column A and scan the QR code.  To switch back, change the dataFormat configuration from tsv to ksv.</li>
  </ul>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="2023-changes"></div>

## 2023 Season Updates

<details>
  <summary>2023 Season Updates</summary>
  <ul>
    <li>Added [configuration documentation](docs/Configuration.md)</li>
    <li>New Timer component - Start/Stop and Clear Buttons</li>
    <li>New Cycle component - Keep track of cycle times</li>
    <li>Improved Clickable Field component - Now you can configure the number of boxes and tie it to a Cycle Timer</li>
    <li>[Excel VBA functions](Excel/VBA_FUNCTIONS_2023.bas) and [examples](Excel/2023_grid_and_cycle_time_example.xlsm) to parse and calculate the Grid field clickable image output</li>
    <li>[Excel VBA function](Excel/VBA_FUNCTIONS_2023.bas) and [examples](Excel/2023_grid_and_cycle_time_example.xlsm) to parse and calculate the average cycle time</li>
    <li>JSON simplification - The JSON structure has been simplified to make it a little easier to maintain.  The previous year's configuration files have been updated to use the new structure.</li>
    <li>Add "Flip Image" button to the Field Image component</li>
    <li>Add "tooltip" option for components - Tooltips will appear when hovering over the name of the component</li>
    <li>Bug Fix: Two field image elements on the same page will now render correctly</li>
    <li>Google Sheets integration (See the [Google Sheets](docs/GoogleSheets.md) page for more details)</li>
    <li>Configurable checkbox values in the configuration file.  Defaults to Y/N.  Can be set to T/F or 1/0.  See line 5 of 2022/RR_config.js for an example
      <ul>
        <li>"YN" - for Y/N output</li>
        <li>"TF" - for T/F output</li>
        <li>"10" - for 1/0 output</li>
      </ul>
    </li>
    <li>Bug fix: Google Sheets fix by using buttons instead of checkboxes for the buttons which caused a "submit" to Google Sheets (Thanks [jckwik](https://github.com/jckwik)!!)</li>
    <li>Don't allow the cycle timer to add a Zero time. (Thanks [jckwik](https://github.com/jckwik)!!)</li>
    <li>Added Display Data and Copy Data buttons on QR screen (Thanks [tails618](https://github.com/tails618)!!)</li>
    <li>Bug fixes to clickable images (Thanks [jacob6838](https://github.com/jacob6838)!!)</li>
    <li>Allow ability link Cycle Timer with Counter (Thanks DaBushinator!!)</li>
    <li>Add pit scouting functionality</li>
  </ul>
</details>
