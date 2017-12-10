$("#add-city").on("click", function(event) {
            event.preventDefault();

            var lat;
            var long;
            // var newState = $("#state-input").val();
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

            // $("#state-input").val("");
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
                var selectCity = new google.maps.LatLng(lat, long);

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
                        var place = results[i];
                        var $museumDiv = $('<div>');
                        var museum = {
                           name: place.name,
                           address: place.formatted_address
                        };

                        // console.log(museum.name);
                        // console.log(museum.address);

                        $museumDiv.append('<input type="checkbox" name="list" value="' + museum.name + ' ">' + museum.name + ',' + museum.address);

                        $("#museum-list").append($museumDiv);

                        createMarker(results[i]);

                    }

                    $("#museum-list").append('<button type="submit" id="submit">Add To My List</button><hr>');

                    $("#submit").on("click", function() {
                        event.preventDefault();
                        $.each($("input[name='list']:checked"), function() {
                            console.log(this.value);
                            var name = this.value;                                                       
                           database.ref().push({
                              name: name,
                            });
                        });     
                    });
                }

            }

            //==============================================================
            // FIREBASE TABLE
            //==============================================================

            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyBIh3Eaa12mCe_gUGOPUMVE9JT_-1oT_eo",
                authDomain: "museumsearch-4d634.firebaseapp.com",
                databaseURL: "https://museumsearch-4d634.firebaseio.com",
                projectId: "museumsearch-4d634",
                storageBucket: "museumsearch-4d634.appspot.com",
                messagingSenderId: "440322454720"
            };

            firebase.initializeApp(config);

            var database = firebase.database();

            //  Firebase event for adding museum to the database & row in the html when a user adds an entry
            database.ref().on("child_added", function(childSnapshot, prevChildKey) {
               console.log(childSnapshot.val().name);
                // Store everything into a variable.
               var museumName = childSnapshot.val().name;
                // console.log(museumName);
                // var museumAddress = childSnapshot.val().address;

               $("#visit-schedule > tbody").append("<tr><td>" + museumName + "</td><td>" + visitDate +  "</td><td>" + notes + "</td><td><button id='changeRecord'>Edit</button></td><td><button id='removeRecord'>Del</button></td></tr>" );  


                // Handle the errors
               }, function(errorObject) {
                  console.log("Errors handled: " + errorObject.code);
            
            });

});



