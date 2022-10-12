import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Hero } from "../../components/Hero"
import { TutorialList } from "../../components/TutorialList"
import { RecentPosts } from "../../components/RecentPosts"

export function HomeLayout({ posts }) {

    return (
        <>
            <Header />
            <Hero  />
            <TutorialList />
            <RecentPosts 
                posts={posts}
            />
            <Footer />
        </>
    )
}
