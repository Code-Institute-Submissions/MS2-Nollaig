function initMap() {
    var locations = [
        ['Belfast Continental Christmas Market', 54.596422950000004, -5.929466360965295, 4],
        ['Christmas Market Galway', 53.2744475, -9.049333276783623, 5],
        ['Wicklow Christmas Market', 52.98072844827882, -6.045849323272706, 3],
        ['Milk Market Limerick', 52.663611599999996, -8.622099200094345, 2],
        ['Cork Glow', 51.896661748557364, -8.474707603454592, 1],
        ['Waterford Winterval', 52.26023187747952, -7.10592806339264, 6]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: new google.maps.LatLng(53.2734, -7.77832031),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i, locations) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                map.setZoom(10);
                map.setCenter(marker.getPosition(locations[1][2]));
            }
        })(marker, i, locations));
    }
}


