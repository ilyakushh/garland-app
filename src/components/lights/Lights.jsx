import styles from "./Lights.module.scss";

const Lights = ({ switchLights, animationSpeed }) => {
  const reversedSpeed = 6 - animationSpeed;
  return (
    <ul className={styles.lightsContainer}>
      {Array(8)
        .fill()
        .map((_, index) => (
          <li
            key={index}
            style={{
              animationDelay: `${(Math.random() * 0.5).toFixed(1)}s`,
              animationDuration: `${reversedSpeed}s`,
            }}
            className={switchLights ? styles.active : ""}
          ></li>
        ))}
    </ul>
  );
};

export default Lights;
