import styles from "../styles/Job.module.css";
export default function Job() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>DESARROLLADOR FRONTEND</h1>
        <h3 className={styles.subTitle}>EMPRESA</h3>
        <h3 className={styles.subTitle}>PROGRAMACION</h3>
      </div>
      <div className={styles.content}>
        Loremisdasdasdas
      </div>
    </div>
  );
}
