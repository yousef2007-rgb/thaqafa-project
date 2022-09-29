import React from "react";
import style from "../styles/Home.module.css";
export default function home() {
  return (
    <div className={style.container}>
      <a href="/type2">انواع الخطر 2</a>
      <a href="/type">انواع الخطر 1</a>
    </div>
  );
}
