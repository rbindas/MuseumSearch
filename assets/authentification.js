var config = {
  apiKey: "AIzaSyAvOmynCk0IJxciZfAQym16mmQE780uCcw",
  authDomain: "authentification-pro.firebaseapp.com",
  databaseURL: "https://authentification-pro.firebaseio.com",
  projectId: "authentification-pro",
  storageBucket: "authentification-pro.appspot.com",
  messagingSenderId: "612534527651"
};
firebase.initializeApp(config);;

var database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')
   });
}
var uiConfig = {
       signInSuccessUrl: '<url-to-redirect-to-on-success>',
       signInOptions: [
         // Leave the lines as is for the providers you want to offer your users.
         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
         firebase.auth.GithubAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID,
         firebase.auth.PhoneAuthProvider.PROVIDER_ID
       ],
       // Terms of service url.
       tosUrl: '<your-tos-url>'
     };

     // Initialize the FirebaseUI Widget using Firebase.
     var ui = new firebaseui.auth.AuthUI(firebase.auth());
     // The start method will wait until the DOM is loaded.
     ui.start('#firebaseui-auth-container', uiConfig);
     function onSuccess(googleUser) {
     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
   }
   function onFailure(error) {
     console.log(error);
   }
   function renderButton() {
     gapi.signin2.render('my-signin2', {
       'scope': 'profile email',
       'width': 240,
       'height': 50,
       'longtitle': true,
       'theme': 'dark',
       'onsuccess': onSuccess,
       'onfailure': onFailure
     });
   }
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// email.html
//
//
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
