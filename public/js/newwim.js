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

function initAutocomplete() {
    
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
    document.getElementById('newwiminitmapdivthatmovesaway').style.position = "absolute";
    document.getElementById('newwiminitmapdivthatmovesaway').style.right = "200vw";
    
    document.getElementById('newwiminitmapdivthatmovesin').style.position = "relative";
    document.getElementById('newwiminitmapdivthatmovesin').style.right = "0";
    
    
    
    
    
    /*
    var map = new google.maps.Map(document.getElementById('map-canvas'),{
            center:{
                lat: one,
                lng: two
            },
            zoom:16
        });
       /*
        var marker = new google.maps.Marker({
            position:{
                lat: one,
                lng: two
            },
            map:map,
            draggable:true
        });
        */
    /*
        var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));
        //place cange event on search box
        google.maps.event.addListener(searchBox, 'places_changed',function(){
            console.log(searchBox.getPlaces());
            var places = searchBox.getPlaces();
            //bound
            var bounds = new google.maps.LatLngBounds();
            var i, place;
            for(i=0; place=places[i];i++){
                // console.log(place.geometry.location);
                bounds.extend(place.geometry.location);
                marker.setPosition(place.geometry.location);
            }
            map.fitBounds(bounds);
            map.setZoom(17);
        });
    */
    ////////////////////////////////////
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: {lat: one, lng: two},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
    
        var home = new google.maps.Marker({
            position:{
                lat: one,
                lng: two

            },
            map:map,
            draggable:false,
            icon: 'http://www.ppgps.info/UserManual/ppgps_position.png'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('mapsearchbox');
    
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var marker = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            
            
          var places = searchBox.getPlaces();
            
          document.getElementById("idforselectingtogetridofkeyboard").focus();    
          document.getElementById("mapsearchbox").blur();



          if (places.length == 0) {
            return;
          }
          

/*
          // Clear out the old marker.
          marker.forEach(function(marker) {
            marker.setMap(null);
          });
          marker = [];
  */        
            
         var i = 0,
             marker, infoWindow, location;

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              //url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
              
          if (places.length == 1) {
              var locationinput = document.getElementById('mapsearchbox').value;
              //alert("Location Set");
              //alert(locationinput);
              //alert(place.geometry.location);
              //alert(place.formatted_address);
              //alert(place.id);
              //alert(place.name);
              //alert(place.open_now);
              //document.getElementById("newwimdestinationbuttontext").innerHTML = place.formatted_address;
              document.getElementById("newwiminputdestinationID").innerHTML = place.name;
              document.getElementById("newwiminputdestinationaddressID").innerHTML = place.formatted_address;
              
          }  
              
        //alert(place.id);
              
        //var place.id = 3;
        //var boo = 16;
              
        marker = new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            });
        
        infoWindow = new google.maps.InfoWindow({
           content: "ID is : "+ i 
        });
              
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                //place 
                //alert(place.formatted_address);
                infoWindow.setContent('ID: '+ place.id);
                //infoWindow.open(map, marker);
                //alert("Location Set");
                document.getElementById("newwiminputdestinationID").innerHTML = place.name;
                document.getElementById("newwiminputdestinationaddressID").innerHTML = place.formatted_address;
             
            }
        })(marker, i));
              
        /*      
        marker.addListener('click', function() {   
            alert(i);
            infoWindow.open(map, marker);
          });
        */
            
            //incramenting the variable i for each marker  
            i++;
              
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
              
              
          });
            
            
          map.fitBounds(bounds);
            
          //alert("Location Set");
            
        });  
    
        
      
        home.addListener('click', function() {   
            console.log("wop");
          });

        map.addListener('click', function() {
             console.log('biggitybop'); 
          });

    
}

 


function newwimdestinationpageout() {
     document.getElementById('newwimmapsearchdiv').style.left = "125vw";
     document.getElementById('fullpage3newwim').style.zIndex = "100";
}


function newwimdestinationpageinafterinitialization() {
     document.getElementById('newwimmapsearchdiv').style.left = "0vw";
     document.getElementById('fullpage3newwim').style.zIndex = "50";
}



//google maps search stuff