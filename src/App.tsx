import "./App.css";
import { useState } from "react";
import MapView from "./views/MapView";
import ActionsToolBar from "./components/bar/ActionsToolBar";
import ConfigView from "./views/ConfigView";
import DrivingToolBar from "./components/bar/DrivingToolBar";
import { DrivingMode, ViewMode } from "./types";


function App() {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>(ViewMode.None)
  const [currentDrivingMode, setCurrentDrivingMode] = useState<DrivingMode>(DrivingMode.Stop)

  return (
    <main>
      <ActionsToolBar currentMode={currentViewMode} changeMode={setCurrentViewMode} />
      
{/*       <div className="main-panel">
        <MapView currentMode={currentViewMode} />
      </div> */}
      <div className="sensor-view-container">

      </div>

      {
        currentViewMode == ViewMode.Config ?
        <ConfigView currentMode={currentViewMode} changeMode={setCurrentViewMode}/> : null
      }

      <DrivingToolBar currentMode={currentDrivingMode} changeMode={setCurrentDrivingMode} />
    </main>
  )
}

export default App;
