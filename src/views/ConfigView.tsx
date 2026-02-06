import { BiX } from "react-icons/bi";
import { FaCarSide, FaMapLocation } from "react-icons/fa6";
import { ViewMode } from "../types";
import "./ConfigView.css";

export default function ({ currentMode, changeMode } : { currentMode: ViewMode, changeMode: (value: ViewMode) => void }) {
    
    const hideConfigView = () => {
        if (currentMode == ViewMode.Config){
            changeMode(ViewMode.None)
        }
    }
    
    return(
        <div className="config-view-container">
            <div className="config-panel">
                <h2>Configuration</h2>
                <button className="btn-close-config" onClick={
                    () => hideConfigView()
                }>
                    <BiX />
                </button>
                
                <div className="config-options">
                    <button>
                        <FaCarSide />
                        <span>Connections</span>
                    </button>

                    <button>
                        <FaMapLocation />
                        <span>Download Other Map</span>
                    </button>
                </div>
            </div>
        </div>
    )
}