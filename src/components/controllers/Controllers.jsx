import { useState } from "react";
import styles from "./Controllers.module.scss";

const Controllers = ({
  switchOnLights,
  switchOffLights,
  setAnimationSpeed,
}) => {
  const [animationSpeedValue, setAnimationSpeedValue] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();

    if (animationSpeedValue <= 5) {
      setAnimationSpeed(animationSpeedValue);
    }
    setAnimationSpeedValue("");
  };
  return (
    <div className={styles.controllersContainer}>
      <h2>Christmas lights</h2>
      <div className={styles.menu}>
        <button onClick={switchOnLights}>On</button>
        <button onClick={switchOffLights}>Off</button>
        <form onSubmit={onSubmitForm}>
          <input
            type="number"
            placeholder="From 1 until 5 only"
            value={animationSpeedValue}
            onChange={(e) => setAnimationSpeedValue(e.target.value)}
          />
          <button type="submit">RUN</button>
        </form>
      </div>
    </div>
  );
};

export default Controllers;
