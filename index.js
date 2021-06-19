
let figures = document.getElementsByTagName("figure");

for (let n = 0; n < 4; n++) {
	let childNodes = figures[n].childNodes;

	figures[n].onmouseenter = () => {
		
		childNodes[1].style.opacity = 0;
		childNodes[3].style.opacity = 0;
		childNodes[5].style.opacity = 1;
	}

	figures[n].onmouseleave = () => {

		childNodes[1].style.opacity = 1;
		childNodes[3].style.opacity = 1;
		childNodes[5].style.opacity = 0;
	}
}