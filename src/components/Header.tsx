import Link from "next/link";
import styles from "./Header.module.css"

export default function Header(){
  return(
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        📚뭐 읽지?
      </Link>
    </header>
  )
}