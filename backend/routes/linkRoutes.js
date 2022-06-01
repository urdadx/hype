import express from "express";
import { protect, admin } from '../middleware/authMiddleware.js'
import Multer from 'multer'

const router = express.Router()

import { createLink, userLinks } from "../controllers/linkController.js";


const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb
    },
  });



router.post('/new', protect, createLink)
router.get('/all', protect, userLinks)


export default router
