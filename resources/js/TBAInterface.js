// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKey = "xtOQEWDgsY9zwCx8cSxWRvaX8SzsnX8R4i96a4AG1jqLriXP9I787FYZalHiBlhM";
/**
 * Get list of teams in event
 *
 * @param {eventCode} 2020ilch the event code (i.e. 2020caln) to pull the team list
 */
function getTeams(2020ilch) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + 2020ilch + "/teams/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				teams = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}

/**
 * Get schefule for event
 *
 * @param {eventcode} 2023ISDE1 the event code (i.e. 2020caln) to pull the team list
 */
function getSchedule(2020ilch) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + 2020ilch + "/matches/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				schedule = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
