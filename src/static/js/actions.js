
function runScript(e) {
    if (e.keyCode == 13) {
      answer.setValue(document.getElementById("keyInput").value)
		  external.invoke('close')
    }
}

function onInputChange(input) {
    nodes.search(input.value);
	document.getElementById("nodes").innerHTML = nodes.data.value;
}

function onLoad() {
    document.getElementById("test").innerHTML = "init";
}

window.onload = onLoad
