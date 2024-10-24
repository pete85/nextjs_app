import React, { useState, useEffect } from 'react';

interface MapComponentProps {
    lat: number;
    lng: number;
    zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, zoom }) => {
    const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '';

    if (!GOOGLE_MAPS_KEY) {
        throw new Error('Google Maps API Key is missing');
    }

    const [windowSize, setWindowSize] = useState({ width: 640, height: 640 });

    // Function to dynamically update the window size for 100vw/100vh
    useEffect(() => {
        const updateSize = () => {
            const newWidth = Math.min(window.innerWidth, 640); // Limiting to 640px for free-tier
            const newHeight = Math.min(window.innerHeight, 640); // Limiting to 640px for free-tier
            setWindowSize({ width: newWidth, height: newHeight });
        };

        // Update size on window resize
        window.addEventListener('resize', updateSize);
        updateSize(); // Initial call to set size

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // Construct the Google Static Maps API URL
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${windowSize.width}x${windowSize.height}&key=${GOOGLE_MAPS_KEY}&maptype=roadmap`;

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <img
                src={mapUrl}
                alt="Map location"
                className="map-image"
            />
        </div>
    );
};

export default MapComponent;
