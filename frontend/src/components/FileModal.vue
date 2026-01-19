<template>
  <div class="modal-overlay show" @click="handleOverlayClick">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h2>文件管理</h2>
        <button class="modal-close" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Upload Section -->
        <div class="upload-section">
          <h3>上传文件</h3>
          <div
            class="upload-area"
            :class="{ dragover: isDragging }"
            @dragover.prevent="isDragging = true"
            @dragleave="isDragging = false"
            @drop.prevent="handleDrop"
          >
            <input
              ref="fileInput"
              type="file"
              accept=".md,.markdown"
              @change="handleFileSelect"
            />
            <p>拖拽文件到此处或点击上传</p>
            <button class="upload-btn" @click="$refs.fileInput.click()">
              选择文件
            </button>
          </div>
        </div>

        <!-- File List Section -->
        <div class="files-section">
          <h3>文件列表</h3>
          <ul class="file-list">
            <li v-if="loading" class="empty-state">加载中...</li>
            <li v-else-if="files.length === 0" class="empty-state">暂无文件</li>
            <li
              v-else
              v-for="file in files"
              :key="file.name"
              class="file-item"
              :class="{ active: isActive(file.path) }"
              @click="selectFile(file.path)"
            >
              <span class="file-name" :title="file.name">{{ file.name }}</span>
              <button
                class="delete-btn"
                @click.stop="deleteFile(file.name)"
              >
                删除
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { fetchFiles, uploadFile, deleteFile as deleteFileApi } from '@/api/files'

const props = defineProps({
  currentFile: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['close', 'file-selected', 'file-uploaded', 'file-deleted'])

const files = ref([])
const loading = ref(false)
const isDragging = ref(false)
const fileInput = ref(null)

const loadFiles = async () => {
  loading.value = true
  try {
    files.value = await fetchFiles()
  } catch (error) {
    console.error('Failed to load files:', error)
    alert('加载文件列表失败')
  } finally {
    loading.value = false
  }
}

const handleFileSelect = async (event) => {
  const file = event.target.files[0]
  if (file) {
    await uploadFileHandler(file)
  }
  event.target.value = ''
}

const handleDrop = async (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  if (file && (file.name.endsWith('.md') || file.name.endsWith('.markdown'))) {
    await uploadFileHandler(file)
  } else {
    alert('请上传 Markdown 文件 (.md 或 .markdown)')
  }
}

const uploadFileHandler = async (file) => {
  try {
    const result = await uploadFile(file)
    alert('文件上传成功!')
    await loadFiles()
    emit('file-uploaded', result.file)
    emit('close')
  } catch (error) {
    console.error('Upload failed:', error)
    alert('上传失败: ' + error.message)
  }
}

const selectFile = (filePath) => {
  emit('file-selected', filePath)
  emit('close')
}

const deleteFile = async (filename) => {
  if (!confirm(`确定要删除文件 "${filename}" 吗?`)) {
    return
  }

  try {
    await deleteFileApi(filename)
    alert('文件删除成功!')
    emit('file-deleted', filename)
    await loadFiles()
  } catch (error) {
    console.error('Delete failed:', error)
    alert('删除失败: ' + error.message)
  }
}

const isActive = (filePath) => {
  return props.currentFile === filePath
}

const handleOverlayClick = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    emit('close')
  }
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  loadFiles()
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>
