const { Schema, model, Types } = require('mongoose');

const TodoSchema = new Schema(
    {
        title: {
            required: true,
            type: String,
        },
        detail: {
            required: true,
            type: String,
        },
        userId: {
            type: Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model('Todo', TodoSchema);
