"use client";

import { getBooksSearch } from "@/lib/books";
import { BookItem } from "@/types";
import { FormEvent, useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search,setSearch] = useState<string>("");
  // const [loading,setLoading] = useState<boolean>(false);
  // const [books,setBooks] = useState<BookItem[]>([]);
  const router = useRouter();
  
  const onSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    // setLoading(true);

    // console.log("검색어:",search);

    // if(!search.trim()){
    //   alert("검색어를 입력해주세요.");
    //   return;
    // }

    // const result = await getBooksSearch(
    //   "Keyword",
    //   {start:1,max:10},
    //   search
    // );
    
    // setBooks(result);
    // setLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input 
        className={styles.input}
        type="text" 
        placeholder="추천: 이세계 착각 헌터"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <button 
        type="submit" 
        /*disabled={loading}*/
        className={styles.button}
      >
        {/* {loading?"검색중...":"검색"} */} 검색
      </button>
    </form>
  )
}