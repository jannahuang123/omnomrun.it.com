# OmNomRun 游戏网站

[![部署状态](https://img.shields.io/badge/Cloudflare%20Pages-已部署-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://omnomrun.it)

这是一个使用纯静态HTML/CSS/JavaScript构建的在线游戏网站。网站提供多种类型的游戏,包括动作、竞速、解谜等。

## 特点

- 纯静态网站,无需后端服务器
- 响应式设计,支持各种设备
- 游戏分类系统
- 实时搜索功能
- 游戏预览功能
- 全屏游戏支持

## 文件结构

- `index.html` - 主页面
- `games.json` - 游戏数据
- `category_stats.json` - 游戏分类统计
- `game_by_category.md` - 游戏分类列表
- `convert.js` - 数据转换脚本

## 部署

本网站可以部署在任何静态网站托管服务上,如:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

## 开发

1. 克隆仓库
2. 在本地启动一个HTTP服务器(例如使用 Python: `python -m http.server 8000`)
3. 访问 `http://localhost:8000`

## 许可

MIT License

## 项目特点

- 多语言支持 (中文、英文、西班牙语、日语)
- 游戏分类与标签
- 响应式设计
- 游戏收藏功能 (使用LocalStorage)
- 游戏历史记录
- 搜索功能

## 项目结构

```
/
├── index.html             # 主页HTML
├── game-template.html     # 游戏页面模板
├── css/
│   └── styles.css         # 主样式表
├── js/
│   └── app.js             # 主JavaScript应用逻辑
├── data/
│   ├── games.json         # 游戏数据
│   └── config.json        # 网站配置
├── i18n/
│   ├── en.json            # 英文翻译
│   ├── zh.json            # 中文翻译
│   ├── es.json            # 西班牙语翻译(需添加)
│   └── ja.json            # 日语翻译(需添加)
└── images/
    ├── logo.png           # 网站logo
    └── game-thumbnails    # 游戏缩略图
```

## 如何添加新游戏

要添加新游戏，只需在 `data/games.json` 文件中添加新的游戏对象：

```json
{
  "id": "game-id",
  "title": {
    "en": "Game Title in English",
    "zh": "游戏中文标题",
    "es": "Título del juego en español",
    "ja": "ゲームタイトル（日本語）"
  },
  "description": {
    "en": "Game description in English",
    "zh": "游戏中文描述",
    "es": "Descripción del juego en español",
    "ja": "ゲームの説明（日本語）"
  },
  "iframe_url": "https://www.crazygames.com/embed/game-name",
  "thumbnail": "images/game-thumbnail.jpg",
  "category": "category-id",
  "tags": ["tag1", "tag2", "tag3"],
  "controls": {
    "en": ["Control instruction 1", "Control instruction 2"],
    "zh": ["操作指南1", "操作指南2"],
    "es": ["Instrucción de control 1", "Instrucción de control 2"],
    "ja": ["操作手順1", "操作手順2"]
  }
}
```

## 如何添加新分类

要添加新的游戏分类，在 `data/config.json` 文件中的 `categories` 数组中添加新项：

```json
{
  "id": "category-id",
  "name": {
    "en": "Category Name in English",
    "zh": "分类中文名称",
    "es": "Nombre de categoría en español",
    "ja": "カテゴリ名（日本語）"
  }
}
```

## 部署说明

1. 将所有文件上传到Cloudflare Pages或其他静态网站托管服务
2. 确保所有资源的路径正确（特别是游戏缩略图）
3. 如果使用自定义域名，更新配置中的站点URL

## 自定义

- 修改 `css/styles.css` 文件自定义网站外观
- 在 `data/config.json` 中更新站点名称、描述和社交媒体链接
- 自定义 `i18n/*.json` 文件中的翻译文本

## 功能扩展建议

- 添加游戏评论功能 (可使用第三方服务如Disqus)
- 实现游戏评分系统
- 添加更多语言支持
- 集成社交分享按钮

## 浏览器兼容性

支持所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 许可证

##游戏的IFRAME地址
