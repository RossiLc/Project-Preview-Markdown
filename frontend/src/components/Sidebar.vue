<template>
  <nav class="sidebar">
    <button class="file-manage-btn" @click="$emit('open-file-modal')">
      <span>📁</span>
      <span>文件管理</span>
    </button>

    <div class="toc-section">
      <h3>目录</h3>
      <div v-if="toc.length === 0" class="empty-toc">无目录</div>
      <ul v-else>
        <li v-for="item in filteredToc" :key="item.anchor">
          <a
            :href="`#${item.anchor}`"
            :style="{ paddingLeft: `${(item.level - minLevel) * 20}px` }"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  toc: {
    type: Array,
    default: () => []
  }
})

defineEmits(['open-file-modal'])

const minLevel = computed(() => {
  if (props.toc.length === 0) return 1
  return Math.min(...props.toc.map(t => t.level))
})

const filteredToc = computed(() => {
  return props.toc.filter(item => {
    const relativeLevel = item.level - minLevel.value + 1
    return relativeLevel <= 3
  })
})
</script>
