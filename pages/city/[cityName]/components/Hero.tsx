import Image from "next/image";
import style from "./Hero.module.css";
export function Hero() {
  return (
    <div className={style.hero}>
      <Image
        alt="اجاره ویلا"
        src="/images/desktop-hero.jpg"
        objectFit="cover"
        fill
        priority={true}
      />
      <h2 className={style.text}>دریا کنار هنوز قشنگه ...</h2>
    </div>
  );
}
