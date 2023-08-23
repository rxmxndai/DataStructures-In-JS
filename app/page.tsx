import Link from "next/link"
import styles from "./page.module.css"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Next Home Page",
  description: 'This page contains home components!',
}

export default function Home() {
  return (
    <main >
      <h1> Hello World!</h1>
      <Link href="/about" > Go to About Page </Link>
    </main>
  )
}
