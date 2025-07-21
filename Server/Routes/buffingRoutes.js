import express from 'express';
import { createBuffing,getBuffing,updateBuffing,deleteBuffing, getBuffingById} from '../Controllers/buffingController.js';

const router = express.Router();

router.post("/",createBuffing);
router.get("/",getBuffing);
router.put("/:id",updateBuffing);
router.delete("/:id",deleteBuffing);
router.get('/:id', getBuffingById);

export default router
