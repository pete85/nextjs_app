import {GoogleMap, LoadScript, Circle} from '@react-google-maps/api';
import mapDark from "@/app/charts/map";

interface MapComponentProps {
    lat: number;
    lng: number;
    width: string;
    height: string;
    zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({lat, lng, width, height, zoom}) => {
    const center = {lat, lng};

    const containerStyle = {
        width: width,
        height: height
    };

    const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '';

    if (!GOOGLE_MAPS_KEY) {
        throw new Error('Google Maps API Key is missing');
    }

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={mapDark}>

                <Circle
                    center={center}
                    options={{
                        fillColor: '#134E4A',
                        fillOpacity: 0.3,
                        strokeColor: '#022C22',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        radius: 4000, // Radius in meters
                    }}
                />
                {/* You can add markers or other components here */}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
