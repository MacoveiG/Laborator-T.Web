onload = function () {
  setTimeout(function run() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let d = date.getDate();
    let mm = date.getMonth() + 1;
    let y = date.getFullYear();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    if (d < 10) d = "0" + d;
    if (mm < 10) mm = "0" + mm;

    let clock = h + ":" + m + ":" + s;
    let dat = d + "." + mm + "." + y;

    document.getElementById("clock").innerHTML = clock;
    document.getElementById("dat").innerHTML = dat;

    setTimeout(run, 1000);
  }, 0);
};

/* -------------------------------------------------- */

function fToggle() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

function fToggleS() {
  document.getElementById("dropdownMenuShort").classList.toggle("shows");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    let dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};

/* -------------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* -------------------------------------------------- */

function sub() {
  let pass1 = document.getElementById("password").value;
  let pass2 = document.getElementById("password2").value;

  if (pass1 != pass2) {
    document.getElementById("password2").style = "background-color: red";
  } else {
    document.getElementById("password2").style = "background-color: #3CBC8D";
  }
}

/* -------------------------------------------------- */

function clr() {
  let clr = document.getElementById("clr");
  if (clr.className.includes("clr")) {
    clr.className = "clr1";
  }
}

function clr1() {
  let clr = document.getElementById("clr");
  if (clr.className.includes("clr1")) {
    clr.className = "clr";
  }
}