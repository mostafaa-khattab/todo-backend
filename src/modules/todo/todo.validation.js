import Joi from 'joi';

export const createtodoValidation = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'ToDo name cannot be empty',
    }),
    content: Joi.string().trim().required().messages({
        'string.empty': 'ToDo content cannot be empty',
    })
});

export const deletetodoValidation = Joi.object({
    todoId: Joi.string().hex().length(24).required().messages({
        'string.length': 'ToDo ID must be a 24-character hexadecimal string',
    })
});
