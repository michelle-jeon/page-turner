export type BookListType = 
  | "Bestseller"
  | "ItemNewAll"
  | "ItemNewSpecial"
  | "ItemEditorChoice"
  | "BlogBest";

export interface BookItem {
  title: string,
  author: string,
  description: string;
  isbn: string,
  isbn13:string,
  itemId: number,
  link: string,
  pubData: string,
  priceSales: number,
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  bestRank?: number;
  bestDuration?: string;
  subInfo?: Record<string, any>; 
}

export interface BookListResult {
  total:number;
  items: BookItem[];
}