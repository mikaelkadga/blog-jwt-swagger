const postService = require("./post.service")

const getAllPost = async (req, res) => {
    try {
        const allPost = await postService.getAllPost()
        return res.json(allPost)
    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
}

const getWriterPost = async (req, res) => {
    const { writer } = req.query;
    const authUser = req.auth;

    if(authUser.id == writer) {
        // return res.send(`hi ${authUser.email}, you can get your posts`);
        const writerPost = await postService.getWriterPost(writer)
        return res.json(writerPost)
    }

    return res.send(`access denied`);
}

const createPost = async (req, res) => {
    const { writer } = req.query;
    const { title, image, body } = req.body;
    const authUser = req.auth;

    if(authUser.id == writer) {
        const createdPost = await postService.createPost({title, image, body, user_id: writer})
        return res.json(createdPost)
    }

    return res.send("access denied");
}

const editPost = async (req, res) => {
    const { postId } = req.params;
    const { writer } = req.query;
    const { title, image, body } = req.body;
    const authUser = req.auth;

    if(authUser.id == writer) {
        const editedPost = await postService.editPost({title, image, body, postId})
        return res.json(editedPost)
    }

    return res.send("access denied");

}

const detailPost = async(req, res) => {
    const { postId } = req.params;
    const detailPost = await postService.detailPost(postId)
    return res.json(detailPost)
}

const deletePost = async(req, res) => {
    const { postId } = req.params;
    const { writer } = req.query;
    const authUser = req.auth;

    if(authUser.id == writer) {
        const deletedPost = await postService.deletePost(postId)
        return res.json({
            postId,
            status: "deleted"
        })
    }

    return res.send("access denied");


}

const postController = {
    getAllPost,
    getWriterPost,
    createPost, 
    editPost,
    detailPost,
    deletePost
}

module.exports = postController;