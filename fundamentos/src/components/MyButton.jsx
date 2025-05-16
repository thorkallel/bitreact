import styles from "./MyButton.module.css";

export const MyButton = ({ text, myFunction }) => {
  return (
    <button className={styles.button} onClick={myFunction}>
      {text || "Boton sin texto"}
    </button>
  );
};
