import React from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
export default function home() {
  return (
    <div className={style.container}>
      <Link href="/type2">انواع الخطر 2</Link>
      <Link href="/type">انواع الخطر 1</Link>
    </div>
  );
}
