// Get all contacts


export const getContact = (req, res)=>{
    res.status(200).json({message: "Get all contacts"});
};


export const createContact = (req, res)=>{
    res.status(200).json({message: "Create contact"});
};

export const getContactById = (req, res)=>{
    res.status(200).json({message:`got the contact ${req.params.id}`});
};

export const deleteContact = (req, res) =>{
    res.status(200).json({message:`Delete the contact ${req.params.id}`});
};

export const updateContact = (req, res) =>{
    res.status(200).json({message:`Updated the contact ${req.params.id}`});
};