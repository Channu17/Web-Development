// Get all contacts
import asyncHandler from "express-async-handler"

export const getContact =asyncHandler(async (req, res)=>{
    res.status(200).json({message: "Get all contacts"});
});


export const createContact =asyncHandler(async (req, res)=>{
    console.log("the body of the request", req.body);
    const {name, email, phone}  = req.body;
    if(!name || !email || !phone){
        const error = new Error("all fields are mandotory");
        res.status(400);
        throw error;
    }
    res.status(200).json({message: "Create contact"});
});

export const getContactById = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`got the contact ${req.params.id}`});
});

export const deleteContact =asyncHandler(async (req, res) =>{
    res.status(200).json({message:`Delete the contact ${req.params.id}`});
});

export const updateContact =asyncHandler(async(req, res) =>{
    res.status(200).json({message:`Updated the contact ${req.params.id}`});
});