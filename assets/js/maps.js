function initMap() {
    const myLatLng = { lat: 53.2734, lng: -7.77832031 };
    const myLatLngBelfast = { lat: 54.596422950000004, lng: -5.929466360965295 };
    const myLatLngGalway = { lat: 53.2744475, lng: -9.049333276783623 };
    const myLatLngWicklow = { lat: 52.98072844827882, lng: -6.045849323272706 };
    const myLatLngLimerick = { lat: 52.663611599999996, lng: -8.622099200094345 };
    const myLatLngWaterford = { lat: 52.26023187747952, lng: -7.10592806339264 };
    const myLatLngCork = { lat: 51.896661748557364, lng: -8.474707603454592 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLngBelfast,
        map,
        title: "Belfast",
    });
    new google.maps.Marker({
        position: myLatLngGalway,
        map,
        title: "Galway",
    });
    new google.maps.Marker({
        position: myLatLngWicklow,
        map,
        title: "Wicklow",
    });
    new google.maps.Marker({
        position: myLatLngLimerick,
        map,
        title: "Limerick",
    });
    new google.maps.Marker({
        position: myLatLngWaterford,
        map,
        title: "Waterford",
    });
    new google.maps.Marker({
        position: myLatLngCork,
        map,
        title: "Cork",
    });
}