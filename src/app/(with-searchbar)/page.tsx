import Searchbar from "@/components/searchbar";

// *************** 인덱스
export default async function Page(){
  // 필수값 : TTBKey, QueryType 
  const response = await fetch(`https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.ALADIN_TTBKEY}&QueryType=BestSeller&MaxResults=10&start=1&Output=js&Version=20131101&SearchTarget=Book`);
  // const response = await fetch(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.ALADIN_TTBKEY}&Query=검색어&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`)
  const bestSeller = await response.json();
  return(
    <div>
      <h3>검색</h3>
      <section>
        <Searchbar/>
      </section>
      <h3>다니엘이 추천하는 책</h3>
      <section>
        {JSON.stringify(bestSeller)}

      </section>
    </div>
  )
}