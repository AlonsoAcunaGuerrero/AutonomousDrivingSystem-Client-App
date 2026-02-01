import { useState } from "react";
import "./App.css";
import MapView from "./components/map/MapView";
import { FaMapMarkerAlt } from "react-icons/fa";
import ToolBar from "./components/bar/ToolBar";
import ConfigView from "./components/views/ConfigView";

export enum ViewMode {
  None,
  Marker,
  Config
}

function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>(ViewMode.None)

  return (
    <main>
      <ToolBar currentMode={currentMode} changeMode={setCurrentMode} />
      
      <div className="main-panel">
        {/* <div className="control-panel">
          <button>Go</button>
        </div> */}

        <MapView currentMode={currentMode} />
      </div>

      {
        currentMode == ViewMode.Config ?
        <ConfigView currentMode={currentMode} changeMode={setCurrentMode}/> : null
      }
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
