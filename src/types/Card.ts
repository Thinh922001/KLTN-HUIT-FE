export enum ELabel {
  NORMAL,
  PRIMARY,
}

export interface ILabel {
  label: ELabel;
  text: string;
}

export interface IVote {
  totalVote: number;
  startRate: number;
}

export interface IDiscount {
  OldPrice: number;
  discountPercent: number;
}

export enum ETxtOnline {
  NORMAL,
  PRIMARY,
}

export interface ITxtOnline {
  type: ETxtOnline;
  text: string;
}

export enum EResultLabel {
  RED,
  ORANGE,
  PINK,
}

export interface IResultLabel {
  text: string;
  type: EResultLabel;
}

export interface IBreadCrumb {
  link?: string;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface ICard {
  id?: number;
  title: string;
  img: string;
  subImg?: string; // chưa làm
  labels?: ILabel[];
  // trả góp 5% , mẫu mới
  prodsGroup?: string[];
  // 256GB 512GB 1TB => for only phone
  resultLabel?: IResultLabel; // chưa làm
  // tạo component mới làm sau
  txtOnline?: ITxtOnline; // chưa làm
  // Online rẻ quá, chỉ bán online
  textGift?: string; // chưa làm
  price: number;
  tabs?: string[]; //chưa làm
  // để bàn, lắp đặt miễn phí, 55 inch, 4k
  discount?: IDiscount;
  vote?: IVote;
}
