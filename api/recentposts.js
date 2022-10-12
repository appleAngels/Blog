import { getRecentPosts } from "../../backend/db.mjs"
import Joi from "joi"

export default function RecentPosts(req, res) {
    if(req.method !== 'POST') {
        return res.status(200).json({
            success: true,
            posts: []
        })
    } else {
        const submitSchema = Joi.object({
            count: Joi.number().integer().positive(),
        })

        const {err, value} = submitSchema.validate(req.body)
        if(err) {
            return res.status(200).json({
                success: false,
                message: err.message || '',
            })
        }

        return getRecentPosts(value.count)
        .then(function(posts) {
            res.status(200).json({
                success: true,
                posts: posts
            })
        })
        .catch(function(e) {
            console.error(e)
            res.status(200).json({
                success: false,
                posts: []
            })
        })
    }
}
