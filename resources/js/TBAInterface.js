/* global XMLHttpRequest */

// TBAInterface funcitons to pull data from TheBlueAlliance.com
let teams = null
let schedule = null
const authKey = 'o4t8WH429rKaWF12yuWi1NZSklQz5AB8Z4RJdBqsVYtACswH1AEjjukPalskTQ9E'

/**
 * Get list of teams in event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getTeams (eventCode) { // eslint-disable-line
  if (authKey) {
    const xmlhttp = new XMLHttpRequest()
    const url = 'https://www.thebluealliance.com/api/v3/event/' + eventCode + '/teams/simple'
    xmlhttp.open('GET', url, true)
    xmlhttp.setRequestHeader('X-TBA-Auth-Key', authKey)
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = this.responseText
        teams = JSON.parse(response) // eslint-disable-line
      }
    }
    // Send request
    xmlhttp.send()
  }
}

/**
 * Get schefule for event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getSchedule (eventCode) { // eslint-disable-line
  if (authKey) {
    const xmlhttp = new XMLHttpRequest()
    const url = 'https://www.thebluealliance.com/api/v3/event/' + eventCode + '/matches/simple'
    xmlhttp.open('GET', url, true)
    xmlhttp.setRequestHeader('X-TBA-Auth-Key', authKey)
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = this.responseText
        schedule = JSON.parse(response) // eslint-disable-line
      }
    }
    // Send request
    xmlhttp.send()
  }
}
