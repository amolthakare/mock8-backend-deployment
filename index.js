const express = require("express");
require('dotenv').config();
const { connection } = require("./config/db");
const UserRoutes = require("./routes/user.route");
const { authenticate } = require("./middleware/autenticate.middleware");
const { restaurantRoute } = require("./routes/restaurant.route");
const { orderRoute } = require("./routes/order.route");

const app = express();
app.use(express.json());


// app.use("/",(err,res)=>{
//     res.send("welcome to the mock server");
// })
app.use("/api",UserRoutes);
app.use(authenticate)
app.use("/api/restaurant",restaurantRoute);
app.use("/api/order",orderRoute);



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongo");
    }
    catch(err){
        console.log("msg:",err);
    }
    console.log(`connected to port ${process.env.port} successfully`)
})
