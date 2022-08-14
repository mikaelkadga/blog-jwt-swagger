const postRepo = require("./post.repo")

const getAllPost = async () => {
    return await postRepo.getAllPost();
}

const getWriterPost = async (id) => {
    return await postRepo.getWriterPost(id)
}

const createPost = async ({title, image, body, user_id}) => {
    return await postRepo.createPost({title, image, body, user_id})
}

const editPost = async ({title, image, body, postId}) => {
    return await postRepo.editPost({title, image, body, postId})
}

const detailPost = async (postId) => {
    return await postRepo.detailPost(postId)
}

const deletePost = async (postId) => {
    return await postRepo.deletePost(postId)
}


const postService = {
    getAllPost,
    getWriterPost,
    createPost,
    editPost,
    detailPost,
    deletePost
}

module.exports = postService;