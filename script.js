let dotArray = [
	document.getElementById("dot1"),
	document.getElementById("dot2"),
	document.getElementById("dot3"),
	document.getElementById("dot4"),
	document.getElementById("dot5"),
	document.getElementById("dot6"),
	document.getElementById("dot7"),
];

let index = 1;

function swapForw() {
	if (index == dotArray.length) return;
	else if (index == 0) {
		index++;
		dotArray[index + 1].style.backgroundColor = "purple";
	} else {
		dotArray[index].style.backgroundColor = "purple";
		dotArray[index - 1].style.backgroundColor = "white";
		index++;
	}
}

function swapBack() {
	if (index == 0) return;
	else if (index == 1) {
		dotArray[index - 1].style.backgroundColor = "purple";
		dotArray[index].style.backgroundColor = "white";
	} else {
		index--;
		dotArray[index - 1].style.backgroundColor = "purple";
		dotArray[index].style.backgroundColor = "white";
	}
}
