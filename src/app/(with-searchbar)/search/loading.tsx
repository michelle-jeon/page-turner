import s from "./loading.module.css"

export default function loading() {
  return(
    <main className={s.container}>
      <div className={s.titleSkeleton}>
        <div className={s.grid}>
          {Array.from({length:6}).map((_, i)=>(
            <div key={i} className={s.cardSkeleton}></div>
          ))}
        </div>
      </div>
    </main>
  )
}