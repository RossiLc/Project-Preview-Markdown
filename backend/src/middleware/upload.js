import multer from 'multer'
import path from 'path'
import { config } from '../config/config.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.uploadsDir)
  },
  filename: function (req, file, cb) {
    // Handle UTF-8 filename encoding
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8')
    const ext = path.extname(originalName)
    const baseName = path.basename(originalName, ext)
    const finalName = ext.toLowerCase() === '.md' || ext.toLowerCase() === '.markdown'
      ? originalName
      : `${baseName}.md`
    cb(null, finalName)
  }
})

export const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase()
    if (!config.allowedExtensions.includes(ext)) {
      return cb(new Error('Only Markdown files (.md, .markdown) are allowed'))
    }
    cb(null, true)
  },
  limits: {
    fileSize: config.maxFileSize
  }
})
