import { BookItem, BookListType } from "@/types";


const API_KEY = process.env.ALADIN_TTBKEY!;
const LIST_URL = "https://www.aladin.co.kr/ttb/api/ItemList.aspx";
const SEARCH_URL = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx";

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

export async function getBooksSearch(type:BookListType, opts:{max?:number;start?:number}={},input:string):Promise<BookItem[]> {
  const {max = 10, start = 1} = opts;
  const url = new URL(SEARCH_URL);
  url.searchParams.set('ttbkey',API_KEY);
  url.searchParams.set('QueryType',type);
  url.searchParams.set('MaxResults', String(max));
  url.searchParams.set('start',String(start));
  url.searchParams.set('SearchTarget','Book');
  url.searchParams.set('Output','JS');
  url.searchParams.set('Version',"20131101");
  url.searchParams.set('Qeury',input);

  return []
} 