import { getRecentPosts } from "../../backend/db.mjs"

export async function homeProps() {
    const posts = await getRecentPosts()

    return {
        payload: {
            posts,
        }
    }
}
