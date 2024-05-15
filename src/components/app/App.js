import { useState } from "react";
import Controllers from "../controllers/Controllers";
import Lights from "../lights/Lights";
import "./App.scss";

function App() {
  const [switchLights, setSwitchLights] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(3);
  const handleSwitchOnLights = () => {
    setSwitchLights(true);
  };
  const handleSwitchOffLights = () => {
    setSwitchLights(false);
  };

  return (
    <div className="App">
      <Lights switchLights={switchLights} animationSpeed={animationSpeed} />
      <Controllers
        switchOnLights={handleSwitchOnLights}
        switchOffLights={handleSwitchOffLights}
        setAnimationSpeed={setAnimationSpeed}
      />
    </div>
  );
}

export default App;
