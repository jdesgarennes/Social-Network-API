const { Schema, model } = require('mongoose');


const thoughtSchema = new (

    {
        thoughtText: {
          type: String,
          minLength: 1,
          maxLength: 280,
          required: true
        },
        createdAt:{
            type:Date,
            default: Date.now
        },
        username:{
            type: String,
            required: true
        },
        reactions:{

        },
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }


);

// reactionCount

const Thought = ('though',thoughtSchema);

module.exports = Thought;