import express from "express";
import * as personController  from '../controllers/person.controller.js';

export const personRouter = express.Router();


personRouter.post('/', personController.createPersonResource);

personRouter.get('/:user_id', personController.getPersonResource);

personRouter.put('/:user_id', personController.updatePersonResource);

personRouter.delete('/:user_id', personController.deletePersonResource);