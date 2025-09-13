import BestSellerList from "@/components/BestSellerList";
import SearchBar from "@/components/SearchBar";
import { getBooksList } from "@/lib/books";

// *************** 인덱스
export default async function Page(){
  const books = await getBooksList("BestSeller",{max:10});
  return(
    <div>
      <h3>검색</h3>
      <section>
        <SearchBar/>
      </section>
      <h3>다니엘이 추천하는 책</h3>
      <section>
        <BestSellerList books={books} />

      </section>
    </div>
  )
}