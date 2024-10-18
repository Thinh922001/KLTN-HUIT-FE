export interface ISearchItem {
  id: number;
  productName: string;
  img: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
}

export interface SearchState {
  keyWord: string;
  isLoading: boolean;
  searchItems: ISearchItem[];
}
