  
$("#add-city").on("click", function(event){
  event.preventDefault();
 
  var newCity = $("#city-input").val();

//=============================================================  
//Museum data from GeoNames API with city name hardcoded
//=============================================================
  
  $.ajax({
    url: "http://api.geonames.org/searchJSON?q=" + newCity + "&maxRows=10&featureCode=MUS&username=hbriggs",
    method: "GET"
  }).done(function(response) {
      console.log(response);
      // $("#museum-appear-here").text(JSON.stringify(response));
      var results = response.data;
      
      for (var i = 0; i <results.length; i++) {
        var result = results[i];
        var $museumDiv = $("<div>");
        var $p = $("<p>").text("Museum Name: " + result.name);
        
        console.log(result.name);
        
        $museumDiv.append($p);
        
        $("#museum-appear-here").append($museumDiv);
      }       
  });

//==============================================================
//Weather data from Open Weather Map API
//============================================================= 

    var APIKey = "c4328a51ed2c2506d6da16835ab77fe0"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=imperial&appid=" + APIKey;
  
    $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) {
      console.log(response);
      // var weatherResults = response.data;
      var $weatherDiv = $("<div>");
      var $name = $("<p>").text("City: " + response.name);
      var $temp = $("<p>").text("Temperature (F): " + response.main.temp);
      var $long = $("<p>").text("Longitude: " + response.coord.lon);
      var $lat = $("<p>").text("Latitude: " + response.coord.lat);
       $weatherDiv.append($name);
      $weatherDiv.append($temp);
      $weatherDiv.append($long);
      $weatherDiv.append($lat);
      $("#weather-appear-here").prepend($weatherDiv);
    });

    $("#city-input").val("");

  });
//==============================================================
  
  //Place search data from Google Places API
  // var APIKey = "AIzaSyAqftO0kkpkObVYIPofNt_VDx02gllY0wA"
  // var queryURL = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key="+APIKey+"input=museum+near%20Madrid";
  
  // $.ajax({
  //   url: queryURL, 
  //   method: "GET"
  // }).done(function(response) {
  //   console.log(response);
  
    // var $locationDiv = $("<div>");
    // var $name = $("<p>").text("City: " + response.name);
    // var $museum = $("<p>").text("Museum: " + response.main.temp);
    
    // $locationDiv.append($name);
    // $locationDiv.append($museum);
    
    // $("#weather-appear-here").prepend($weatherDiv);
  
  // });

  
  
//==============================================================
// TABLE
//==============================================================





