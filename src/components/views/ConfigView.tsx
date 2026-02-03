import { BiX } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa6";
import { ViewMode } from "../../App";
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
                        <FaCarSide />
                        <span>Connections</span>
                    </button>
                </div>
            </div>
        </div>
    )
}