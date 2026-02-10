import 'leaflet/dist/leaflet.css';
import { MapContainer, SVGOverlay, TileLayer, Polyline, Marker  } from "react-leaflet";
import L from "leaflet";
import MarkerController from '../controllers/MarkerController';
import { Vector2D, ViewMode } from '../types';
import { FaCarAlt } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { useState } from 'react';
import { renderToStaticMarkup } from "react-dom/server";


export default function ({ currentMode } : { currentMode: ViewMode }) {
    
    
    const position = [-2.2, -79.90024]

    const polylineCoords = [
        position,
        [-2.205, -79.90176]
    ]

    const [carBounds, setCarBounds] = useState<Vector2D[]>(

    )

    const staticCarMarkup = renderToStaticMarkup(
        <FaCarAlt size={30} />
    );

    const carIcon = L.divIcon({
        html: staticCarMarkup,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 36],
    });

    return (
        <MapContainer center={[-2.19986, -79.90311]} zoom={20} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerController currentMode={currentMode} />

            <Polyline pathOptions={{ color: 'lime' }} positions={polylineCoords} />

            <Marker position={position} icon={carIcon} />
        </MapContainer>
    );
}