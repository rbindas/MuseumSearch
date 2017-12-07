
$("#add-city").on("click", function(event){
  event.preventDefault();
  
  var lat;
  var long;
  var newState = $("#state-input").val();
  var newCity = $("#city-input").val();

//==============================================================
//Weather data from Open Weather Map API to obtain location longitude and latitude
//============================================================= 

    var APIKey = "c4328a51ed2c2506d6da16835ab77fe0"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=imperial&appid=" + APIKey;
  
    $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) {
      // console.log(response);

      var $weatherDiv = $("<div>");
      var $name = $("<h4><strong>" + response.name + "'s Museums</strong></h4>"); 

      lat = response.coord.lat;
      long = response.coord.lon;

      initialize();
      $weatherDiv.append($name);

      $("#weather-location").prepend($weatherDiv);

    });
    
    $("#state-input").val("");
    $("#city-input").val("");
    $("#weather-location").empty();
    $("#museum-list").empty();
  
//==============================================================
//Google Place API code to get list of museums and map
//==============================================================
  var map;
  var service;
  var infowindow; 

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  function initialize() {
    var selectCity = new google.maps.LatLng(lat,long);

    map = new google.maps.Map(document.getElementById('map'), {
      center: selectCity,
      zoom: 15
    });

    var request = {
      location: selectCity,
      radius: '100',
      query: ['museum']
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        console.log(results);
        var place = results[i];
        
        var $museumDiv = $("<div>");
        var name = place.name;
        var address = place.formatted_address;
        
        $museumDiv.append('<input type="checkbox" value=" ' + name + ' ">' + '  ' + name);
        $museumDiv.append('<p>' + address);
        
        $("#museum-list").append($museumDiv);

        createMarker(results[i]);
      }
    }
  }
  
  });
   

//==============================================================
// TABLE
//==============================================================





