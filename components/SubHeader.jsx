import styles from "../styles/SubHeader.module.css";
import Image from "next/image";
export default function SubHeader() {
  return (
    <section className={styles.container}>
      <div className={styles.containerTitles}>
        <h1 className={styles.title}>ENCONTRA TU PROXIMO TRABAJO</h1>
        <h3 className={styles.subtitle}>
          Trabajos remotos de Programación, Diseño, Marketing y más. Enfocados
          en Latinoamérica.
        </h3>
      </div>
   {/*    <div className={styles.containerImage}>
        <Image alt="Vercel logo" src="/jobs.jpg" width={1000} height={1000}/>
      </div> */}
    </section>
  );
}
