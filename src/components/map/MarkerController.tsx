import type { LeafletEventHandlerFnMap } from 'leaflet';
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import { ViewMode } from '../../App';


interface MarkerPosition {
    lat: number,
    lng: number
}


export default function MapClickMarker({ currentMode } : { currentMode: ViewMode }) {
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);

  useMapEvents({
    click(e: LeafletEventHandlerFnMap) {
      if (currentMode == ViewMode.Marker) {
        setMarkers((prev) => [...prev, e.latlng]);
      }
    },
  });

  
  return (
    <>
      {markers.map((pos, i) => (
        <Marker key={i} position={pos}>
          <Popup>
            Marcador #{i + 1}<br />
            {pos.lat.toFixed(5)}, {pos.lng.toFixed(5)}
          </Popup>
        </Marker>
      ))}
    </>
  );
}