import Searchbar from "@/components/SearchBar";
import { getBooksList } from "@/lib/books";

// *************** 인덱스
export default async function Page(){
  const books = await getBooksList("BestSeller",{max:10});
  return(
    <div>
      <h3>검색</h3>
      <section>
        <Searchbar/>
      </section>
      <h3>다니엘이 추천하는 책</h3>
      <section>
        {JSON.stringify(books)}

      </section>
    </div>
  )
}