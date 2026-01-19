import multer from 'multer'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size exceeds limit (max 10MB)'
      })
    }
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }

  console.error('Server error:', err)
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  })
}
