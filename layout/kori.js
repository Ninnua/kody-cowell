window.onscroll = function() {onscroll_function()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
mybutton = document.getElementById("back-to-top")
function onscroll_function() {
  navFunction();
  scrollFunction();
  topFunction();
}

function navFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display  = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

