function insertURL(){
	var title = document.getElementById('title');
	var link = document.getElementById('link');
	
}

function GetXmlHttpObject() {
	var xmlhttp=null;
	try {
		// Firefox, Opera 8.0+, Safari
		xmlhttp=new XMLHttpRequest();
	}
	catch (e) {
		// Internet Explorer
		try {
			xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlhttp;
}