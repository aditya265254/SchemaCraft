import mongoose from 'mongoose'


const connectDb = async (): Promise<void>  => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`Mongodb connected: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(`Mongodb connection error`, error)
        process.exit(1)
    }
}

export default connectDb;