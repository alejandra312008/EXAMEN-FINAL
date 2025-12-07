import express from 'express';
import { PartidoPoliticoController } from '../controllers/PartidoPoliticoController.js';

/**
 * Rutas RESTful para PartidoPolitico
 */
export const createPartidoPoliticoRoutes = (controller) => {
  const router = express.Router();

  // CRUDL Routes
  router.post('/', controller.create);           // Create
  router.get('/', controller.list);              // List
  router.get('/:id', controller.getById);        // Read
  router.put('/:id', controller.update);         // Update
  router.delete('/:id', controller.delete);      // Delete

  return router;
};



