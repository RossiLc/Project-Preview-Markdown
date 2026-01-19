const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 确保 markdown 目录存在
const markdownDir = path.join(__dirname, 'markdown');
if (!fsSync.existsSync(markdownDir)) {
  fsSync.mkdirSync(markdownDir, { recursive: true });
}

// 配置文件上传
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, markdownDir);
  },
  filename: function (req, file, cb) {
    // 使用原始文件名，但确保是 .md 扩展名
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const ext = path.extname(originalName);
    const baseName = path.basename(originalName, ext);
    const finalName = ext.toLowerCase() === '.md' ? originalName : `${baseName}.md`;
    cb(null, finalName);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.md' && ext !== '.markdown') {
      return cb(new Error('只允许上传 Markdown 文件 (.md, .markdown)'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 限制 10MB
  }
});

// 提供静态文件服务
app.use(express.static(__dirname));

// 获取 markdown 文件列表
app.get('/api/files', async (req, res) => {
  try {
    const files = await fs.readdir(markdownDir);
    const mdFiles = files
      .filter(file => file.endsWith('.md') || file.endsWith('.markdown'))
      .map(file => ({
        name: file,
        path: `markdown/${file}`
      }));
    res.json({ success: true, files: mdFiles });
  } catch (error) {
    console.error('读取文件列表失败:', error);
    res.status(500).json({ success: false, message: '读取文件列表失败' });
  }
});

// 上传 markdown 文件
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: '没有上传文件' });
    }
    res.json({
      success: true,
      message: '文件上传成功',
      file: {
        name: req.file.filename,
        path: `markdown/${req.file.filename}`
      }
    });
  } catch (error) {
    console.error('文件上传失败:', error);
    res.status(500).json({ success: false, message: '文件上传失败' });
  }
});

// 删除 markdown 文件
app.delete('/api/files/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(markdownDir, filename);

    // 安全检查：确保文件路径在 markdown 目录内
    if (!filePath.startsWith(markdownDir)) {
      return res.status(400).json({ success: false, message: '非法的文件路径' });
    }

    await fs.unlink(filePath);
    res.json({ success: true, message: '文件删除成功' });
  } catch (error) {
    console.error('文件删除失败:', error);
    res.status(500).json({ success: false, message: '文件删除失败' });
  }
});

// 错误处理中间件
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, message: '文件大小超过限制（最大 10MB）' });
    }
  }
  console.error('服务器错误:', err);
  res.status(500).json({ success: false, message: err.message || '服务器错误' });
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`Markdown 文件目录: ${markdownDir}`);
});
