//==============================================================
//Creates Anonymous Authentication
//==============================================================

var config = {
  apiKey: "AIzaSyBIh3Eaa12mCe_gUGOPUMVE9JT_-1oT_eo",
  authDomain: "museumsearch-4d634.firebaseapp.com",
  databaseURL: "https://museumsearch-4d634.firebaseio.com",
  projectId: "museumsearch-4d634",
  storageBucket: "museumsearch-4d634.appspot.com",
  messagingSenderId: "440322454720"
};
firebase.initializeApp(config);

// Get Elements
var btnLogin = document.getElementById('btnLogin');
var btnLogout = document.getElementById('btnLogout');

// click login event listener
btnLogin.addEventListener('click', e => {
  console.log("clickbtn");
  firebase.auth().signInAnonymously().then(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  location.href = "index.html";
});

});