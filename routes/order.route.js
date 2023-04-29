const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { OrderModel } = require("../model/order.model");
const { RestaurantModel } = require("../model/restaurant.model");
const orderRoute = Router();

orderRoute.get("/",async(req,res)=>{
    const order = await OrderModel.find();
    res.status(200);
    res.send(order);
})
orderRoute.post("/",async(req,res)=>{
    try{
        const payload = req.body;
        // const rest = await RestaurantModel.findById({})
        res.send(payload);
    }
    catch{

    }
})



module.exports={
    orderRoute
}