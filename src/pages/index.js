import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
// import { Hero } from "../components/Hero"
// import { TutorialList } from "../components/TutorialList"
import { RecentPosts } from "../components/RecentPosts"

export default function Home(posts) {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      {/* <TutorialList /> */}
      {/* <RecentPosts /> */}
      <RecentPosts posts={posts}/>
      <Footer />
    </>
  )
}