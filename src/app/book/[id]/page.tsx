import { BookItemDetail } from "@/types"

type Props = {item:BookItemDetail}

export default function Page({item}:Props){
  return(
    <div>
      <h1>도서 상세 페이지</h1>
      <div>{item.originalTitle}</div>
    </div>
  )
}