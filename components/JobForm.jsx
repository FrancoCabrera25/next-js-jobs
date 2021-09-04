import styles from "../styles/JobForm.module.css";
import listCategory from "../utils/listCategory.js";
export default function JobForm() {
  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Publicar Empleo</h1>
        <form>
          <div className={styles.group}>
            <input className={styles.input} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Nombre de la Empresa</label>
          </div>

          <div className={styles.group}>
            <input className={styles.input} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Título del puesto de trabajo</label>
          </div>

          <div className={styles.group}>
            <select className={`${styles.input}  ${styles.select}`}>
              <option value="">Seleccionar</option>
              {listCategory.map((item) => (
                <option className={styles.selectOption} key={item.key} value={item.key}>
                  {item.description}
                </option>
              ))}
            </select>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Seleccionar Categoria </label>
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
