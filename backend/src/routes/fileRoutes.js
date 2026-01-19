import express from 'express'
import { getFiles, uploadFile, deleteFile } from '../controllers/fileController.js'
import { upload } from '../middleware/upload.js'

const router = express.Router()

router.get('/files', getFiles)
router.post('/upload', upload.single('file'), uploadFile)
router.delete('/files/:filename', deleteFile)

export default router
