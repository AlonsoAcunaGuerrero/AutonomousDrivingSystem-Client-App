import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerController from './MarkerController';
import { ViewMode } from '../../App';


export default function ({ currentMode } : { currentMode: ViewMode }) {
    return (
        <MapContainer center={[-2.19986, -79.90311]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerController currentMode={currentMode} />
        </MapContainer>
    );
}