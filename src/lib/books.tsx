import { BookItem, BookListType, BookSearchType } from "@/types";

//////////////////// 리퀘스트
const API_KEY = process.env.ALADIN_TTBKEY!;
const LIST_URL = "https://www.aladin.co.kr/ttb/api/ItemList.aspx";
const SEARCH_URL = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx";

//////////////////// 리턴
//리턴받은 데이터 가공하는 함수들!!!!여기!!!


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

  return data.item ?? [];
}

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

  return data.item ?? [];
} 