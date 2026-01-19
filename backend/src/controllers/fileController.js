import fs from 'fs/promises'
import fsSync from 'fs'
import path from 'path'
import { config } from '../config/config.js'

export const getFiles = async (req, res, next) => {
  try {
    const files = await fs.readdir(config.uploadsDir)
    const mdFiles = files
      .filter(file => file.endsWith('.md') || file.endsWith('.markdown'))
      .map(file => ({
        name: file,
        path: `markdown/${file}`
      }))
    res.json({ success: true, files: mdFiles })
  } catch (error) {
    console.error('Failed to read files:', error)
    res.status(500).json({ success: false, message: 'Failed to read file list' })
  }
}

export const uploadFile = (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' })
    }
    res.json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        name: req.file.filename,
        path: `markdown/${req.file.filename}`
      }
    })
  } catch (error) {
    console.error('File upload failed:', error)
    res.status(500).json({ success: false, message: 'File upload failed' })
  }
}

export const deleteFile = async (req, res, next) => {
  try {
    const filename = req.params.filename
    const filePath = path.join(config.uploadsDir, filename)

    // Security check: ensure file path is within uploads directory
    if (!filePath.startsWith(config.uploadsDir)) {
      return res.status(400).json({ success: false, message: 'Invalid file path' })
    }

    await fs.unlink(filePath)
    res.json({ success: true, message: 'File deleted successfully' })
  } catch (error) {
    console.error('File deletion failed:', error)
    res.status(500).json({ success: false, message: 'File deletion failed' })
  }
}
