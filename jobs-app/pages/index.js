import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import CategoryFilter from "../components/CategoryFilter";
import ListJobs from "../components/ListJobs";

export default function Home() {
  return (
    <div>
      <Layout>
        <SubHeader />
        <CategoryFilter />
        <ListJobs />
      </Layout>
    </div>
  );
}
