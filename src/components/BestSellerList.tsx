import { BookItem } from "@/types";
import styles from "./BestSellerList.module.css"
import Link from "next/link";

type Props = {books:BookItem[]};

export default function BestSellerList({books}:Props){
  return(
    <ul className={styles.grid}>
      {books.map((b)=>(
        <li key={b.itemId} className={styles.card}>
          <Link href={`/book/${b.isbn13}`}>
            {b.thumbnail && <img className={styles.thumb} src={b.thumbnail} alt={b.title} />}
            <div className={styles.meta}>
              <strong className={styles.title}>{b.title}</strong>
              <span className={styles.author}>{b.author}</span>
              <span className={styles.pub}>
                {b.publisher} · {b.pubDate}
              </span>
              <span className={styles.price}>
                
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}