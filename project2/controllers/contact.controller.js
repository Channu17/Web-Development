// Get all contacts
import asyncHandler from "express-async-handler";
import Contact from "../models/contact.model.js";


export const getContact =asyncHandler(async (req, res)=>{
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});


export const createContact =asyncHandler(async (req, res)=>{
    console.log("the body of the request", req.body);
    const {name, email, phone}  = req.body;
    if(!name || !email || !phone){
        const error = new Error("all fields are mandotory");
        res.status(400);
        throw error;
    }
    const contacts = await Contact.create({
        name,
        email, 
        phone,
        user_id:req.user.id,
    });
    res.status(200).json({message: "Create contact", data: contacts});
});

export const getContactById = asyncHandler(async(req, res)=>{
    const contacts = await Contact.findById(req.params.id)
    res.status(200).json({data:contacts});
});

export const deleteContact =asyncHandler(async (req, res) =>{
    const contact  = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() != req.user.id){
        res.status(403);
        throw new Error("User dont have permission to Delete this contact")
    }
    await contact.deleteOne();
    res.status(200).json({data:contact});
});

export const updateContact =asyncHandler(async(req, res) =>{
    const contact  = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() != req.user.id){
        res.status(403);
        throw new Error("User dont have permission to upadte  this contact")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({data : updatedContact});
});