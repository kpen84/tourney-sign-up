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

window.addEventListener("load", function() {
  const form = document.getElementById('myform');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      location.href = 'congrats.html';
    })
  });
});

var viewMode = getCookie("view-mode");

if(viewMode == "desktop"){

    viewport.setAttribute('content', 'width=1024');

}else if (viewMode == "mobile"){

    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');

}