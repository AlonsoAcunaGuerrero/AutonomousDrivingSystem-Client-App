import 'leaflet/dist/leaflet.css';
import { MapContainer, SVGOverlay, TileLayer } from "react-leaflet";
import MarkerController from '../controllers/MarkerController';
import { Vector2D, ViewMode } from '../types';
import { FaCarAlt } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { useState } from 'react';


export default function ({ currentMode } : { currentMode: ViewMode }) {
    
    
    const position = [-2.2, -79.9]
    const bounds = [
    [-2.195, -79.895],
    [-2.205, -79.905],
    ]

    const [carBounds, setCarBounds] = useState<Vector2D[]>(

    )

    return (
        <MapContainer center={[-2.19986, -79.90311]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerController currentMode={currentMode} />

            <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                <FaCarAlt x="10px" y="10px" size={30} />
                <RiArrowUpSLine x="0" y="-20px"  size={50} />
            </SVGOverlay>
        </MapContainer>
    );
}