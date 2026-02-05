import "./ToolBar.css";
import { DrivingMode } from "../../App";
import { GiHummingbird } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";


export default function ({ currentMode, changeMode } : { currentMode: DrivingMode, changeMode: (value: DrivingMode) => void }) {
    return(
        <div className="driving-tool-bar">
            <div className="driving-tool-bar-container">
                <button className="btn-driving"
                    disabled={currentMode != DrivingMode.Stop}>
                    <GiHummingbird />
                    <span>Free Driving</span>
                </button>

                <button className="btn-driving"
                    disabled={currentMode != DrivingMode.Stop}>
                    <IoCarSport />
                    <span>Driving To Destination</span>
                </button>

                <button className="btn-stop"
                    disabled={currentMode == DrivingMode.Stop}>
                    <span>Stop</span>
                </button>
            </div>
        </div>
    )
}