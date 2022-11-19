
function showProject() {
	document.getElementById("project-overlay").style.display = "block";
	document.getElementById("project-overlay").scrollTop = "0";
	document.body.style.overflow = "hidden";
}

function hideProject() {
	document.body.style.overflow = "auto";
	document.getElementById("project-overlay").style.display = "none";
	document.getElementById("projects-wrapper").style.overflow = "hidden";
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};

window.onscroll = function() {
	myFunction()
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		document.getElementById("mobile-menu").style.top = "80px";
	} else {
		navbar.classList.remove("sticky");
		document.getElementById("mobile-menu").style.top = "120px";
	}
}
