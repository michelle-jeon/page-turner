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
// types/models.ts
export type BookItemDetail = {
  id: string;                    // isbn13 또는 itemId 문자열화
  title: string;
  author?: string;
  publisher?: string;
  pubDate?: string;              // "YYYY-MM-DD" 그대로 보관
  description?: string;          // HTML 제거/정제본(선호)
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

