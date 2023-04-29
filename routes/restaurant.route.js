const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { RestaurantModel } = require("../model/restaurant.model");
const restaurantRoute = Router();

restaurantRoute.get("/",async(req,res)=>{
    const rest = await RestaurantModel.find()
    res.status(200);
    res.send(rest);
})

restaurantRoute.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const rest = await RestaurantModel.findOne({"_id":id});
    res.status(200);
    res.send(rest);
})

restaurantRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const rest = new RestaurantModel(payload);
        await rest.save();
        res.status(201);
        res.send(rest);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

restaurantRoute.get("/:id/menu",async(req,res)=>{
    const id = req.params.id;
    const rest = await RestaurantModel.findOne({"_id":id});
    res.status(200);
    res.send(rest.menu);
})

restaurantRoute.post("/:id/menu",async(req,res)=>{
    try{
        const payload=req.body;
        const id = req.params.id;
        const rest = await RestaurantModel.findOne({"_id":id});
        rest.menu.push(payload);
        await rest.save()
        res.status(200);
        res.send(rest.menu)
    }
    catch(err){
        res.send({msg:"error"})
    }
    
})

// restaurantRoute.patch("/:id/menu",async(req,res)=>{
//     const payload = req.body;
//     const id = req.params.id;
//     const rest = await RestaurantModel.findOne({"_id":id});
//     console.log(rest);
//     try{
//         await RestaurantModel.findByIdAndUpdate({"_id":id},payload);
//         res.status(204)
//         res.send("Updated the flight")
//     }
//     catch(err){
//         console.log(err);
//         res.status(404);
//         res.send({error:"flight doesn't exsist"})
//     }
// })

restaurantRoute.delete("/:id/menu/:mid",async(req,res)=>{
    try{
        const id = req.params.id;
        const menuid = req.params.mid;
        const rest = await RestaurantModel.findOne({"_id":id});
        // const menu = await rest.menu.findOne({"_id":menuid});
        // res.send(rest.menu)
        let arr = [];
        for(let i=0;i<rest.menu.length;i++){
            if(rest.menu[i]._id==menuid){
                continue;
            }
            else{
                arr.push(rest.menu[i]);
            }
        }
        console.log(arr);
        rest.menu=arr;
        await rest.save();
        res.send(rest);
 
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.send({error:"menu doesn't exsist"})
    }
})

module.exports={
    restaurantRoute
}