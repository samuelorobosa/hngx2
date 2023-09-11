import express from "express";
import * as personController  from '../controllers/person.controller.js';

export const personRouter = express.Router();


// Accept only a name value in the body and returns the id, name
personRouter.post('/', personController.createPersonResource);

//Accepts a user id in the URI and returns the id, name
personRouter.get('/:user_id', personController.getPersonResource);

//Accepts a user id in the URI and name in the body and returns the id, name
personRouter.put('/:user_id', personController.updatePersonResource);

//Accepts a user id in the URI and name in the body and returns an ok response
personRouter.delete('/:user_id', personController.deletePersonResource);