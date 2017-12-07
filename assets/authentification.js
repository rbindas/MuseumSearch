var config = {
  apiKey: "AIzaSyBB37Qku9-DET8z9CO465CDrXlc7wYUm40",
  authDomain: "train-scheduler-e89b4.firebaseapp.com",
  databaseURL: "https://train-scheduler-e89b4.firebaseio.com",
  projectId: "train-scheduler-e89b4",
  storageBucket: "train-scheduler-e89b4.appspot.com",
  messagingSenderId: "763723494227"
};
firebase.initializeApp(config);

var database = firebase.database();



var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
