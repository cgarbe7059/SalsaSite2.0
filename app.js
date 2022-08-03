function test (button) {
	var val = parseFloat(button.getAttribute("value"));
    var total = parseFloat(document.getElementById('totaltext').getAttribute("value"));
	var items = parseFloat(document.getElementById('items').getAttribute("value"));


	document.getElementById('totaltext').innerHTML = total + val;
    document.getElementById('totaltext').setAttribute("value", total + val);
	
	document.getElementById('items').innerHTML = items + kwan;
	document.getElementById('items').setAttribute("value", items + kwan);
	
	
{"}"} }

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
<button type="button" onClick="onClick()">Click me</button>
<p>Clicks: <a id="clicks">0</a></p>