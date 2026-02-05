import { useState } from "react";
import "./App.css";
import MapView from "./components/map/MapView";
import ActionsToolBar from "./components/bar/ActionsToolBar";
import ConfigView from "./components/views/ConfigView";
import DrivingToolBar from "./components/bar/DrivingToolBar";

export enum ViewMode {
  None,
  Marker,
  Config
}

export enum DrivingMode {
  Stop,
  FreeDriving,
  DrivingToDestination,
}

function App() {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>(ViewMode.None)
  const [currentDrivingMode, setCurrentDrivingMode] = useState<DrivingMode>(DrivingMode.Stop)

  return (
    <main>
      <ActionsToolBar currentMode={currentViewMode} changeMode={setCurrentViewMode} />
      
      <div className="main-panel">
        <MapView currentMode={currentViewMode} />
      </div>

      {
        currentViewMode == ViewMode.Config ?
        <ConfigView currentMode={currentViewMode} changeMode={setCurrentViewMode}/> : null
      }

      <DrivingToolBar currentMode={currentDrivingMode} changeMode={setCurrentDrivingMode} />
    </main>
  )
}

/*
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}*/

export default App;
