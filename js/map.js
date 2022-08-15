$("#map-canvas").gmap3({
    action: "init",
    marker: {
        values: [{
            latLng: [40.7143528, -74.0059731],
            data: `<span style="color: black;"> Doniex Portfolio  - New York City </span`,
        }],
        options: {
            draggable: false,
            icon: "/images/marker.png"
        },
        events: {
            mouseover: function (a, b, c) {
                var d = $(this).gmap3("get"), e = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                });
                if (e) {
                    e.open(d, a);
                    e.setContent(c.data);
                } else $(this).gmap3({
                    infowindow: {
                        anchor: a,
                        options: {
                            content: c.data
                        }
                    }
                });
            },
            mouseout: function() {
                var a = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                });
                if (a) a.close();
            }
        }
    },
    map: {
        options: {
            zoom: 14,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            scrollwheel: false,
            streetViewControl: true,
            draggable: true,
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        }
    }
});