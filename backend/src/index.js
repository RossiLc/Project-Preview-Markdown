import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { config } from './config/config.js'
import fileRoutes from './routes/fileRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Define public directory for frontend static files
const publicDir = path.join(__dirname, '../public')

// Ensure uploads directory exists
if (!fs.existsSync(config.uploadsDir)) {
  fs.mkdirSync(config.uploadsDir, { recursive: true })
}

// Middleware
app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())

// Serve uploaded markdown files
app.use('/markdown', express.static(config.uploadsDir))

// API Routes
app.use('/api', fileRoutes)

// Serve frontend static files
app.use(express.static(publicDir))

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'))
})

// Error handling middleware
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Backend server running on http://localhost:${config.port}`)
  console.log(`Uploads directory: ${config.uploadsDir}`)
})
