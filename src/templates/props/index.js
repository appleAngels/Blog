import { homeProps } from "./home"
import { postProps } from "./post"

const Funs = {
    home: homeProps,
    post: postProps,
}

async function getProps(type, ...args) {
    let fun = Funs[type]
    if (!Funs[type]) {
        return () => ({})
    }

    const props = await fun(...args)
    return {
        layout: type,
        ...props
    }
}

export { getProps }
