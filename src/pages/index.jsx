import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Miracle Hotel</title>
        <meta name="description" content="Web hotel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Rooms />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
