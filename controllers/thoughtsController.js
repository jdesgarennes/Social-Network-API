const Thought = require('../models/Thought');



module.exports = {
    getThought(req, res) {
      Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.userThought })
        .select('-__v')
        //.populate('posts')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new Thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.deleteOne(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(500).json(err));
      },
  };
  