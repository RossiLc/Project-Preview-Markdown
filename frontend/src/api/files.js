import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const fetchFiles = async () => {
  const response = await api.get('/files')
  if (response.data.success) {
    return response.data.files
  }
  throw new Error('Failed to fetch files')
}

export const fetchMarkdown = async (filePath) => {
  const response = await axios.get(`/${filePath}`)
  return response.data
}

export const uploadFile = async (file) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  if (response.data.success) {
    return response.data
  }
  throw new Error(response.data.message || 'Upload failed')
}

export const deleteFile = async (filename) => {
  const response = await api.delete(`/files/${encodeURIComponent(filename)}`)

  if (response.data.success) {
    return response.data
  }
  throw new Error(response.data.message || 'Delete failed')
}
