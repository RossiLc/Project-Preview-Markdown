<template>
  <div class="container">
    <Sidebar
      :toc="toc"
      @open-file-modal="showFileModal = true"
    />
    <MarkdownViewer
      :content="markdownContent"
      :loading="loading"
      :error="error"
    />
    <FileModal
      v-if="showFileModal"
      :current-file="currentFile"
      @close="showFileModal = false"
      @file-selected="handleFileSelected"
      @file-uploaded="handleFileUploaded"
      @file-deleted="handleFileDeleted"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import MarkdownViewer from './components/MarkdownViewer.vue'
import FileModal from './components/FileModal.vue'
import { fetchFiles, fetchMarkdown } from './api/files'
import { parseMarkdown } from './utils/markdown'

const markdownContent = ref('')
const toc = ref([])
const loading = ref(false)
const error = ref(null)
const currentFile = ref(null)
const showFileModal = ref(false)

const loadMarkdown = async (filePath) => {
  loading.value = true
  error.value = null

  try {
    const text = await fetchMarkdown(filePath)
    const { html, toc: parsedToc } = parseMarkdown(text)
    markdownContent.value = html
    toc.value = parsedToc
    currentFile.value = filePath
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const handleFileSelected = (filePath) => {
  loadMarkdown(filePath)
}

const handleFileUploaded = (file) => {
  loadMarkdown(file.path)
}

const handleFileDeleted = (filename) => {
  if (currentFile.value && currentFile.value.endsWith(filename)) {
    currentFile.value = null
    markdownContent.value = ''
    toc.value = []
  }
}

onMounted(async () => {
  try {
    const files = await fetchFiles()
    if (files.length > 0) {
      loadMarkdown(files[0].path)
    }
  } catch (err) {
    console.error('Failed to load initial files:', err)
  }
})
</script>
