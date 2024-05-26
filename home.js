window.onscroll = function() {myFunction()};

function myFunction() {
  var header = document.getElementById("menu");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function removeDiv() {
  const div = document.getElementById("InnerBanner");
  div.style.transition='opacity 1s';
  setInterval(() => div.style.opacity=0, 100);
  setInterval(() => div.remove(), 1000);
}