import connectDB from '../DB/connection.js'
import todoRouter from './modules/todo/todo.router.js'
import { globalErrorHandler } from './utils/errorHandling.js'

const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    // appear image path

    //Setup API Routing 

    app.use(`/todo`, todoRouter)


    app.get('/', (req, res, next) => {
        return res.json({ message: "welcome to to-Do List" })
    })

    app.all('*', (req, res, next) => {
        return next(new Error(`invalid url can't access this endPoint Plz check url  or  method ${req.originalUrl}`, { cause: 404 }))

    })

    app.use(globalErrorHandler)
    connectDB()

}



export default initApp