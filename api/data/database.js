import mongoose  from "mongoose"
const MONGO_URL="mongodb+srv://nodejskey:nodejskey@cluster0.hhop9mg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const connectDB=async() =>{
     await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:"blog-application"
     })
     .then((c)=>console.log(`database connected with ${c.connection.host}`))
     .catch((e)=>console.log(e));
};