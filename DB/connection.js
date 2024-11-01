import mongoose from 'mongoose'

const connectDB = async () => {

    return await mongoose.connect("mongodb+srv://admin:admin@cluster0.yfj3znp.mongodb.net/todo")
        .then(res => console.log(`DB Connected successfully on .........`))
        .catch(err => console.log(` Fail to connect  DB.........${err} `))
}



export default connectDB;