import styles from "../styles/Header.module.css";

export default function Header() {
  const handleNew = (e) => {
    console.log("publicar");
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>JOBS NOW</h1>
      <button className={styles.button} onClick={handleNew}>
        Publicar un Empleo
      </button>
    </header>
  );
}
