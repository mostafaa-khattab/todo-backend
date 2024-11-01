import { Router } from "express";
import * as validators from './todo.validation.js';
import { validation } from "../../middleware/validation.js";
import * as todoController from './controller/todo.js'


const router = Router()

router.get('/', todoController.getAllTodo)


router.post('/',
    validation(validators.createtodoValidation),
    todoController.createTodo)

router.delete('/:todoId',
    validation(validators.deletetodoValidation),
    todoController.deletetodo)


export default router