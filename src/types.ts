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

export type BookIdType = 
  |"ISBN"
  |"ISBN13"
  |"ItemId"

// 알라딘 응답
export interface AladinItem {
  title?: string;
  link?: string;
  author?: string;
  pubDate?: string;          // "YYYY-MM-DD"
  description?: string;      // HTML 가능
  isbn?: string;
  isbn13?: string;
  itemId?: number;
  priceSales?: number;
  priceStandard?: number;
  mallType?: string;
  stockStatus?: string;      // "예약판매" 등
  mileage?: number;
  cover?: string;            // 이미지 URL
  categoryId?: number;
  categoryName?: string;     // "국내도서>...>..."
  publisher?: string;
  salesPoint?: number;
  adult?: boolean;
  fixedPrice?: boolean;
  customerReviewRank?: number; // (10점 만점)
  subInfo?: AladinSubInfo;
}

export type AladinSubInfo = {
  subTitle?: string;
  originalTitle?: string;
  itemPage?: number;
  ratingInfo?: AladinRatingInfo;
}

export type AladinRatingInfo = {
  ratingScore?: number;
  ratingCount?: number;
  commentReviewCount?:number;
  myReviewCount?: number;
}

export interface BookListResult {
  total:number;
  items: BookItem[];
}

// 리스트 조회 페이지네이션 타입
export interface PagedResult<T>{
  items:T[];
  total: number;
  page:number;
  size:number;
  start:number;
  lastPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}


// 리스트 조회 내부 아이템 타입
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


//내부 데이터
// export interface BookItemDetail {
// title:string;
//   itemPage:number;
//   ratingInfo:{
//     ratingScore:number;
//     ratingCount: number;
//   }
//   authors:{
//     authorId:number;
//     authorName: string;
//   }
// }

// 상세 조회 내부 타입
export type BookItemDetail = {
  id: string;  
  title: string;
  author?: string;
  publisher?: string;
  pubDate?: string; 
  description?: string;
  isbn13?: string;
  itemId?: number;
  price?: { sales?: number; list?: number; fixedPrice?: boolean };
  cover?: string;
  category?: { id?: number; path?: string[] }; // "A>B>C" → ["A","B","C"]
  stockStatus?: string;
  adult?: boolean;
  salesPoint?: number;
  rating?: { score?: number; count?: number; comments?: number; myReviews?: number };
  pages?: number;
  originalTitle?: string;
  subTitle?: string;
};

