import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
