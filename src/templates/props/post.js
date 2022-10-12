import { getPostBySlug } from '../../backend/db.mjs'
import { omitBy } from '../../backend/utils.mjs'

export async function postProps({slug}) {
    
    const post = await getPostBySlug(slug)
    if(!post) {
        return {
            layout: '404'
        }
    }
    
    return {
        payload: {
            content: post.content,
            meta: {
                ...omitBy(post, 'content')
            }
        }
    }
} 
