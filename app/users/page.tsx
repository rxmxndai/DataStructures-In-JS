import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from  "next/link"


export const metadata: Metadata = {
    title: "Users Page"
}

const page = async () => {

    const usersData: Promise <User[]> = getAllUsers()
    const users = await usersData
    console.log("Check!");
    
    const content = (
        <section>
            <h2>
                <Link href="/"> Back to Home </Link>
            </h2>
            <br />
            { users.map(user => {
                return (
                    <section key={user.id}>
                        <p >
                            <Link href={`/users/${user.id}`}> {user.name} </Link>
                        </p>
                        <br/>
                    </section>
                )
            })  }
        </section>
    )

  return (
    content
  )
}

export default page