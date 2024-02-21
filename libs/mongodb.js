import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
       await mongoose.connect('mongodb+srv://ankit123:ankit123@cluster0.cqtqflo.mongodb.net/?retryWrites=true&w=majority')
        console.log("connected to mongoDB")
    } catch (e) {
        console.log(e)
    }
}

export default connectMongoDB