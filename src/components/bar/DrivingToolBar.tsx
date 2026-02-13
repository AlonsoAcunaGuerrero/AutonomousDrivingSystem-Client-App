import "./ToolBar.css";
import { GiHummingbird } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { BsFillSignStopFill } from "react-icons/bs";
import { DrivingMode } from "../../types";


export default function ({ currentMode, changeMode } : { currentMode: DrivingMode, changeMode: (value: DrivingMode) => void }) {
    return(
        <div className="driving-tool-bar">
            <button className="btn-driving"
                disabled={currentMode != DrivingMode.Stop}>
                <GiHummingbird />
                <span>Free Driving</span>
            </button>

            <button className="btn-stop"
                disabled={currentMode == DrivingMode.Stop}>
                <BsFillSignStopFill />
                <span>Stop</span>
            </button>
        </div>
    )
}