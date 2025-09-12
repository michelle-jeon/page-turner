import styles from "./loading.module.css"

export default function loading() {
  return(
    <main className={styles.container}>
      <div className={styles.titleSkeleton}>
        <div className={styles.grid}>
          {Array.from({length:6}).map((_, i)=>(
            <div key={i} className={styles.cardSkeleton}></div>
          ))}
        </div>
      </div>
    </main>
  )
}