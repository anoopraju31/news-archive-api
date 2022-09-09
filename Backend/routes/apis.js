import express from "express"

import { getData, putData} from '../controllers/apisController.js'

const router = express.Router()

router.get('/', getData)
router.post('/', putData)

export default router