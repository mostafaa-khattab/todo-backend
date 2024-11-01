import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'toDo name is required'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'toDo name is required'],
        trim: true
    },

}, {
    timestamps: true
});

const toDoModel = model('toDo', toDoSchema)

export default toDoModel