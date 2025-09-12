"use client";

import { getBooksSearch } from "@/lib/books";
import { BookItem } from "@/types";
import { FormEvent, useState } from "react";

export default function Searchbar() {
  const [search,setSearch] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const [books,setBooks] = useState<BookItem[]>([]);

  const onSubmit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log("검색어:",search);
    setLoading(true);

    if(!search.trim()){
      alert("검색어를 입력해주세요.");
      return;
    }

    const result = await getBooksSearch(
      "Keyword",
      {start:1,max:10},
      search
    );
    
    setBooks(result);
    setLoading(false);
  }

  return (
    <form className="" onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="추천: 이세계 착각 헌터"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading?"검색중...":"검색"}
      </button>
    </form>
  )
}