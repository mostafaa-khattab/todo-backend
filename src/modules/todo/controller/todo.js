import toDoModel from "../../../../DB/model/todo.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

// Get all ToDos
export const getAllTodo = asyncHandler(async (req, res) => {
    try {
        const todos = await toDoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving ToDos", error });
    }
})

// Create a ToDo
export const createTodo = asyncHandler(async (req, res) => {
    try {
        const { name, content } = req.body;
        const newTodo = new toDoModel({ name, content });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Error creating ToDo", error });
    }
})

// Delete a ToDo
export const deletetodo = asyncHandler(async (req, res) => {
    try {
        const { todoId } = req.params;
        const deletedTodo = await toDoModel.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            return res.status(404).json({ message: "ToDo not found" });
        }
        res.status(200).json({ message: "ToDo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting ToDo", error });
    }
})
