# 疯狂游戏专区 - 多游戏站点

这是一个基于JSON配置的多语言游戏站点，专为Cloudflare Pages等静态托管服务设计。无需后端数据库，通过JSON文件管理游戏和站点配置。

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
-<iframe src="https://www.crazygames.com/embed/bloxdhop-io" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/ragdoll-archers" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/mahjongg-solitaire" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/words-of-wonders" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/count-masters-stickman-games" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/8-ball-billiards-classic" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/slice-master" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/solar-smash" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/iron-towers-alliance" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/zombie-crusher-ooz" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/farm-merge-valley" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/project-prismatic" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/mirror-room-escape" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/tile-jumper-3d" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-<iframe src="https://www.crazygames.com/embed/pirates-of-the-caribbean-tow" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/ink-shop-dress-tattoo-games" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/knight-clicker" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/limited-defense" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/limited-defense" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/spotti-find-the-differences" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/pin-away" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Driving Games
<iframe src="https://www.crazygames.com/embed/racing-limits" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/polytrack" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/mx-offroad-master" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/mx-offroad-master" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/night-city-racing" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/demolition-derby-3" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/rally-racer-dirt" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/stunt-paradise" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Action Games
<iframe src="https://www.crazygames.com/embed/hexa-sort" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/tower-swap" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/mergest-kingdom" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/piles-of-mahjong-jhb" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Adventure Games
<iframe src="https://www.crazygames.com/embed/castle-craft" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/doors-online" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/dead-land-survival" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/stronghold-dude" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/stronghold-dude" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/firestone-idle-rpg" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/battle-arena" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Shooting Games
<iframe src="https://www.crazygames.com/embed/hazmob-fps-online-shooter" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/buildnow-gg" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/bullet-force-multiplayer" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/skillwarz" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/skillwarz" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/bodycamera-shooter" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/bot-machines" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/forward-assault" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Sports Games
<iframe src="https://www.crazygames.com/embed/8-ball-billiards-classic" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/crazy-flips-3d" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/golf-orbit" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/basket-random" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/8-ball-pool-billiards-multiplayer" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/basketbros" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/qb-legend" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/foot-battle-ball" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
-Beauty Games
<iframe src="https://www.crazygames.com/embed/paper-doll-diary-dress-up-diy" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/chibi-doll---avatar-creator" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/fashion-famous" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/asmr-beauty-homeless" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/monster-makeup-3d" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/back-to-school-uniforms-edition" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
<iframe src="https://www.crazygames.com/embed/paper-princess---doll-dress-up" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>
