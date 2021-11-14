const router = require("express").Router();

router.get("/", (req, res) => {
    res.render('homepage', {
        // posts,
        // loggedIn: req.session.loggedIn
      });
});

module.exports = router;