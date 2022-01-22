const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is post is cool"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "good data"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "great info"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "awesome"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "this is nice"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "nice"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "good job"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;