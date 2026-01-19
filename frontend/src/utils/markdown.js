// Use global variables from script tags in index.html
export const parseMarkdown = (text) => {
  const toc = []

  const renderer = new window.marked.Renderer()

  // Handle Mermaid Code Blocks
  renderer.code = function (code, language) {
    if (language === 'mermaid') {
      return '<div class="mermaid">' + code + '</div>'
    }
    // Handle ASCII Art
    if (!language || language === 'text' || language === 'ascii') {
      return '<pre><code class="language-text">' + code + '</code></pre>'
    }
    const validLanguage = window.hljs.getLanguage(language) ? language : 'plaintext'
    const highlighted = window.hljs.highlight(code, { language: validLanguage }).value
    return `<pre><code class="hljs language-${validLanguage}">${highlighted}</code></pre>`
  }

  // Handle Headers for TOC
  renderer.heading = function (text, level) {
    const anchor = 'header-' + toc.length
    toc.push({
      anchor: anchor,
      level: level,
      text: text
    })
    return `<h${level} id="${anchor}">${text}</h${level}>`
  }

  window.marked.setOptions({
    renderer: renderer,
    langPrefix: 'hljs language-'
  })

  const html = window.marked.parse(text)

  return { html, toc }
}
