import { BookItem } from "@/types";
import styles from "./BestSellerList.module.css"

type Props = {books:BookItem[]};

export default function BestSellerList({books}:Props){
  return(
    <ul className={styles.grid}>
      {books.map((b)=>(
        <li key={b.itemId}>
          
        </li>
      ))}
    </ul>
  )
}