import { BiX } from "react-icons/bi";
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
                <button className="btn-close-config" onClick={
                    () => hideConfigView()
                }>
                    <BiX />
                </button>
                
                <div className="config-options">
                    <button>
                        Connections
                    </button>
                </div>
            </div>
        </div>
    )
}