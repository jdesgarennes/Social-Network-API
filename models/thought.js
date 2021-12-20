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
            posts: [
                {
                  type: Schema.Types.ObjectId,
                  ref: 'reaction',
                },
              ],

        },
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);
thoughtSchema

// create virtual 
.virtual('reactionCount')
.get(function () {
    return this.reactions.posts.length;
  });

  // initialize Thought model.
const Thought = ('thought',thoughtSchema);

module.exports = Thought;