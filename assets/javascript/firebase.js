//  Firebase event for adding train to the database & row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var museumName = childSnapshot.val().name;
  var museumCity = childSnapshot.val().destin;
  var visitDate = childSnapshot.val().date;
  var notes = childSnapshot.val().note;
 
        
$("#visit-schedule > tbody").append("<tr><td>" + museumName + "</td><td>" + museumCity + "</td><td>" + visitDate +  "</td><td>" + notes + "</td></tr>");  

// Handle the errors
 }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
