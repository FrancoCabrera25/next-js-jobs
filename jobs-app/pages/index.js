import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import CategoryFilter from "../components/CategoryFilter";
import Job from "../components/Job";
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <div>
      <Layout>
        <SubHeader />
        <CategoryFilter />
        <section className={styles.container}>
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        </section>       
      </Layout>
    </div>
  );
}
