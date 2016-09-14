

function showadvancedoptions() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimadvancedoptionsdiv").style.left = "0vw";
}

function hideadvancedoptions() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwimadvancedoptionsdiv").style.left = "120vw";

}


function showmapsearch() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimmapsearchdiv").style.left = "0vw";
    
    
}

function hidemapsearch() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwimmapsearchdiv").style.left = "120vw";
    
}


function showinvitefriends() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwiminvitefriendsdiv").style.left = "0vw";
    
}

function hideinvitefriends() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwiminvitefriendsdiv").style.left = "120vw";
    
}


function showwimwimtype() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimwimtypediv").style.left = "0vw";
    
}

function hidewimwimtype() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwimwimtypediv").style.left = "120vw";
    
}


function newwimselectfriend(friendID) {
    //alert(friendID);
    var selectedID = "select" + friendID;
    var selecteddiv = document.getElementById(selectedID);
    if(document.getElementById(selectedID).style.opacity  == 1){
        document.getElementById(selectedID).style.opacity = "0";
    }else{
        document.getElementById(selectedID).style.opacity = "1";
    }
    
    
}


function newwimwimtype(wimtypeID) {
    //alert(friendID);
    var selectedID = "select" + wimtypeID;
    var selecteddiv = document.getElementById(selectedID);
    if(document.getElementById(selectedID).style.opacity  == 1){
        document.getElementById(selectedID).style.opacity = "0";
    }else{
        document.getElementById(selectedID).style.opacity = "1";
    }
    
    
}

//new wim v2

function newwimadvanceslide(divID) {
    //document.getElementById(divID).style.left = "0vw";
    document.getElementById(divID).classList.add('pagetransitionIN');
    document.getElementById(divID).classList.remove('pagetransitionOUT');
}

function newwimbackslide(divID) {
    document.getElementById(divID).classList.remove('pagetransitionIN');
    document.getElementById(divID).classList.add('pagetransitionOUT');
    //document.getElementById(divID).style.left = "120vw";
}

function newwimdestinationpagein() {
    
    //var ipaddressvar = geoplugin_request();
    var latitudevar = Number(geoplugin_latitude()).toFixed(2);
    var longitudevar = Number(geoplugin_longitude()).toFixed(2);
    //console.log(ipaddressvar);
    //alert((parseFloat(latitudevar)));
    //console.log(typeof(parseFloat(longitudevar)));
    var one = parseFloat(latitudevar);
    var two = parseFloat(longitudevar);
    
    
    
    
    document.getElementById('newwimmapsearchdiv').style.left = "0vw";
    document.getElementById('fullpage3newwim').style.zIndex = "50";
    
    // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
}


function newwimdestinationpageout() {
     document.getElementById('newwimmapsearchdiv').style.left = "125vw";
     document.getElementById('fullpage3newwim').style.zIndex = "100";
}

//google maps search stuff
