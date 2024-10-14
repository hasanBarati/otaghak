import { Idata, IRooms } from "@/types";
import React from "react";
import style from "./CardRender.module.css";
import Card from "@/components/card";

export function CardRdender({ data }: { data: Idata }) {
  return (
    <div className={style.cards}>
      {data.rooms.map((room: IRooms) => (
        <Card key={room.id} id={room.id}>
          <Card.Image
            src={"/images/cardImage.jpg"}
            alt={room.roomName}
            width={315}
            height={240}
        
            className="rounded-lg"
          />
          <Card.Title title={room.roomName} />
          <Card.Price
            basePrice={room.basePrice}
            discount={room.afterDiscount}
            hasDiscount={room.hasDiscount}
          />
        </Card>
      ))}
    </div>
  );
}
