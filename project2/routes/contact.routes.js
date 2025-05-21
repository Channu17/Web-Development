import express from "express";
import { createContact, deleteContact, getContact, getContactById, updateContact } from "../controllers/contact.controller.js";

const contactRouter = express.Router();

contactRouter.get("/", getContact);

contactRouter.get("/:id", getContactById); 

contactRouter.post("/", createContact);

contactRouter.put("/:id", updateContact);

contactRouter.delete("/:id", deleteContact);


export default contactRouter;
