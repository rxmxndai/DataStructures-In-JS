import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./component/UserPosts"
import type { Metadata } from "next"

type Params = {
    params: {
        userId: string
    }
}


export async function generateMetadata ({ params: { userId } } : Params) : Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData;
    return {
        title: user.name,
        description: `This is the page of user: ${user.name}`
    }
}

const page = async ({ params: { userId } }: Params) => {

    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPost(userId);

    // const [user, userPosts] = await Promise.all([userData,userPostsData])

    const user: User = await userData

    return (
        <>
            <h2> {user.name} </h2>
            <br />
            <Suspense fallback={<h2> Loading ... </h2>} >
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}

export default page