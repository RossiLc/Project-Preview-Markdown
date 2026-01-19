# AI定制春联后端服务

# 服务器部署命令
## 拷贝文件
cd /data/ai-couplet
rm -rf ./* .[!.]* ..?*
mv /tmp/ai-couplet/* .
mv /tmp/ai-couplet/.env.production .
## 执行部署
清理：docker compose -f cd/docker-compose.yml down
启动：docker compose -f cd/docker-compose.yml up --build -d
日志：docker logs ai-couplet-app

## 概述

基于Node.js + Express的后端服务，提供春联生成API，支持多AI模型切换和并发请求管理。

## 功能特性

- ✅ 多AI模型支持（Claude、智谱GLM、百度文心、阿里通义）
- ✅ 配置热重载，无需重启服务器
- ✅ 请求队列管理，支持并发控制
- ✅ 自动生成二维码，方便移动端访问
- ✅ 完整的错误处理和日志记录

## 快速开始

### 1. 安装依赖

```bash
cd server
npm install
# 或使用 yarn
yarn install
```

### 2. 配置AI模型

复制配置模板：
```bash
cp config/ai-models.example.json config/ai-models.json
```

编辑 `config/ai-models.json`，填入你的API密钥：

```json
{
  "activeModel": "glm",
  "models": {
    "glm": {
      "provider": "zhipu",
      "apiKey": "your-api-key-here",
      "endpoint": "https://open.bigmodel.cn/api/anthropic/v1/messages",
      "model": "glm-4-plus",
      "timeout": 30000
    }
  }
}
```

### 3. 配置环境变量（可选）

创建 `.env` 文件：

```env
PORT=3000
MAX_CONCURRENT=5
MAX_QUEUE_SIZE=50
REQUEST_TIMEOUT=30000
```

### 4. 启动服务

#### 开发模式

开发模式下,前后端分离运行:

```bash
# 启动后端服务器 (端口3001)
npm run dev

# 在另一个终端启动前端开发服务器 (端口5173)
cd ../client
yarn dev
```

或使用Windows批处理脚本:
```bash
# 启动后端
start.bat

# 启动前端
cd ..\client
yarn dev
```

#### 生产模式

生产模式下,前端构建到server/public目录,通过后端服务器访问:

```bash
# 构建前端
cd ../client
yarn build

# 启动后端服务器
cd ../server
npm start
```

或使用Windows批处理脚本:
```bash
start-prod.bat
```

#### 服务启动信息

服务启动后会显示：
- **后端API地址**: 后端服务器地址(端口3001)
- **前端访问地址**: 
  - 开发模式: 前端开发服务器地址(端口5173)
  - 生产模式: 后端服务器地址(端口3001)
- **二维码**: 指向前端访问地址,用于移动端扫码访问

**重要**: 二维码显示的是前端访问地址,不是后端API地址

## API接口

### POST /api/generate

生成春联

**请求体：**
```json
{
  "name": "张伟",
  "promptElement": "事业有成"
}
```

**响应：**
```json
{
  "success": true,
  "data": {
    "upperLine": "张灯结彩迎新岁",
    "lowerLine": "伟业辉煌展宏图",
    "horizontalScroll": "马到成功"
  },
  "duration": 2340,
  "timestamp": 1234567890
}
```

**错误响应：**
```json
{
  "success": false,
  "error": "姓名长度应为2-4个汉字",
  "timestamp": 1234567890
}
```

### GET /api/config

获取前端配置

**响应：**
```json
{
  "promptElements": [
    "事业有成",
    "家庭幸福",
    "身体健康",
    "财源广进",
    "学业进步",
    "万事如意"
  ],
  "maxNameLength": 4,
  "minNameLength": 2
}
```

### GET /api/health

健康检查

**响应：**
```json
{
  "status": "ok",
  "activeModel": "glm",
  "queueSize": 0,
  "processing": 0,
  "stats": {
    "queueSize": 0,
    "processing": 0,
    "completed": 10,
    "failed": 0
  },
  "timestamp": 1234567890
}
```

## 测试API

### 使用curl测试

```bash
# 健康检查
curl http://localhost:3000/api/health

# 获取配置
curl http://localhost:3000/api/config

# 生成春联
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"name":"张伟","promptElement":"事业有成"}'
```

### 使用Postman测试

1. 导入以下请求：
   - GET http://localhost:3000/api/health
   - GET http://localhost:3000/api/config
   - POST http://localhost:3000/api/generate

2. POST请求的Body设置为JSON：
```json
{
  "name": "张伟",
  "promptElement": "事业有成"
}
```

## 项目结构

```
server/
├── config/
│   ├── ai-models.json          # AI模型配置（需自行创建）
│   └── ai-models.example.json  # 配置模板
├── src/
│   ├── adapters/               # AI模型适配器
│   │   ├── ai-model-adapter.js
│   │   ├── claude-adapter.js
│   │   ├── glm-adapter.js
│   │   ├── baidu-wenxin-adapter.js
│   │   ├── ali-tongyi-adapter.js
│   │   ├── adapter-factory.js
│   │   └── index.js
│   ├── config/
│   │   └── config-manager.js   # 配置管理器
│   ├── routes/
│   │   └── api.js              # API路由
│   ├── services/
│   │   ├── couplet-service.js  # 春联生成服务
│   │   └── request-queue-manager.js  # 请求队列管理
│   └── app.js                  # 应用入口
├── public/                     # 前端静态文件
├── .env.example                # 环境变量模板
├── package.json
└── README.md
```

## 配置热重载

修改 `config/ai-models.json` 后，配置会自动重载，无需重启服务器。

例如，切换AI模型：
```json
{
  "activeModel": "claude",  // 从 "glm" 改为 "claude"
  "models": {
    // ...
  }
}
```

保存后，服务器会自动应用新配置。

## 并发控制

系统使用队列管理并发请求：

- **MAX_CONCURRENT**: 同时处理的最大请求数（默认5）
- **MAX_QUEUE_SIZE**: 队列最大容量（默认50）

当队列满时，新请求会收到503错误。

## 错误处理

### 常见错误

| 错误码 | 错误信息 | 原因 | 解决方法 |
|--------|----------|------|----------|
| 400 | 请输入姓名 | 缺少name参数 | 检查请求体 |
| 400 | 姓名长度应为2-4个汉字 | 姓名长度不符 | 输入2-4个汉字 |
| 400 | 请输入2-4个汉字 | 包含非汉字字符 | 只输入汉字 |
| 503 | 当前访问人数较多 | 队列已满 | 稍后重试 |
| 500 | 生成失败 | AI服务错误 | 检查API配置 |

### 日志

所有请求和错误都会记录到控制台：

```
✅ 春联生成成功: { requestId, name, duration, ... }
❌ 春联生成失败: { requestId, error, stack, ... }
```

## 性能优化

1. **连接池**: 使用HTTP连接池减少连接开销
2. **队列管理**: 控制并发数，避免服务过载
3. **超时控制**: 设置合理的超时时间
4. **缓存**: 百度文心的访问令牌会缓存30天

## 安全建议

1. **API密钥**: 不要将密钥提交到版本控制
2. **环境变量**: 使用 `.env` 文件存储敏感信息
3. **CORS**: 生产环境配置CORS白名单
4. **速率限制**: 考虑添加速率限制中间件

## 故障排查

### 服务无法启动

1. 检查端口是否被占用
2. 检查Node.js版本（需要18+）
3. 检查依赖是否安装完整

### AI生成失败

1. 检查API密钥是否正确
2. 检查网络连接
3. 查看错误日志
4. 尝试切换其他AI模型

### 配置热重载不生效

1. 检查配置文件格式是否正确
2. 查看控制台是否有错误信息
3. 手动重启服务器

## 开发指南

### 添加新的AI提供商

1. 在 `src/adapters/` 创建新适配器
2. 继承 `AIModelAdapter` 基类
3. 实现 `generate()` 和 `healthCheck()` 方法
4. 在 `adapter-factory.js` 注册新提供商
5. 更新配置文件模板

详见：[src/adapters/README.md](src/adapters/README.md)

### 修改提示词

编辑 `src/services/couplet-service.js` 中的 `buildPrompt()` 方法。

### 调整队列参数

修改 `.env` 文件中的 `MAX_CONCURRENT` 和 `MAX_QUEUE_SIZE`。

## 许可证

MIT

## 支持

如有问题，请查看：
- [适配器文档](src/adapters/README.md)
- [配置示例](config/ai-models.example.json)
- 控制台日志
