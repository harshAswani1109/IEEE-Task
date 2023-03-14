import Head from "next/head";
import Image from "next/image";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Task</title>
      </Head>
      <main>
        <Navbar />
        <div className="bg-gradient-to-r from-[#B9D5FF] to-[#F6D1FC] "></div>
        <Footer />
      </main>
    </>
  );
}
