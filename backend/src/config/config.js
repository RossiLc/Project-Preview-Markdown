import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const config = {
  port: process.env.PORT || 3000,
  uploadsDir: path.join(__dirname, '../../uploads'),
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedExtensions: ['.md', '.markdown'],
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}
