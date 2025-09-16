import { BookItem } from "@/types";
import s from "./BestSellerList.module.css"
import Link from "next/link";

type Props = {books:BookItem[]};

export default function BestSellerList({books}:Props){
  return(
    <ul className={s.grid}>
      {books.map((b)=>(
        <li key={b.itemId} className={s.card}>
          <Link href={`/book/${b.isbn13}`}>
            {b.thumbnail && <img className={s.thumb} src={b.thumbnail} alt={b.title} />}
            <div className={s.meta}>
              <strong className={s.title}>{b.title}</strong>
              <span className={s.author}>{b.author}</span>
              <span className={s.pub}>
                {b.publisher} · {b.pubDate}
              </span>
              <span className={s.price}>
                
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}