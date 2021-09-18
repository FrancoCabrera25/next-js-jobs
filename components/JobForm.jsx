
import { useState } from "react";
import { useRouter } from 'next/router'
import styles from "../styles/JobForm.module.css";
import listCategory from "../utils/listCategory.js";

export default function JobForm() {
  const router = useRouter() 
  const contentType = 'application/json'
  const [form, setForm] = useState({
    companyName: '',
    title: '',
    category: '',
    description: '',
    type: '',
    location: '',
    url:''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
    console.log('form',form);
/*     if (forNewMovie) {
      postData(form);
    } else {
      // editar data
      putData(form);
    } */
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (formJob) => {
    try {
      console.log('formJob', formJob);
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(formJob),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        console.log(res.status);
      /*   throw new Error(res.status) */
      }

      router.push('/')
    } catch (error) {
      console.log(error);
      /* setMessage('Failed to add pet') */
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Publicar Empleo</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input 
            className={styles.input} 
            type="text" 
            required
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Nombre de la Empresa</label>
          </div>

          <div className={styles.group}>
            <input 
            className={styles.input} 
            type="text" 
            required
            name="title"
            value={form.title}
            onChange={handleChange} 
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Título del puesto de trabajo</label>
          </div>

          <div className={styles.group}>
            <select 
             className={`${styles.input}  ${styles.select}`}
             name="category"
             value={form.category}
             onChange={handleChange} 
             >
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
            <textarea 
            className={`${styles.input}  ${styles.textarea}`} 
            type="text" 
            required 
            name="description"
            value={form.description}
            onChange={handleChange} 
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Descripción del puesto de trabajo</label>
          </div>

        <div className={styles.group}>
            <select 
            className={`${styles.input}  
            ${styles.select}`}
            name="type"
            value={form.type}
            onChange={handleChange} 
            >
              <option value="">Seleccionar</option>
              <option value="full-Time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Tipo de trabajo </label>
          </div>


          <div className={styles.group}>
            <input 
             className={styles.input} 
             type="text" 
             required 
             name="location"
             value={form.location}
             onChange={handleChange} 
             />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Ubicación</label>
          </div>
          <div className={styles.group}>
            <input 
            className={styles.input} 
            type="text" 
            required 
            name="url"
            value={form.url}
            onChange={handleChange}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Donde aplicar</label>
          </div>
          <div className={styles.containerButton}>
       {/*      <button>Volver</button> */}
            <button className={styles.button} type="submit">Publicar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
