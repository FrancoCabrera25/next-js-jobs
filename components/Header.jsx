import styles from "../styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  const handleNew = (e) => {
    console.log("publicar");
  };

  return (
    <header className={styles.container}>
          <Link href="/">
          <h1 className={styles.title}>JOBS NOW</h1>
      </Link>

      <Link href="/job/new">
        <button className={styles.button} onClick={handleNew}>
          Publicar un Empleo
        </button>
      </Link>
    </header>
  );
}
