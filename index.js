
// 1
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



// 2
let menuButton = document.getElementsByClassName("menu-button")[0];
let closeButton = document.getElementsByClassName("close-button")[0];
let navForPhones = document.getElementsByClassName("nav-for-phones")[0];
let navContent = document.getElementsByClassName("content")[0];



function closeNav() {
	navForPhones.animate([{top: "-999px"}],
	
	{	
		duration: 700,
		fill: "forwards"
	})

	setTimeout(() => {
		navForPhones.style.display = "none";
		navContent.style.borderBottom = "none";
	}, 700)
}

menuButton.onclick = () => {
	navForPhones.style.display = "flex";

	navForPhones.animate([{top: "0px"}],
	{	
		duration: 700,
		fill: "forwards"
	})


	navContent.style.borderBottom = "1px solid #848484";
}

closeButton.onclick = () => {
	closeNav();
}

window.onscroll = () => {
	if (navForPhones.getBoundingClientRect().y < -130) {
		closeNav();
	};
}