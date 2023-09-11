import people from './person.mongo.js';
import consoleLog from "../../utils/consoleLog.js";

export async function createPersonModel(data){
    try{
        return await people.create({
            name: data['name']
        });
    } catch (e){
        consoleLog(`Could not create person ${e}`)
        throw e;
    }
}

export async function getPersonModel(id) {
    try {
        return await people.findById(id);
    } catch (e) {
        console.log(`Could not fetch person ${e}`);
        throw e;
    }
}

export async function updatePersonModel(id, data){
    try{
        return await people.findByIdAndUpdate(id, data, { new: true });
    } catch (e){
        console.log(`Could not update resource for given person ${e}`);
        throw e;
    }
}

export async function deletePersonModel(id){
    try{
        return await people.findByIdAndDelete(id);
    } catch (e){
        console.log(`Could not delete resource for given person ${e}`);
        throw e;
    }
}