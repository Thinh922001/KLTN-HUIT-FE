export interface INew {
  img: string;
  desc: string;
}

export interface ICate {
  id: number;
  category: string;
  news: INew[];
}
