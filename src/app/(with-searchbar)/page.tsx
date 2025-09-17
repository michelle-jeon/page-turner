import BestSellerList from "@/components/BestSellerList";
import { getBooksList } from "@/lib/books";

// *************** 인덱스
export default async function Page(){
  const itemObj = await getBooksList("BestSeller",{max:10});
  const books = itemObj.items;
  return(
    <div style={{padding:'4px 36px'}}>
      <h3>다니엘이 추천하는 책</h3>
      <section>
        <BestSellerList books={books} />

      </section>
    </div>
  )
}