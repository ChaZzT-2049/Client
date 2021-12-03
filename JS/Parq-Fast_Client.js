mapboxgl.accessToken = 'pk.eyJ1IjoicGFycS1mYXN0IiwiYSI6ImNrd2d2anlsNTBzZWQybm5zODY4NzN5bnkifQ.zQZ_aoczsiq15pKgnHRSzg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-87.07987, 20.6274], // starting position [lng, lat]
    zoom: 18 // starting zoom
    });
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));