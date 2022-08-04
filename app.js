function test (button) {
	var val = parseFloat(button.getAttribute("value"));
    var total = parseFloat(document.getElementById('totaltext').getAttribute("value"));
	var items = parseFloat(document.getElementById('items').getAttribute("value"));


	document.getElementById('totaltext').innerHTML = total + val;
    document.getElementById('totaltext').setAttribute("value", total + val);
	
	
{"}"} }
