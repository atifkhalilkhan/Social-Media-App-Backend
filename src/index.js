import dotenv from "dotenv";
dotenv.config();   // sabse pehle

import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running on port, ${process.env.PORT || 8000}`);
   })
}).catch((error)=>{
      console.log("Error Connecting to MongoDB",error);
});
console.log(process.env.MONGODB_URI);
