import { HomeLayout } from "./home"
import { PostLayout } from "./post"

function Custom404() {
    return <h1>404 - Page Not Found</h1>
}

const Layouts = {
    home: HomeLayout,
    post: PostLayout
}

function getLayout(type) {
    const layout = Layouts[type]
    if(layout) {
        return layout
    }

    return Custom404
}

export { getLayout }
