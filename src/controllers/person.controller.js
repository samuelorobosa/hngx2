import {
    createPersonModel,
    deletePersonModel,
    getPersonModel,
    updatePersonModel
} from "../models/person/person.model.js";

//TODO: Handle all errors before sending data to db
//TODO: Configure your success and error structure
export async function createPersonResource(req, res){
    const __personDetails = req.body;
    const __modelResponse = await createPersonModel(__personDetails);
    return res.status(200).json(__modelResponse);
}

export async function getPersonResource(req, res){
    const __userID = req.params.user_id;
    const __modelResponse = await getPersonModel(__userID);
    return res.status(200).json(__modelResponse);
}

export async function updatePersonResource(req, res){
    const __userID = req.params.user_id;
    const __name = req.body;
    const __modelResponse = await updatePersonModel(__userID, __name)
    return res.status(200).json(__modelResponse);
}

export async function deletePersonResource(req, res){
    const __userID = req.params.user_id;
    const __modelResponse = await deletePersonModel(__userID);
    return res.status(200).json(__modelResponse);
}