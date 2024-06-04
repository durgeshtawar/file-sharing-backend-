import mongoose from "mongoose"
import dotnev from "dotenv";

dotnev.config();



const DBConnection = async ()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true} )
      console.log("DataBase Connected successfully");
    } catch(error){
        console.error("Error while connecting with database", error.message);
    }
}

export default DBConnection;