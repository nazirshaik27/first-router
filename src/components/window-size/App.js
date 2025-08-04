import { useRef } from "react";
import "./App.css";
import useSize from "./useSize";

function App() {
  const windowSize = useRef([
    window.innerWidth,
    window.innerHeight,
  ]);

  const windowsize = useSize();

  return (
    <>
    <div className="App">
      <div className="window">
        Width : <span>{windowSize.current[0]}</span>
      </div>
      <div className="window">
        Height : <span>{windowSize.current[1]}</span>
      </div>
    </div>
    {/* Method2 customHook */}
    <div className="App">
      <div className="window">
        Width : <span>{windowsize[0]}</span>
      </div>
      <div className="window">
        Height : <span>{windowsize[1]}</span>
      </div>
    </div>
    </>
  );
}
export default App;