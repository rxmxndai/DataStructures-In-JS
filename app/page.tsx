import Link from "next/link"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Next Home Page",
  description: 'This page contains home components!',
}

export default function Home() {
  return (
    <main >
      <h1> Home Page </h1>
      <p>
      <Link href="/users" > Users </Link>
      </p>
      <p>
      <Link href="/about" > About </Link>
      </p>
    </main>
  )
}
