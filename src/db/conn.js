const mongoose=require("mongoose"); // to call connect function of mongoose

//creating a database
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/mern",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
}) 