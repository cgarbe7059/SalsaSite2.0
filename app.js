function test (button) {
	var val = parseFloat(button.getAttribute("value"));
	var kwan = parseFloat(document.getElementById('quantity').value);
    var total = parseFloat(document.getElementById('totaltext').getAttribute("value"));
	var items = parseFloat(document.getElementById('items').getAttribute("value"));
	
	if(button.getAttribute("name") === 'product')


	document.getElementById('totaltext').innerHTML = total + val * kwan;
    document.getElementById('totaltext').setAttribute("value", total + val * kwan);
	
	document.getElementById('items').innerHTML = items + kwan;
	document.getElementById('items').setAttribute("value", items + kwan);
	
	
{"}"} }


