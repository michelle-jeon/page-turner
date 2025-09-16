import Link from "next/link";
import s from "./Header.module.css"

export default function Header(){
  return(
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        📚뭐 읽지?
      </Link>
    </header>
  )
}