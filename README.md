# Markdown 在线预览工具

一个支持文件上传、在线预览 Markdown 文件的 Web 应用，使用 Node.js 开发，支持 Docker 部署。

## 功能特性

- **Markdown 渲染**：支持 GitHub 风格的 Markdown 渲染
- **代码高亮**：使用 Highlight.js 进行代码语法高亮
- **Mermaid 图表**：支持 Mermaid 流程图、时序图等
- **文件上传**：支持拖拽上传或点击上传 Markdown 文件
- **文件管理**：查看、切换、删除已上传的文件
- **自动目录**：自动生成文档目录，支持点击跳转
- **响应式设计**：支持移动端和桌面端访问

## 项目结构

```
.
├── server.js           # Node.js 后端服务器
├── package.json        # 项目依赖配置
├── Dockerfile          # Docker 镜像构建文件
├── .dockerignore       # Docker 构建忽略文件
├── index.html          # 前端页面
├── resource/           # 前端资源文件
│   ├── marked.min.js
│   ├── highlight.min.js
│   └── mermaid.min.js
└── markdown/           # Markdown 文件存储目录
```

## 本地开发

### 前置要求

- Node.js 16.0 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

或使用 nodemon 自动重启：

```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动。

## Docker 部署

### 方式一：使用 Docker

#### 1. 构建 Docker 镜像

```bash
docker build -t markdown-preview .
```

#### 2. 运行容器

```bash
docker run -d -p 3000:3000 -v $(pwd)/markdown:/app/markdown --name markdown-preview markdown-preview
```

参数说明：
- `-d`：后台运行
- `-p 3000:3000`：映射端口，可以改为 `-p 8080:3000` 使用其他端口
- `-v $(pwd)/markdown:/app/markdown`：挂载 markdown 目录，持久化存储上传的文件
- `--name markdown-preview`：容器名称

#### 3. 访问应用

在浏览器中打开 `http://localhost:3000`

#### 4. 停止和删除容器

```bash
docker stop markdown-preview
docker rm markdown-preview
```

### 方式二：使用 Docker Compose（推荐）

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'

services:
  markdown-preview:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./markdown:/app/markdown
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PORT=3000
```

启动服务：

```bash
docker-compose up -d
```

停止服务：

```bash
docker-compose down
```

## 使用说明

### 上传文件

1. 点击侧边栏的"选择文件"按钮选择 Markdown 文件
2. 或直接拖拽 `.md` 或 `.markdown` 文件到上传区域

### 查看文件

- 上传成功后，文件会自动在右侧预览
- 点击"文件列表"中的任意文件名即可切换预览

### 删除文件

- 鼠标悬停在文件列表中的文件上
- 点击右侧出现的"删除"按钮

### 浏览目录

- 左侧"目录"区域会自动生成当前文档的标题结构
- 点击目录项可快速跳转到对应章节

## API 接口

### 获取文件列表

```
GET /api/files
```

响应：
```json
{
  "success": true,
  "files": [
    {
      "name": "example.md",
      "path": "markdown/example.md"
    }
  ]
}
```

### 上传文件

```
POST /api/upload
Content-Type: multipart/form-data
```

请求体：
- `file`: Markdown 文件（.md 或 .markdown）

响应：
```json
{
  "success": true,
  "message": "文件上传成功",
  "file": {
    "name": "example.md",
    "path": "markdown/example.md"
  }
}
```

### 删除文件

```
DELETE /api/files/:filename
```

响应：
```json
{
  "success": true,
  "message": "文件删除成功"
}
```

## 环境变量

- `PORT`：服务器端口，默认 3000
- `NODE_ENV`：运行环境，生产环境设置为 `production`

## 技术栈

- **后端**：Node.js + Express
- **文件上传**：Multer
- **前端**：原生 HTML/CSS/JavaScript
- **Markdown 渲染**：Marked.js
- **代码高亮**：Highlight.js
- **图表渲染**：Mermaid.js
- **样式**：GitHub Markdown CSS

## 限制

- 单个文件大小限制：10MB
- 仅支持 Markdown 文件（.md, .markdown）

## License

MIT
