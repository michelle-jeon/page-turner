import { getBooksDetail } from "@/lib/books";
import { notFound } from "next/navigation";

type Props = {
  params: {id: string};
}

export default async function Page({
  params,
}:{params:Promise<{id:string}>}){
  const param = await params;
  const id =  decodeURIComponent(param.id ?? "");
  if(!id) notFound();
  
  const detail = await getBooksDetail("ISBN13",id);
  console.log(detail);

  return(
    <section>
      <div className=""></div>
      <h3>{detail.title}</h3>
      <p>{detail.author}</p>
      <p>{detail.publisher} · {detail.pubDate}</p>
      <p>평점: {detail.rating?.score ?? 0} / 10</p>

    </section>
  )
}