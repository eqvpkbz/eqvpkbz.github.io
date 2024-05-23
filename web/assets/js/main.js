var images = document.querySelectorAll(".slideshow img");
var dots = document.querySelectorAll(".slideshow li");
var index = 0;

function nextImage() {
	images[index].classList.remove("show");
	dots[index].classList.remove("active");
	index = (index + 1) % images.length;
	images[index].classList.add("show");
	dots[index].classList.add("active");
}
setInterval(nextImage, 3000);

function prevImage() {
	images[index].classList.remove("show");
	dots[index].classList.remove("active");
	index = (index - 1 + images.length) % images.length;
	images[index].classList.add("show");
	dots[index].classList.add("active");
}

function showImage(i) {
	if (i == index) {
		return;
	}
	images[index].classList.remove("show");
	dots[index].classList.remove("active");
	index = i;
	images[index].classList.add("show");
	dots[index].classList.add("active");
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
