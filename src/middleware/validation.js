import joi from 'joi'
import { Types } from 'mongoose'

const validateObjectId = (value, helper) => {
    // console.log({ value });
    // console.log(helper);
    return Types.ObjectId.isValid(value) ? true : helper.message('In-valid objectId')
}


export const validation = (schema) => {
    return (req, res, next) => {

        let inputsData = { ...req.body, ...req.params, ...req.query }

        // console.log(inputsData);
        // if (req.file || req.files) {
        //     inputsData.file = req.file || req.files

        // }

        const validationResult = schema.validate(inputsData, { abortEarly: false })
        if (validationResult.error) {
            return res.json({ message: `validation error:`, validationResult: validationResult.error.details })
        }

        return next()
    }
}