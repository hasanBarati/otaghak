export interface IRooms {
  id: number;
  roomName: string;
  basePrice: number;
  afterDiscount: number;
  hasDiscount: boolean;
  stateFaName: string;
  seoTitle:string
}
export interface Idata {
  rooms: IRooms[];
  count: number;
  minPrice: number;
  Message?: string;

}
export interface LinkType {
  title: string;
  href: string;
  icon: string;
}
