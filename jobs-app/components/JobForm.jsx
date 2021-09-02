import styles from "../styles/JobForm.module.css";

export default function JobForm() {
  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.group}>
            <input className={styles.input} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Name</label>
          </div>
          <div className={styles.group}>
            <input className={styles.input} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Name</label>
          </div>
          <div className={styles.group}>
            <input className={styles.input} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Name</label>
          </div>
        </form>
      </div>
    </section>
  );
}
