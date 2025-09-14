import BestSellerList from "@/components/BestSellerList";
import { getBooksSearch } from "@/lib/books";

// *************** 검색 결과
export default async function Page({
  searchParams,
}:{searchParams:{q?:string}}){
  const q = (searchParams.q ?? "").trim();
  if(!q) return <p>검색어 없삼;</p>

  const items = await getBooksSearch("Title", {max:20, start:1},q);

  return (
    <div>
      <h3>“{q}” 검색 결과</h3>
      //씁..... 이거 컴포넌트 이거 아닌디.. 귀찮으니까 일단...
      <BestSellerList books={items} />
    </div>
  )
}