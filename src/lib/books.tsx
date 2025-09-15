import { AladinItem, BookIdType, BookItem, BookItemDetail, BookListType, BookSearchType } from "@/types";

//////////////////// 리퀘스트
const API_KEY = process.env.ALADIN_TTBKEY!;
const LIST_URL = "https://www.aladin.co.kr/ttb/api/ItemList.aspx";
const SEARCH_URL = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx";
const DETAIL_URL = "https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx"

//////////////////// 리턴 매퍼 (api 데이터 <-> 내부 타입 데이터)
function normalizeString(s: string) {
  return s.replace(/<[^>]+>/g, "");
}
export function mapAladinToBookItem(it: AladinItem):BookItem {
  return {
    title: normalizeString(it.title ?? ""),
    author: it.author ?? "",
    thumbnail: it.cover ?? "",
    link: it.link ?? "",
    pubDate: it.pubDate,
    isbn: it.isbn,
    isbn13: it.isbn13,
    itemId: it.itemId,
    publisher: it.publisher,
  }
}

// #################### 인덱스 화면 리스트 get
export async function getBooksList(type:BookListType,opts:{max?: number; start?:number;}={}):Promise<BookItem[]> {
  const {max = 10, start = 1} = opts;
  const url = new URL(LIST_URL);
  url.searchParams.set('ttbkey',API_KEY);
  url.searchParams.set('QueryType',type);
  url.searchParams.set('MaxResults', String(max));
  url.searchParams.set('start',String(start));
  url.searchParams.set('SearchTarget','Book');
  url.searchParams.set('Output','JS');
  url.searchParams.set('Version',"20131101");

  const res = await fetch(url.toString(), {cache: "no-store"});
  const data = await res.json();
  if(data.errCode) throw new Error(data.errorMessage);

  // 알라딘 api 응답 예시
  // {
  //   "version": "20131101",
  //   "title": "베스트셀러",
  //   "link": "https://...",
  //   "item": [ { /* 책1 */ }, { /* 책2 */ } ],
  //   "totalResults": 100
  // }

  // 리턴 전에 내부 타입 형태로 매핑
  return (data.item ?? []).map(mapAladinToBookItem);
}


// #################### 검색 및 결과 리스트 get
export async function getBooksSearch(type:BookSearchType, opts:{max?:number;start?:number}={},input:string):Promise<BookItem[]> {
  const {max = 10, start = 1} = opts;
  const url = new URL(SEARCH_URL);
  url.searchParams.set('ttbkey',API_KEY);
  url.searchParams.set('QueryType',type);
  url.searchParams.set('MaxResults', String(max));
  url.searchParams.set('start',String(start));
  url.searchParams.set('SearchTarget','Book');
  url.searchParams.set('Output','JS');
  url.searchParams.set('Version',"20131101");
  url.searchParams.set('Query',input);

  const res = await fetch(url.toString(), {cache:"no-store"});
  const data = await res.json();
  if(data.errCode) throw new Error(data.errorMessage);

  return (data.item ?? []).map(mapAladinToBookItem);
} 


// #################### 도서 상세 페이지 정보 get
export async function getBooksDetail(type:BookIdType = "ISBN13",ItemId:string):Promise<BookItemDetail> {
  const url = new URL (DETAIL_URL);
  url.searchParams.set('ttbkey',API_KEY);
  url.searchParams.set('ItemIdType',type);
  url.searchParams.set('ItemId',ItemId);
  url.searchParams.set('Output','JS');
  url.searchParams.set('Version',"20131101");
  // 옵션
  url.searchParams.set('OptResult','ratingInfo');

  console.log(url);
  const res = await fetch(url.toString(), {cache:"no-store"});
  const data = await res.json();
  if(data.errCode) throw new Error(data.errorMessage);

  return (data.item ?? {})
}
