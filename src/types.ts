export type BookListType = 
  | "BestSeller"
  | "ItemNewAll"
  | "ItemNewSpecial"
  | "ItemEditorChoice"
  | "BlogBest";

export type BookSearchType = 
  |"Keyword" 
  |"Title" 
  |"Author"
  |"Publisher";


// export interface BookItem {
//   title: string,
//   author: string,
//   description: string;
//   isbn: string,
//   isbn13:string,
//   itemId: number,
//   link: string,
//   pubData: string,
//   priceSales: number,
//   priceStandard: number;
//   mallType: string;
//   stockStatus: string;
//   mileage: number;
//   cover: string;
//   categoryId: number;
//   categoryName: string;
//   publisher: string;
//   salesPoint: number;
//   adult: boolean;
//   fixedPrice: boolean;
//   customerReviewRank: number;
//   bestRank?: number;
//   bestDuration?: string;
//   subInfo?: Record<string, any>; 
// }

// 내부 타입
export interface BookItem {
  title: string;
  author: string;
  thumbnail: string;
  link: string;
  pubDate?: string;
  isbn?: string;
  isbn13?: string;
  itemId?: number;
  publisher?: string;
}

// 알라딘 응답
export interface AladinItem {
  title?: string;
  author?: string;
  cover?: string;
  link?: string;
  pubDate?: string; 
  isbn?: string;
  isbn13?: string;
  itemId?: number;
  publisher?: string;
}

export interface BookListResult {
  total:number;
  items: BookItem[];
}