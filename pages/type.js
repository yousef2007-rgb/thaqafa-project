import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <iframe
          style={{
            height: "100vh",
            width: "100vw",
          }}
          src={
            "https://wordwall.net/embed/06899e724e7846f3bd798a56e1523174?themeId=21&templateId=5&fontStackId=0"
          }
          frameborder="0"
          allowfullscreen
        ></iframe>
      </main>
    </div>
  );
}