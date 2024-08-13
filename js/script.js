
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

function toggleLanguage() {
    var checkBox = document.getElementById("check");
    let texten = document.getElementsByClassName("textEN");
    let textde = document.getElementsByClassName("textDE");
    if (checkBox.checked == true) {
        for (let i = 0; i < texten.length; i++) {
            texten[i].style.display = "block";
            textde[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < texten.length; i++) {
            texten[i].style.display = "none";
            textde[i].style.display = "block";
        }
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
}

window.addEventListener("scroll", scrollActions, false);