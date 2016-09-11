
//var ipaddress = geoplugin_request();
//var latitude = geoplugin_latitude();
//var longitude = geoplugin_longitude();
//alert(ipaddress);
//alert("something");
var map = new google.maps.Map(document.getElementById('map-canvas'),{
            center:{
                lat: 27.72,
                lng: 85.36
            },
            zoom:15
        });

        var marker = new google.maps.Marker({
            position:{
                lat: 27.72,
                lng:85.36
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
            map.setZoom(15);

        });
