// //  Firebase event for adding train to the database & row in the html when a user adds an entry
// database.ref().on("child_added", function(childSnapshot, prevChildKey) {

//   console.log(childSnapshot.val());

//   // Store everything into a variable.
//   var museumName = childSnapshot.val().name;
//   var museumCity = childSnapshot.val().destin;
//   var visitDate = childSnapshot.val().date;
//   var notes = childSnapshot.val().note;


// $("#visit-schedule > tbody").append("<tr><td>" + museumName + "</td><td>" + museumCity + "</td><td>" + visitDate +  "</td><td>" + notes + "</td></tr>");

// // Handle the errors
//  }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
//     });

// Login and Registration
// $('#myModal').modal('show');
//create firebase references

// (function () {


const config = {
  apiKey: "AIzaSyBIh3Eaa12mCe_gUGOPUMVE9JT_-1oT_eo",
  authDomain: "museumsearch-4d634.firebaseapp.com",
  databaseURL: "https://museumsearch-4d634.firebaseio.com",
  projectId: "museumsearch-4d634",
  storageBucket: "museumsearch-4d634.appspot.com",
  messagingSenderId: "440322454720"
};
firebase.initializeApp(config);

// Get Elements
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

// click login event listener
btnLogin.addEventListener('click', e => {
    firebase.auth().SignInAnonymously()
});
// click logout event addListener
  btnLogout.addEventListener('click', e => {
    firebase.auth()signOut()
  });
  // Auth Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser);
  if (firebaseUser) {
    btnLogout.classList.remove('hide')
  } else {
    btnLogout.classlist.add('hide')
  }

});
// }());
