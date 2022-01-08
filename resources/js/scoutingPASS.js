document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchend", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var xThreshold = 0.3;
var slide = 0;

// Options
var options = {
	text: "t=9998;m=99;l=q;r=b1;s=rjs;d=0;to=0;ds=5;if=0;f=15;cf=0;in=1;alp=5;aop=5;aip=5;apu=5;atr=1;atro=0;lp=20;op=10;ip=10;rc=0;pc=0;ss=[(111,111),(111,111),(111,111),(111,111),(111,111),(111,111),(111,111)];c=1;hbc=0;ac=1;hc=0;cb=0;cs=3;nh=0;p=0;b=0;tr=1;ct=3;dr=3;comm='good shooter; shot from all over the field'",
	correctLevel: QRCode.CorrectLevel.L,
    quietZone: 15,
    quietZoneColor: '#FFFFFF'
};

// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r2,b1..), s=scouter
//var requiredFields = ["e", "m", "l", "t", "r", "s", "as"];
var requiredFields = ["e", "m", "l", "r", "s", "as"];

function addCounter(table, idx, name, data){
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name+'&nbsp;';
  cell2.classList.add("field");

  var button1 = document.createElement("button");
  button1.setAttribute("type", "checkbox");
  button1.setAttribute("onclick", "counter(this.parentElement, -1)");
  button1.innerHTML += "-"
  cell2.appendChild(button1);

  var inp = document.createElement("input");
  inp.classList.add("counter");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "text");
  inp.setAttribute("name", data.code);
  inp.setAttribute("style", "background-color: black; color: white;border: none; text-align: center;");
  inp.setAttribute("disabled", "");
  inp.setAttribute("value", 0);
  inp.setAttribute("size", 2);
  inp.setAttribute("maxLength", 2);
  cell2.appendChild(inp);

  var button2 = document.createElement("button");
  button2.setAttribute("type", "checkbox");
  button2.setAttribute("onclick", "counter(this.parentElement, 1)");
  button2.innerHTML += "+"
  cell2.appendChild(button2);
  return idx+1;
}

function addFieldImage(table, idx, name, data) {
  var row = table.insertRow(idx);
  idx += 1
  var cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  cell.innerHTML = name;

  row = table.insertRow(idx);
  idx += 1;
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var canvas = document.createElement('canvas');
  //canvas.onclick = onFieldClick;
  canvas.setAttribute("onclick", "onFieldClick(event)");
  canvas.setAttribute("class", "field-image-src");
  canvas.setAttribute("id", "canvas_"+data.code);
  canvas.innerHTML = "No canvas support";
  cell.appendChild(canvas);

  row = table.insertRow(idx);
  idx += 1
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var inp = document.createElement('input');
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "XY_"+data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);
  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);

  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  idx += 1
  //row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var img = document.createElement('img');
  img.src = data.filename;
  img.setAttribute("id", "img_"+data.code);
  img.setAttribute("class", "field-image-src");
	img.setAttribute("onload", "drawFields()");
  //img.setAttribute("onclick", "onFieldClick(event)");
  img.setAttribute("hidden", "");
  cell.appendChild(img);
}

function addText(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "text");
  inp.setAttribute("name", data.code);
  if (data.hasOwnProperty('size')) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty('maxSize')) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty('defaultValue')) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  cell2.appendChild(inp);
  return idx+1
}

function addNumber(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "number");
  inp.setAttribute("name", data.code);
	if ((data.type == 'team') ||
	 	  (data.type == 'match'))
	{
		inp.setAttribute("onchange", "updateMatchStart(event)");
	}
  if (data.hasOwnProperty('min')) {
    inp.setAttribute("min", data.min);
  }
  if (data.hasOwnProperty('max')) {
    inp.setAttribute("max", data.max);
  }
  if (data.hasOwnProperty('defaultValue')) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  cell2.appendChild(inp);
  if (data.type == 'team') {
    row = table.insertRow(idx+1);
    cell1 = row.insertCell(0);
    cell1.setAttribute("id", "teamname-label");
    cell1.setAttribute("colspan", 2);
    cell1.setAttribute("style", "text-align: center;");
    return idx+2;
  }
  return idx+1;
}

function addRadio(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name+'&nbsp;';
  cell2.classList.add("field");
	if ((data.type == 'level') ||
			(data.type == 'robot')
		)
	{
		cell2.setAttribute("onchange", "updateMatchStart(event)");
	}
  var checked = null
  if (data.hasOwnProperty('defaultValue')) {
    checked = data.defaultValue;
  }
  if (data.hasOwnProperty('choices')) {
    keys = Object.keys(data.choices);
    keys.forEach(c => {
      var inp = document.createElement("input");
      inp.setAttribute("id", "input_"+data.code+"_"+c);
      inp.setAttribute("type", "radio");
      inp.setAttribute("name", data.code);
			inp.setAttribute("value", c);
      if (checked == c) {
        inp.setAttribute("checked", "");
      }
      cell2.appendChild(inp);
      cell2.innerHTML += data.choices[c];
    });
  }
  var inp = document.createElement("input");
  inp.setAttribute("id", "display_"+data.code);
  inp.setAttribute("hidden", "");
  inp.setAttribute("value", "");
  cell2.appendChild(inp);

  return idx+1;
}

function addCheckbox(table, idx, name, data){
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "checkbox");
  inp.setAttribute("name", data.code);
  cell2.appendChild(inp);

  if (data.type == 'bool') {
    cell2.innerHTML += "(checked = Yes)";
  }

  return idx+1;
}

function addElement(table, idx, name, data){
  var type = null;
  if (data.hasOwnProperty('type')){
    type = data.type
  } else {
    console.log("No type specified");
    err = (("defaultValue", "No type specified"));
    idx = addText(table, idx, name, err);
    return
  }
  if (type == 'counter') {
    idx = addCounter(table, idx, name, data);
  } else if ((data.type == 'scouter') ||
             (data.type == 'event') ||
             (data.type == 'text')
           )
  {
    idx = addText(table, idx, name, data);
  } else if ((data.type == 'level') ||
             (data.type == 'radio') ||
             (data.type == 'robot')
           )
  {
    idx = addRadio(table, idx, name, data);
  } else if ((data.type == 'match') ||
             (data.type == 'team') ||
             (data.type == 'number')
           )
  {
    idx = addNumber(table, idx, name, data);
  } else if (data.type == 'field_image')
  {
    idx = addFieldImage(table, idx, name, data);
  } else if ((data.type == 'bool') ||
             (data.type == 'checkbox') ||
             (data.type == 'pass_fail')
           )
  {
    idx = addCheckbox(table, idx, name, data);
  } else if (data.type == 'counter')
  {
    idx = addCounter(table, idx, name, data);
  } else
  {
    console.log(`Unrecognized type: ${data.type}`);
  }
  return idx
}

function configure(){
  var mydata = JSON.parse(config_data);

  if (mydata.hasOwnProperty('title')) {
    document.title = mydata.title;
  }

  if (mydata.hasOwnProperty('page_title')) {
    var elements = document.getElementsByClassName("page_title");
    for(var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = mydata.page_title;
    }
  }

  // Configure prematch screen
  var pmc = mydata.elements.prematch;
  var pmt = document.getElementById("prematch_table");
  var idx = 0;
  Object.entries(pmc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(pmt, idx, key, value);
  });

  // Configure auton screen
  var ac = mydata.elements.auton;
  var at = document.getElementById("auton_table");
  idx = 0;
  Object.entries(ac).forEach((el) => {
    const [key, value] = el;
    idx = addElement(at, idx, key, value);
  });

  // Configure teleop screen
  var tc = mydata.elements.teleop;
  var tt = document.getElementById("teleop_table");
  idx = 0;
  Object.entries(tc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(tt, idx, key, value);
  });

  // Configure endgame screen
  var egc = mydata.elements.endgame;
  var egt = document.getElementById("endgame_table");
  idx = 0;
  Object.entries(egc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(egt, idx, key, value);
  });

  // Configure postmatch screen
  pmc = mydata.elements.postmatch;
  pmt = document.getElementById("postmatch_table");
  var idx = 0;
  Object.entries(pmc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(pmt, idx, key, value);
  });
}

function getRobot(){
	if (document.getElementById("input_r_r1").checked){
		return "r1";
	} else if(document.getElementById("input_r_r2").checked){
		return "r2";
	} else if(document.getElementById("input_r_r3").checked){
		return "r3";
	} else if(document.getElementById("input_r_b1").checked){
		return "b1";
	} else if(document.getElementById("input_r_b2").checked){
		return "b2";
	} else if(document.getElementById("input_r_b3").checked){
		return "b3";
	}	else {
		return "";
	}
}

function validateRobot() {
	if (document.getElementById("input_r_r1").checked ||
		document.getElementById("input_r_r2").checked ||
		document.getElementById("input_r_r3").checked ||
		document.getElementById("input_r_b1").checked ||
		document.getElementById("input_r_b2").checked ||
		document.getElementById("input_r_b3").checked
	) {
		return true
	} else {

		return false
	}
}

function resetRobot() {
	if (document.getElementById("input_r_r1").checked) {
		document.getElementById("input_r_r1").checked = false
	}
	if (document.getElementById("input_r_r2").checked) {
		document.getElementById("input_r_r2").checked = false
	}
	if (document.getElementById("input_r_r3").checked) {
		document.getElementById("input_r_r3").checked = false
	}
	if (document.getElementById("input_r_b1").checked) {
		document.getElementById("input_r_b1").checked = false
	}
	if (document.getElementById("input_r_b2").checked) {
		document.getElementById("input_r_b2").checked = false
	}
	if (document.getElementById("input_r_b3").checked) {
		document.getElementById("input_r_b3").checked = false
	}
}


function getLevel(){
	if(document.getElementById("input_l_qm").checked){
		return "qm";
	} else if(document.getElementById("input_l_ef").checked){
		return "ef";
	} else if(document.getElementById("input_l_qf").checked){
		return "qf";
	} else if(document.getElementById("input_l_sf").checked){
		return "sf";
	} else if(document.getElementById("input_l_f").checked){
		return "f";
	} else {
		return "";
	}
}

function validateLevel() {
	if (document.getElementById("input_l_qm").checked ||
		document.getElementById("input_l_ef").checked ||
		document.getElementById("input_l_qf").checked ||
		document.getElementById("input_l_sf").checked ||
		document.getElementById("input_l_f").checked
	) {
		return true
	} else {
		return false
	}
}

function validateData() {
	var ret = true
	var errStr = "Bad fields: ";
	for (rf of requiredFields) {
		// Robot requires special (radio) validation
		if (rf == "r") {
			if (!validateRobot()) {
				errStr += rf + " "
				ret = false
			}
		} else if (rf == "l") {
			if (!validateLevel()) {
				errStr += rf + " "
				ret = false
			}
		// Normal validation (length <> 0)
		} else if (document.getElementById("input_"+rf).value.length == 0) {
			errStr += rf + " "
			ret = false
		}
	}
	if (ret == false) {
		alert("Enter all required values\n"+errStr);
	}
	return ret
}

function getData() {
	var str = ''
	var rep = ''
	var start = true
	inputs = document.querySelectorAll("[id*='input_']");
	for (e of inputs) {
		code = e.id.substring(6)
		radio = code.indexOf("_")
		if (radio > -1) {
			if (e.checked) {
				if (start==false) {
					str=str+';'
				} else {
					start=false
				}
				// str=str+code.substr(0,radio)+'='+code.substr(radio+1)
				// document.getElementById("display_"+code.substr(0, radio)).value = code.substr(radio+1)
				str=str+code.substr(0,radio)+'='+e.value
				document.getElementById("display_"+code.substr(0, radio)).value = e.value
			}
		} else {
			if (start==false) {
				str=str+';'
			} else {
				start=false
			}
			if (e.value == "on") {
				if (e.checked) {
					str=str+code+'=Y'
				} else {
					str=str+code+'=N'
				}
			} else {
				str=str+code+'='+e.value.replace(";", "-")
			}
		}
	}
	return str
}

function updateQRHeader() {
	var str = 'Event: !EVENT! Match: !MATCH! Robot: !ROBOT! Team: !TEAM!';

	str = str
		.replace('!EVENT!', document.getElementById("input_e").value)
		.replace('!MATCH!', document.getElementById("input_m").value)
		.replace('!ROBOT!', document.getElementById("display_r").value)
		.replace('!TEAM!', document.getElementById("input_t").value);

	document.getElementById("display_qr-info").textContent = str;
}


function qr_regenerate() {
	// Validate required pre-match date (event, match, level, robot, scouter)
	if (validateData() == false) {
		// Don't allow a swipe until all required data is filled in
		return false
	}

	// Get data
	data = getData()

  // Regenerate QR Code
	qr.makeCode(data)

	updateQRHeader()
	return true
}

function qr_clear() {
    qr.clear()
}

function clearForm() {
	var match = 0;
	var e = 0;

	swipePage(-5)

	// Increment match
	match = parseInt(document.getElementById("input_m").value)
	if (match == NaN) {
		document.getElementById("input_m").value = ""
	} else {
		document.getElementById("input_m").value = match+1
	}

	// Robot
	resetRobot()

	// Clear XY coordinates
	inputs = document.querySelectorAll("[id*='XY_']");
	for (e of inputs) {
		code = e.id.substring(3)
		e.value = ""
	}

	inputs = document.querySelectorAll("[id*='input_']");
	for (e of inputs) {
		code = e.id.substring(6)

		// Don't clear key fields
		if (code == "m") continue
		if (code.substring(0,2) == "r_") continue
		if (code.substring(0,2) == "l_") continue
		if (code == "e") continue
		if (code == "s") continue


		radio = code.indexOf("_")
		if (radio > -1) {
			if (e.checked) {
				e.checked = false
				document.getElementById("display_"+code.substr(0, radio)).value = ""
			}
		} else {
			if (e.type=="number" || e.type=="text" || e.type=="hidden") {
				if (e.className == "counter") {
					e.value = 0
				} else {
					e.value = ""
				}
			} else if (e.type == "checkbox") {
				if (e.checked == true) {
					e.checked = false
				}
			} else {
				console.log("unsupported input type")
			}
		}
	}
	drawFields()
}

function startTouch(e) {
	initialX = e.touches[0].screenX;
};

function moveTouch(e) {
	if (initialX === null) {
  	return;
	}

	var currentX = e.changedTouches[0].screenX;
	var diffX = initialX - currentX;

  // sliding horizontally
	if (diffX/screen.width > xThreshold) {
		// swiped left
		swipePage(1);
	} else if(diffX/screen.width < -xThreshold) {
		// swiped right
  	swipePage(-1);
	}
	initialX = null;
};

function swipePage(incriment){
	if (qr_regenerate() == true) {
		slides = document.getElementById("main-panel-holder").children
		if(slide + incriment < slides.length && slide + incriment >= 0){
			slides[slide].style.display = "none";
			slide += incriment;
			window.scrollTo(0,0);
			slides[slide].style.display = "table";
		}
	}
}

function drawFields(name) {
	var fields = document.querySelectorAll("[id*='canvas_']");

	for (f of fields) {
		code = f.id.substring(7);
		var img = document.getElementById("img_"+code);
		var ctx = f.getContext("2d");
		ctx.clearRect(0,0,f.width,f.height);
		ctx.drawImage(img, 0, 0, f.width, f.height);

		var xyStr = document.getElementById("XY_"+code).value
		if (JSON.stringify(xyStr).length > 2) {
			pts = Array.from(JSON.parse(xyStr))
			for (p of pts) {
				var coord = p.split(",")
				var centerX = coord[0];
				var centerY = coord[1];
				var radius = 5;
				ctx.beginPath();
				ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
				ctx.lineWidth = 1;
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}
	}
}

function onFieldClick(event){
	//Resolution height and width (e.g. 52x26)
	var resL = 12;
	var resH = 6;

	let target = event.target;

	//Turns coordinates into a numeric box
	let box = ((Math.ceil(event.offsetY / target.height * resH )-1) * resL) + Math.ceil(event.offsetX / target.width * resL)
	let coords = event.offsetX + "," + event.offsetY;

	//Cumulating values
	changingXY = document.getElementById("XY" + getIdBase(target.id));
	changingInput = document.getElementById("input" + getIdBase(target.id));

	// TODO: 2nd half of this if statement is a hack for auto start - don't allow more than one starting position
	if((JSON.stringify(changingXY.value).length > 2) && changingXY.id !== "XY_as"){
		var tempValue = Array.from(JSON.parse(changingXY.value));
		tempValue.push(coords);
		changingXY.value = JSON.stringify(tempValue);

		tempValue = Array.from(JSON.parse(changingInput.value));
		tempValue.push(box);
		changingInput.value = JSON.stringify(tempValue);
	} else{
		changingXY.value = JSON.stringify([coords]);
		changingInput.value = JSON.stringify([box]);
	}

	drawFields()
}

function getIdBase(name){
	return name.slice(name.indexOf("_"), name.length)
}

function getTeamName(teamNumber){
	if(teamNumber !== undefined){
		if (teams) {
			var teamKey = "frc" + teamNumber;
			var ret = "";
			Array.from(teams).forEach(team => ret = team.key == teamKey ? team.nickname : ret);
			return ret;
		}
	}
	return "";
}

function getMatch(matchKey){
	//This needs to be different than getTeamName() because of how JS stores their data
	if(matchKey !== undefined){
		if (schedule) {
			var ret = "";
			Array.from(schedule).forEach(match => ret = match.key == matchKey ? match.alliances : ret);
			return ret;
		}
	}
	return "";
}

function getCurrentTeamNumberFromRobot(){
	if(getRobot() != "" && typeof getRobot() !== 'undefined' && getCurrentMatch() != ""){
		if(getRobot().charAt(0) == "r"){
			return getCurrentMatch().red.team_keys[parseInt(getRobot().charAt(1))-1]
		} else if(getRobot().charAt(0) == "b"){
			return getCurrentMatch().blue.team_keys[parseInt(getRobot().charAt(1))-1]
		}
	}
}

function getCurrentMatchKey(){
	return document.getElementById("input_e").value + "_" + getLevel() + document.getElementById("input_m").value;
}

function getCurrentMatch(){
	return getMatch(getCurrentMatchKey());
}

function updateMatchStart(event){
	if((getCurrentMatch() == "") ||
		 (!teams)) {
		return;
	}
	if(event.target.name == "r"){
		document.getElementById("input_t").value = getCurrentTeamNumberFromRobot().replace("frc", "");
		onTeamnameChange();
	}
	if(event.target.name == "m"){
		if(getRobot() != "" && typeof getRobot()){
			document.getElementById("input_t").value = getCurrentTeamNumberFromRobot().replace("frc", "");
			onTeamnameChange();
		}
	}
}

function onTeamnameChange(event){
	var newNumber = document.getElementById("input_t").value;
	var teamLabel = document.getElementById("teamname-label");
	if(newNumber != ""){
		teamLabel.innerText = getTeamName(newNumber) != "" ? "You are scouting " + getTeamName(newNumber) : "That team isn't playing this match, please double check to verify correct number";
	} else{
		teamLabel.innerText = "";
	}
}

/**
 * adds to the number in innerHTML of the value tag.
 *
 * @param {element} element the <div> tag element (parent to the value tag).
 * @param {number} step the amount to add to the value tag.
 */
function counter(element, step)
{
		var ctr = element.getElementsByClassName("counter")[0];
		var result = parseInt(ctr.value) + step;

		if(isNaN(result)) {
				result = 0;
		}

		if(result >= 0 || ctr.hasAttribute('data-negative')) {
				ctr.value = result;
		} else {
				ctr.value = 0;
		}
}

window.onload = function(){
	configure();
	var ec = document.getElementById("input_e").value;
	getTeams(ec);
	getSchedule(ec);
	this.drawFields();
};
