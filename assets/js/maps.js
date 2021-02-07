// function which displays a map with markers
function initMap() {
    // an array containing coordinates for each of the Christmas markets
    const locations = [
        ['<a href="https://www.facebook.com/BelfastXmasMark/" target="_blank" rel="noreferrer noopener">Belfast Continental Christmas Market</a>', 54.596422950000004, -5.929466360965295, 4],
        ['<a href="https://www.christmasmarketgalway.com/" target="_blank" rel="noreferrer noopener">Christmas Market Galway</a>', 53.2744475, -9.049333276783623, 5],
        ['<a href="https://www.wicklowchristmasmarket.com/" target="_blank" rel="noreferrer noopener">Wicklow Christmas Market</a>', 52.98072844827882, -6.045849323272706, 3],
        ['<a href="https://www.milkmarketlimerick.ie/" target="_blank" rel="noreferrer noopener">Milk Market Limerick</a>', 52.663611599999996, -8.622099200094345, 2],
        ['<a href="https://www.corkcity.ie/en/re-imagine-glow/" target="_blank" rel="noreferrer noopener">Cork Glow</a>', 51.896661748557364, -8.474707603454592, 1],
        ['<a href="http://www.winterval.ie/" target="_blank" rel="noreferrer noopener">Waterford Winterval</a>', 52.26023187747952, -7.10592806339264, 6]
    ];
    // this determines the center point of the map
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: new google.maps.LatLng(53.2734, -7.77832031),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const infowindow = new google.maps.InfoWindow();

    let marker, i;
    // determines the locations of the markers
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        // when marker is clicked on, zooms the map in closer on each location
        google.maps.event.addListener(marker, 'click', (function (marker, i, locations) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                map.setZoom(10);
                map.setCenter(marker.getPosition(locations[1][2]));
            };
        })(marker, i, locations));
    }
}


