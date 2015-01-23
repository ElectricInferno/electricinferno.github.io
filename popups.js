function getOS() {
var OSName="unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
return OSName;
}

function getW() {
  if (self.innerHeight) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function getH() {
  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
}

function getAnalytics() {
	var OS = getOS();
	var DW = getW();
	var DH = getH();
	document.getElementById("displayOS").innerHTML = OS;
	document.getElementById("displayWidth").innerHTML = DW;
	document.getElementById("displayHeight").innerHTML = DH;
}
function checkDownload() {
	var OS = getOS()
	if (getOS() == "MacOS") {
	    document.getElementById("canDownload").style.display = "block"
	    document.getElementById("cantDownload").style.display = "none"
	} else { 
		document.getElementById("cantDownload").style.display = "block"
		document.getElementById("canDownload").style.display = "none"
	}
}