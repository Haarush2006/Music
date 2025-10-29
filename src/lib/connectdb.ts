import mongoose from "mongoose";
interface connectionType  {
    isConnected? :Number
}

const connection: connectionType = {} 

export default async function connectdb(): Promise<void> {
    
    if(connection.isConnected){
        console.log("Already connected");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URL!)

        connection.isConnected=db.connections[0].readyState

    } catch (error) {
        console.error(error)
        console.log("Error while connecting to db")
        process.exit(1)
    }

}