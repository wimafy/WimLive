

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
    
    var ipaddressvar = geoplugin_request();
    var latitudevar = Number(geoplugin_latitude()).toFixed(2);
    var longitudevar = Number(geoplugin_longitude()).toFixed(2);
    console.log(ipaddressvar);
    console.log(latitudevar);
    console.log(longitudevar);
    var one = 35.05;
    var two = -85.05;
    
    
    
    
    document.getElementById('newwimmapsearchdiv').style.left = "0vw";
    document.getElementById('fullpage3newwim').style.zIndex = "50";
    var map = new google.maps.Map(document.getElementById('map-canvas'),{
            center:{
                lat: one,
                lng: two
            },
            zoom:5
        });
        console.log("helo");
        var marker = new google.maps.Marker({
            position:{
                lat: one,
                lng: two
            },
            map:map,
            draggable:true
        });

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
}


function newwimdestinationpageout() {
     document.getElementById('newwimmapsearchdiv').style.left = "125vw";
     document.getElementById('fullpage3newwim').style.zIndex = "100";
}

//google maps search stuff
