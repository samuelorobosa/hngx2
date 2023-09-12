import people from './person.mongo.js';
import consoleLog from "../../utils/consoleLog.js";
import mongoose from "mongoose";

export async function createPersonModel(data){
    try{
        return await people.create({
            name: data['name']
        });
    } catch (error){
        consoleLog(`Could not create person: ${error}`);
        throw new Error('Failed to create person');
    }
}

export async function getPersonModel(id) {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const user = await people.findById(id);

        if (!user) return null;
        return user;
    } catch (error) {
        consoleLog(`Could not fetch person: ${error}`);
        throw new Error('Failed to fetch person');
    }
}

export async function updatePersonModel(id, data){
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const updatedPerson = await people.findByIdAndUpdate(id, data, { new: true });

        if (!updatedPerson) {
            return null;
        }

        return updatedPerson;

    } catch (e){
        consoleLog(`Could not update resource for given person: ${e}`);
        throw new Error('Failed to update the given resource');
    }
}

export async function deletePersonModel(id){
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const deletedPerson = await people.findByIdAndDelete(id);

        if (!deletedPerson) {
            return null;
        }

        return deletedPerson;
    } catch (e){
        console.log(`Could not delete resource for given person ${e}`);
        throw new Error(`Failed to delete resource`);
    }
}