/*function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    let mobileNav = document.getElementById("mobile-nav");
    let hambIconBar1 = document.getElementById("bar1");
    let hambIconBar2 = document.getElementById("bar2");
    let hambIconBar3 = document.getElementById("bar3");
    if (mobileNav.style.visibility === "hidden") {
    	mobileNav.style.visibility = "visible";
    	mobileNav.style.opacity = 1;
    	if (this.scrollY < 51) {
    		document.getElementById("header-title").style.display = "block";
    	}
        hambIconBar1.style.backgroundColor = "#000000";
        hambIconBar2.style.backgroundColor = "#000000";
        hambIconBar3.style.backgroundColor = "#000000";
    } else {
    	mobileNav.style.visibility = "hidden";
    	mobileNav.style.opacity = 0;
    	if (this.scrollY < 51) {
    		document.getElementById("header-title").style.display = "none";
    	}
        hambIconBar1.style.backgroundColor = "#000000";
        hambIconBar2.style.backgroundColor = "#000000";
        hambIconBar3.style.backgroundColor = "#000000";
    }
}*/

function collapseInfo(collapsible) {
    collapsible.classList.toggle("active");
    let coll = document.getElementById("service-expand-content");
    if (coll.style.maxHeight) {
        coll.style.maxHeight = null;
    } else {
        coll.style.maxHeight = coll.scrollHeight + "px";    
    }
}
function collapseInfo2(collapsible) {
    collapsible.classList.toggle("active");
    let coll = document.getElementById("service-expand-content2");
    if (coll.style.maxHeight) {
        coll.style.maxHeight = null;
    } else {
        coll.style.maxHeight = coll.scrollHeight + "px";    
    }
}
function collapseInfo3(collapsible) {
    collapsible.classList.toggle("active");
    let coll = document.getElementById("old-presentations");
    if (coll.style.maxHeight) {
        coll.style.maxHeight = null;
    } else {
        coll.style.maxHeight = coll.scrollHeight + "px";    
    }
}
function collapseInfo4(collapsible) {
    collapsible.classList.toggle("active");
    let coll = document.getElementById("service-expand-content4");
    if (coll.style.maxHeight) {
        coll.style.maxHeight = null;
    } else {
        coll.style.maxHeight = coll.scrollHeight + "px";    
    }
}

function scrollActions() {
	var headerEle = document.getElementById("header");
	this.scrollY > 50 ? headerEle.style.background = "#FFFFFF" : headerEle.style.background = "";
	this.scrollY > 50 ? headerEle.style.borderRadius = "2px" : headerEle.style.borderRadius = "";
	this.scrollY > 50 ? headerEle.style.boxShadow = "0 1px 10px black" : headerEle.style.boxShadow = "";
	if (document.getElementById("mobile-nav").style.visibility === 'hidden') {
		this.scrollY > 50 ? document.getElementById("header-title").style.display = "block" : document.getElementById("header-title").style.display = "none"; 
	}
    let deskNav = document.getElementById("desktop-nav");
    if (window.getComputedStyle(deskNav, null).display === "block") {
		document.getElementById("header-title").innerText = "";
    }
    //let hambIconBar1 = document.getElementById("bar1");
    //let hambIconBar2 = document.getElementById("bar2");
    //let hambIconBar3 = document.getElementById("bar3");
    //this.scrollY > 50 ? hambIconBar1.style.backgroundColor = "#0E6837" : hambIconBar1.style.backgroundColor ="";
    //this.scrollY > 50 ? hambIconBar2.style.backgroundColor = "#0E6837" : hambIconBar2.style.backgroundColor ="";
    //this.scrollY > 50 ? hambIconBar3.style.backgroundColor = "#0E6837" : hambIconBar3.style.backgroundColor ="";
}

window.addEventListener("scroll", scrollActions, false);