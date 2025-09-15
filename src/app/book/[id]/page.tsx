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
    <div>
      <h3>도서 상세 페이지</h3>
      <p>{detail.title}</p>
    </div>
  )
}