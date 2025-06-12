// import express from 'express';
// import { addToStock,getAllStock } from '../Controllers/castingStockController.js';
// const router = express.Router();


// router.post('/', addToStock);
// router.get('/', getAllStock);




// export default router;



import express from 'express';
import {
  addToStock,
  getAllStock,
  getStockById,
  updateStock,
  deleteStock
} from '../Controllers/castingStockController.js';

const router = express.Router();

router.post('/', addToStock);           // CREATE
router.get('/', getAllStock);           // READ ALL
router.get('/:id', getStockById);       // READ BY ID
router.put('/:id', updateStock);        // UPDATE
router.delete('/:id', deleteStock);     // DELETE

export default router;
