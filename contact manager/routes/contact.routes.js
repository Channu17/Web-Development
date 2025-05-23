import express from "express";
import { createContact, deleteContact, getContact, getContactById, updateContact } from "../controllers/contact.controller.js";
import validateToken from "../middlewares/auth.middleware.js";
const contactRouter = express.Router();

contactRouter.get("/", validateToken, getContact);

contactRouter.get("/:id",validateToken, getContactById); 

contactRouter.post("/",validateToken, createContact);

contactRouter.put("/:id", validateToken, updateContact);

contactRouter.delete("/:id",validateToken, deleteContact);


export default contactRouter;
