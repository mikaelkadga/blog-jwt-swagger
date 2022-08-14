const {Post} = require("../database/models")

const getAllPost = async() => {
    return await Post.findAll()
}

const getWriterPost = async(id) => {
    return await Post.findAll({
        where: {
            user_id: id
        }
    })
}

const createPost = async({title, image, body, user_id}) => {
    return await Post.create({title, image, body, user_id})
}

const editPost = async({title, image, body, postId}) => {
    return await Post.update({
        title, image, body
    },
    {
        where: {
            id: postId
        },
        returning: true
    })
}

const detailPost = async (postId) => {
    return await Post.findAll({
        where: {
            id: postId
        }
    })
}

const deletePost = async (postId) => {
    return await Post.destroy({
        where: {
            id: postId
        }
    })
}

const postRepo = {
    getAllPost,
    getWriterPost,
    createPost,
    editPost,
    detailPost,
    deletePost
}

module.exports = postRepo;