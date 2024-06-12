import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input type="text" className={styles.display}></input>
      <div className={styles.buttonsContainer}>
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
