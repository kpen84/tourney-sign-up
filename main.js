// Read More Button //

function moreText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}


//Sidebar Nav

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-1000px";
}

//Twitch

function twitch() {
  window.open("https://www.twitch.tv/froddoyo/")
}

//Twitter

function twitter() {
  window.open("https://twitter.com/froddoyo/")
}