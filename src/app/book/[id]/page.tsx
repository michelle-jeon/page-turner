import { getBooksDetail } from "@/lib/books";
import { notFound } from "next/navigation";
import s from "./detail.module.css";
import { Collapsible } from "@/components/Collapsible";
import StarRating from "@/components/StarRating";

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
  
  const krw = (n?: number) => (typeof n === "number" ? n.toLocaleString("ko-KR") + "원" : undefined);
  const pubDate = detail.pubDate ? new Date(detail.pubDate) : undefined;
  const today = new Date();
  const isPreorder = pubDate ? pubDate.getTime() > today.getTime() : false;
  
  return(
    <main className={s.container}>
      <section className={s.titleBox}>
        <div className={s.coverBox}>
          <img className={s.coverImg} src={detail.cover} alt="" />
        </div>
        <div>
          <p className={s.byline}>
            {detail.author && <span className={s.author}>{detail.author}</span>}
            {detail.publisher && <>
              <span className={s.dot}>·</span>
              <span className={s.publisher}>{detail.publisher}</span>
            </>}
            {detail.pubDate && <>
              <span className={s.dot}>·</span>
              <time className={s.date} dateTime={detail.pubDate}>{detail.pubDate}</time>
            </>}
            {/* {detail.pages && <>
              <span className={s.dot}>·</span>
              <span className={s.pages}>{detail.pages}쪽</span>
            </>} */}
          </p>


          <div className={s.ratingRow}>
            <StarRating score={detail.rating?.score ?? 0} />
            <span className={s.ratingText}>
              {detail.rating?.score ?? 0} / 10
              {typeof detail.rating?.count === "number" && (
              <span className={s.count}> ({detail.rating!.count}명)</span>
            )}
            </span>
          </div>


          <div className={s.priceRow}>
            {typeof detail.price?.sales === "number" && (
            <strong className={s.sales}>{krw(detail.price?.sales)}</strong>
            )}
            {typeof detail.price?.list === "number" && detail.price?.list !== detail.price?.sales && (
            <span className={s.list}>{krw(detail.price?.list)}</span>
            )}
            {typeof detail.price?.fixedPrice === "boolean" && (
            <span className={s.fixed}>{detail.price.fixedPrice ? "정가제" : "비정가"}</span>
            )}
          </div>
        </div>
      </section>


    {/* Description */}
    {detail.description && (
      <section className={s.descSection}>
        <h2 className={s.h2}>책 소개</h2>
        <Collapsible text={detail.description} maxChars={340} />
      </section>
    )}


    {/* Meta grid */}
    <section className={s.gridSection}>
      <h2 className={s.h2}>기본 정보</h2>
      <dl className={s.metaGrid}>
        {detail.isbn13 && <><dt>ISBN13</dt><dd>{detail.isbn13}</dd></>}
        {typeof detail.itemId === "number" && <><dt>Item ID</dt><dd>{detail.itemId}</dd></>}
        {/* {typeof detail.salesPoint === "number" && <><dt>세일즈포인트</dt><dd>{detail.salesPoint.toLocaleString()}</dd></>} */}
        {detail.pages && <><dt>페이지수</dt><dd>{detail.pages} 쪽</dd></>}
        {detail.category?.path && <><dt>카테고리</dt><dd>{detail.category.path.join(" › ")}</dd></>}
        {detail.stockStatus && <><dt>재고</dt><dd>{detail.stockStatus}</dd></>}
      </dl>
    </section>
  </main>
  )
}