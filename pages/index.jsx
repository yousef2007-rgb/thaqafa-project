import React from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
export default function home() {
  return (
    <div className={style.container}>
      <Link href="/type2">انواع الخطر 2</Link>
      <Link href="/type">انواع الخطر 1</Link>
      <a
        href="https://docs.google.com/presentation/d/1tkk-xUu_m-gCiZc5g94q8mFw8f57JmBZ/edit?usp=drivesdk&ouid=108923277493221566731&rtpof=true&sd=true"
        target="blank"
      >
        PowerPoint
      </a>
    </div>
  );
}
