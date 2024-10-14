import { Idata } from "@/types";
import style from "./PageInfo.module.css";

export function PageInfo({data}:{data:Idata}) {
  return (
    <>
      <h1 className={style.cityInfo}>
        اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در{" "}
        {data.rooms[0].stateFaName}
      </h1>
      <h2>{`${
        data.count
      } اقامتگاه از ${data.minPrice.toLocaleString()} تومان`}</h2>
    </>
  );
}
