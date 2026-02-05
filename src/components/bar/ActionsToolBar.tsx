import "./ToolBar.css";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { BsGear, BsGearFill } from "react-icons/bs";
import { ViewMode } from "../../App";

export default function ({ currentMode, changeMode } : { currentMode: ViewMode, changeMode: (value: ViewMode) => void }) {

    return (
        <div className="actions-tool-bar">
            <button className={currentMode == ViewMode.Marker ? "btn-tool-selected" : "btn-tool-normal"} 
                onClick={() => {
                    if (currentMode == ViewMode.Marker) {
                        changeMode(ViewMode.None)
                    } else {
                        changeMode(ViewMode.Marker)
                    }
                    
                }}>
                {
                    currentMode == ViewMode.Marker ? 
                    <FaMapMarkerAlt />
                    : <FaMapMarker />
                }
                {/*<span>Add Marker</span>*/}
            </button>

            <button className={currentMode == ViewMode.Config ? "btn-tool-selected" : "btn-tool-normal"}
                onClick={() => {
                    if (currentMode == ViewMode.Config) {
                        changeMode(ViewMode.None)
                    } else {
                        changeMode(ViewMode.Config)
                    }
                    
                }}>
                {
                    currentMode == ViewMode.Config ?
                    <BsGearFill />
                    : <BsGear />
                }
            </button>
        </div>
    )
}