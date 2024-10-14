import { ReactNode } from "react"

interface SvgSpriteType{
  icon:ReactNode
  color?:string
  width?:number
  height?:number
  className?:string
  onClick?:()=>void
}

export const SvgIcon= ({ icon, color, height, width,className,onClick }: SvgSpriteType) => (
    <svg
      viewBox='0 0 28.3 28.3'
      className={className}
      fill={color}
      width={width}
      height={height}
      onClick={onClick}
    >
      <use xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  )
  