const mapDark = {
    styles: [
        {
            elementType: 'geometry',
            stylers: [{ color: '#212121' }],
        },
        {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#212121' }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#757575' }],
        },
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9E9E9E' }],
        },
        {
            featureType: 'administrative.land_parcel',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#BDBDBD' }],
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#181818' }],
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#1B1B1B' }],
        },
        {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#2C2C2C' }],
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8A8A8A' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#373737' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#3C3C3C' }],
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#4E4E4E' }],
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
        },
        {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#3D3D3D' }],
        },
    ],
    disableDefaultUI: true, // Disable all default controls
    zoomControl: false,     // Disable zoom control
    mapTypeControl: false,  // Disable map/satellite view control
    streetViewControl: false, // Disable Street View control
    fullscreenControl: false, // Disable Fullscreen control
    scaleControl: false, // Disable scale control (optional)
};

export default mapDark;