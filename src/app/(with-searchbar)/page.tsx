// *************** 인덱스
export default async function Page(){
  // 필수값 : TTBKey, QueryType 
  const response = await fetch(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.ALADIN_TTBKEY}&QueryType=Bestseller`);
  const bestSeller = await response.json();


  return(
    <div>
      <h3>검색</h3>
      <section>

      </section>
      <h3>다니엘이 추천하는 책</h3>
      <section>
        {bestSeller}
      </section>
    </div>
  )
}