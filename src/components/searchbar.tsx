"use client";

import { useState } from "react";

export default function Searchbar() {
  const [search,setSearch] = useState("")

  const onSubmit = () =>{
    
  }

  return (
    <div className="">
      <input 
        type="text" 
        placeholder="추천: 이세계 착각 헌터"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  )
}