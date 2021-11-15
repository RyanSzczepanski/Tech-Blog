const { Vote } = require("../models");

module.exports = {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    },
    has_user_voted: (post_id, user_id) => {
      Vote.findOne({
        Where: {
          user_id,
          post_id,
        }
      }).then(user => {
        console.log(user);
      })
    }
  };