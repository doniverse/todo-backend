const { Schema, default: mongoose } = require("mongoose");


const todoSchema = new Schema(
    {
        user:{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title:{
            type: String,
        },
        description:{
            type: String,
        },
    },{
        timestamps: true,
    }
);

module.exports = mongoose.model('Todo', todoSchema);