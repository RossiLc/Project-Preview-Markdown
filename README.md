# Markdown 在线预览工具

一个基于 Vue 3 + Express 的 Markdown 在线预览工具，支持文件上传、预览和管理。

## 项目结构

```
Project-Preview-Markdown/
├── frontend/                 # Vue 3 前端项目
│   ├── src/
│   │   ├── components/      # Vue 组件
│   │   │   ├── Sidebar.vue
│   │   │   ├── MarkdownViewer.vue
│   │   │   └── FileModal.vue
│   │   ├── api/            # API 接口
│   │   │   └── files.js
│   │   ├── utils/          # 工具函数
│   │   │   └── markdown.js
│   │   ├── assets/         # 静态资源
│   │   │   └── styles.css
│   │   ├── App.vue         # 根组件
│   │   └── main.js         # 入口文件
│   ├── public/             # 公共资源
│   │   └── resource/       # JavaScript 库文件
│   │       ├── marked.min.js
│   │       ├── highlight.min.js
│   │       └── mermaid.min.js
│   ├── index.html          # HTML 模板
│   ├── vite.config.js      # Vite 配置
│   └── package.json
│
├── backend/                 # Express 后端项目
│   ├── src/
│   │   ├── routes/         # 路由
│   │   │   └── fileRoutes.js
│   │   ├── controllers/    # 控制器
│   │   │   └── fileController.js
│   │   ├── middleware/     # 中间件
│   │   │   ├── upload.js
│   │   │   └── errorHandler.js
│   │   ├── config/         # 配置
│   │   │   └── config.js
│   │   └── index.js        # 入口文件
│   ├── public/             # 前端构建产物（由前端构建生成）
│   ├── uploads/            # 上传文件目录
│   └── package.json
│
├── deploy/                  # 部署配置
│   └── docker/             # Docker 配置文件
│       ├── backend.Dockerfile
│       └── docker-compose.yml
│
└── README.md               # 项目文档
```

## 功能特性

- ✅ Markdown 文件上传
- ✅ 实时预览 Markdown 内容
- ✅ 支持代码高亮（Highlight.js）
- ✅ 支持 Mermaid 图表
- ✅ 自动生成目录（TOC）
- ✅ 文件管理（上传、删除、切换）
- ✅ 响应式设计
- ✅ Docker 部署支持

## 技术栈

### 前端
- Vue 3 - 渐进式 JavaScript 框架
- Vite - 下一代前端构建工具
- Axios - HTTP 客户端
- Marked - Markdown 解析器（本地资源文件）
- Highlight.js - 代码高亮（本地资源文件）
- Mermaid - 图表渲染（本地资源文件）

注：前端使用本地 JavaScript 库文件（位于 `frontend/public/resource/`），通过 script 标签引入，无需 npm 安装。

### 后端
- Express - Node.js Web 框架
- Multer - 文件上传中间件
- CORS - 跨域资源共享

## 开发环境运行

### 前置要求
- Node.js >= 16.0.0
- npm 或 yarn

### 1. 安装依赖

```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

### 2. 启动开发服务器

```bash
# 启动后端服务器（端口 3000）
cd backend
npm run dev

# 在新终端启动前端开发服务器（端口 5173）
cd frontend
npm run dev
```

### 3. 访问应用

打开浏览器访问：http://localhost:5173

## 生产环境部署

### 1. 构建前端

```bash
cd frontend
npm run build
```

构建产物将自动生成在 `backend/public/` 目录。

### 2. 启动后端服务

```bash
cd backend
npm start
```

后端服务将同时提供：
- 前端静态文件（通过 `/` 路由）
- API 接口（通过 `/api` 路由）
- Markdown 文件（通过 `/markdown` 路由）

访问：http://localhost:3000

## Docker 部署

Docker 部署采用单容器架构，后端容器同时提供前端静态文件和 API 服务。

### 使用 Docker Compose（推荐）

```bash
# 进入 Docker 配置目录
cd deploy/docker

# 构建并启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

访问：http://localhost

### 单独构建镜像

```bash
# 从项目根目录构建镜像
docker build -f deploy/docker/backend.Dockerfile -t markdown-preview .

# 运行容器
docker run -d -p 80:3000 -v $(pwd)/backend/uploads:/app/uploads markdown-preview
```

访问：http://localhost

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

### 获取 Markdown 文件内容
```
GET /markdown/:filename
```

## 环境变量

### 后端环境变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| PORT | 3000 | 后端服务端口 |
| CORS_ORIGIN | http://localhost:5173 | 允许的跨域源 |
| NODE_ENV | development | 运行环境 |

### 前端环境变量

前端通过 Vite 代理配置连接后端，无需额外配置。

## 项目迁移说明

本项目已从单体架构重构为前后端分离架构：

### 旧结构
- 单个 `index.html` 文件包含所有前端代码
- `server.js` 提供静态文件和 API 服务
- 所有代码混合在根目录

### 新结构
- 前端：标准 Vue 3 项目，使用 Vite 构建
  - JavaScript 库文件（marked, highlight.js, mermaid）作为本地资源存放在 `frontend/public/resource/`
  - 通过 script 标签引入，无需 npm 安装
  - 构建产物自动输出到 `backend/public/` 目录
- 后端：标准 Express 项目，遵循 MVC 模式
  - 上传文件目录从 `markdown/` 迁移到 `backend/uploads/`
  - 同时提供前端静态文件和 API 服务
- 部署架构：单容器部署
  - 前端构建后集成到后端
  - Docker 部署只需一个容器
  - 简化了部署流程和资源消耗
- Docker 配置：集中管理在 `deploy/docker/` 目录
- 清晰的目录结构和职责分离

## 开发指南

### 添加新的 Vue 组件

在 `frontend/src/components/` 目录下创建新组件：

```vue
<template>
  <div>
    <!-- 组件模板 -->
  </div>
</template>

<script setup>
// 组件逻辑
</script>
```

### 添加新的 API 接口

1. 在 `backend/src/routes/` 添加路由
2. 在 `backend/src/controllers/` 添加控制器逻辑
3. 在 `frontend/src/api/` 添加前端调用方法

## 限制

- 单个文件大小限制：10MB
- 仅支持 Markdown 文件（.md, .markdown）

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
