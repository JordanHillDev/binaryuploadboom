const Comment = require("../models/Comment");

module.exports = {
    createComment: async (req, res) => {
        const comment = req.body.comment;
        const postId = req.params.postId;
        const userId = req.user._id;
        try {
            await Comment.create({
                comment: req.body.comment,
                user: userId,
                post: postId,
            });
            res.redirect(`/post/${postId}`);
        } catch (error) {
            console.log(error);
        }
    },
};
