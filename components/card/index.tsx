// /components/Card.tsx

import Image from "next/image";
import Link from "next/link";
import style from './Card.module.css'
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  id: number;
}

const Card = ({ children, id }: CardProps) => {
  return (
    
    <Link
      href={`room/${id}`}
      target="blank"
      className={style.card}
    >
      {children}
    </Link>
  );
};

function CardImage({
  src,
  alt,
  width,
  height,
  className,

}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;

}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
    
      // objectFit="cover"
      // fill
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      
    />
  );
}

function Title({ title }: { title: string }) {
  return (
    <h2 className={style.title}>
      {title}
    </h2>
  );
}
function Price({
  basePrice,
  discount,
  hasDiscount,
}: {
  basePrice: number;
  discount?: number;
  hasDiscount?: boolean;
}) {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex gap-x-1 text-Tertiary">
        هر شب از
        <p className=" text-Emphasise  text-base font-semibold">
          {hasDiscount
            ? discount?.toLocaleString()
            : basePrice.toLocaleString()}
        </p>
        تومان
      </div>
      {hasDiscount ? (
        <div className="flex gap-x-1 text-Tertiary">
          <span>{basePrice.toLocaleString()} </span>
          <span className=" bg-Primary p-1 rounded-md text-white text-xs">
            % {}
          </span>
        </div>
      ) : null}
    </div>
  );
}

Card.Image = CardImage;
Card.Price = Price;
Card.Title = Title;

export default Card;
