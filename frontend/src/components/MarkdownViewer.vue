<template>
  <div class="content-container">
    <main class="markdown-body main-content">
      <div v-if="loading" class="loading">正在加载文档...</div>
      <div v-else-if="error" class="error-msg">
        <h2>无法加载文档内容</h2>
        <p><strong>错误信息:</strong> {{ error }}</p>
      </div>
      <div v-else-if="!content" class="loading">
        请点击"文件管理"上传或选择一个 Markdown 文件...
      </div>
      <div v-else v-html="content"></div>
    </main>
  </div>
</template>

<script setup>
import { watch, nextTick } from 'vue'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  }
})

// Use global mermaid from script tag in index.html
window.mermaid.initialize({ startOnLoad: false, theme: 'default' })

watch(() => props.content, async () => {
  if (props.content) {
    await nextTick()
    const mermaidElements = document.querySelectorAll('.mermaid')
    if (mermaidElements.length > 0) {
      window.mermaid.run({ nodes: mermaidElements })
    }
  }
})
</script>
