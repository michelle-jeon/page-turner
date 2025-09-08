'use client'

import { useEffect, useState } from "react"

export default function Page(){
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/ping').then(r => r.json()).then(setData);
  },[]);

  return <pre className="p-6">{JSON.stringify(data,null,2)}</pre>
}