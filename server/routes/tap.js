import { Router } from "express";
import { getPoints } from '../controllers/f_server.js'
const router = Router()

router.get('/api/users/:id/points', getPoints)

export default router