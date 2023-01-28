# Excel Example Directory

## Files

### [2023_grid_and_cycle_time.xlsm](2023_grid_and_cycle_time.xlsm)

This Excel spreadsheet contains everything you need to track Grid (with Clickable Images) and Cycle Times in Excel.  The data comes into the data
cells as arrays of values.   The VBA functions allow the data to be parsed and used how you see fit.  There are examples of how to calculate an average
cycle time from the Cycle Time array.   Also, for the Grid fields in the 2023 example, there are functions to parse the data to calculate these values:
* Total game pieces scored
* Number of high game pieces scored
* Number of medium game pieces scored
* Number of low/hybrid game pieces scored
* Number of Cubes scored
* Number of Cones scored
See the VBA_FUNCTIONS_2023.bas file description for more detail on these functions

### [QRReader.bas](QRReader.bas)

This file contains functions to scan, parse and save the data into the Excel cells.
* getInput() - pops up a input field to scan the data into
* saveData() - parse the string passed in, map the codes and save the data into an Excel row
* process1QRCodeInput() - Calls getInput() and passes the data to saveData()
* process6QRCodeInput() - same as process1QRCodeInput() but calls it 6 times; good for the end of a match to scan for 6 robots

Update the mapping to map each year's specific code->column mapping

### [Scouting Heatmap Example.xlsm](Scouting%20Heatmap%20Example.xlsm)

If you want to see how to create a heat map from a clickable image clicks this file shows an example.  It has been used in the past to show shooting
locations.  There are VBA functions parse and update the cells to show the heat map.

### [ScoutingPASS_Excel_Example.xlsm](ScoutingPASS_Excel_Example.xlsm)

This spreadsheet shows how to implement the functions described in QRReader.bas.  

### [VBA_FUNCTIONS_2023.bas](VBA_FUNCTIONS_2023.bas)

In 2023 the game included a "Grid" where robots would score cones or cubes.  2023 was also the year that a Cycle Timer was introduced.  Both features
need VBA functions to parse the output.  This file includes functions to parse those fields.  The functions include:
* getAvgCycleTime(cell) - calculates the average cycle time from the times listed in cell
* countGrid(cell, typeOfCount) - Parses the grid clickable image output.  Pass in the cell where the output is located and a number representing the type
of count you want returned.  Type of counts are:
  * 1 - Total game pieces scored
  * 2 - Number of high game pieces scored
  * 3 - Number of medium game pieces scored
  * 4 - Number of low/hybrid game pieces scored
  * 5 - Number of Cones scored
  * 6 - Number of Cubes scored
* getTotalCount(cell) - calls countGrid with the cell and type of count = 1
* getHighCount(cell) - calls countGrid with the cell and type of count = 2
* getMedCount(cell) - calls countGrid with the cell and type of count = 3
* getLowCount(cell) - calls countGrid with the cell and type of count = 4
* getConeCount(cell) - calls countGrid with the cell and type of count = 5
* getCubeCount(cell) - calls countGrid with the cell and type of count = 6
