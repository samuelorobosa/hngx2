import {
    createPersonModel,
    deletePersonModel,
    getPersonModel,
    updatePersonModel
} from "../models/person/person.model.js";
import consoleLog from "../utils/consoleLog.js";



export async function createPersonResource(req, res){
    try{
        const __personDetails = req.body;
        if (!__personDetails['name']){
            return res.status(400).json({error: 'Name not passed'})
        }
        const __modelResponse = await createPersonModel(__personDetails);
        return res.status(200).json(__modelResponse);
    } catch (error){
        consoleLog(`Error creating person: ${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

export async function getPersonResource(req, res){
    try {
        const userID = req.params.user_id;
        if (!userID) return res.status(400).json({ error: 'User ID not passed in' });

        const modelResponse = await getPersonModel(userID);
        if (!modelResponse) return res.status(404).json({ error: 'User not found' });

        return res.status(200).json(modelResponse);
    } catch (error) {
        consoleLog(`Error fetching person: ${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export async function updatePersonResource(req, res){
    try{
        const userID = req.params.user_id;
        const __personDetails = req.body;

        if (!userID) return res.status(400).json({ error: 'User ID not passed in' });
        if (!__personDetails['name']) return res.status(400).json({ error: 'Name not passed in' });

        const __modelResponse = await updatePersonModel(userID, __personDetails);
        if (!__modelResponse) return res.status(500).json({ error: 'User not updated' });

        return res.status(200).json(__modelResponse);
    } catch (e){
        consoleLog(`Error updating resource: ${e}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export async function deletePersonResource(req, res){
    try{
        const __userID = req.params.user_id;
        if (!__userID) return res.status(400).json({ error: 'User ID not passed in' });

        const __modelResponse = await deletePersonModel(__userID);
        if (!__modelResponse) return res.status(500).json({ error: 'User not deleted' });

        return res.status(200).json({message: 'User successfully deleted'});
    } catch (e) {
        consoleLog(`Error deleting resource: ${e}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
}