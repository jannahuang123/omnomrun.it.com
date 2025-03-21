const fs = require('fs');

// 定义游戏分类规则
const categoryRules = {
    'Action': ['shooter', 'fight', 'battle', 'war', 'combat', 'gun', 'weapon', 'destruction', 'zombie', 'assault', 'attack', 'warrior', 'hero', 'sword', 'survival', 'dead', 'kill', 'mission', 'military', 'sniper', 'strike'],
    'Racing': ['racing', 'car', 'drift', 'bike', 'rider', 'drive', 'track', 'speed', 'moto', 'racer', 'traffic', 'parking', 'vehicle', 'stunt', 'rally', 'offroad'],
    'Sports': ['basketball', 'football', 'golf', 'billiards', 'sport', 'ball', 'pool', 'soccer', 'champion', 'league', 'tournament'],
    'Puzzle': ['puzzle', 'match', 'merge', 'sort', 'escape', 'hidden', 'find', 'brain', 'word', 'clicker', 'idle', 'mahjong', 'solitaire', 'mystery', 'room'],
    'Strategy': ['tower', 'defense', 'castle', 'build', 'tycoon', 'craft', 'commander', 'empire', 'kingdom', 'management', 'simulation', 'base', 'war', 'army', 'battle'],
    'Adventure': ['adventure', 'quest', 'explore', 'journey', 'story', 'mission', 'rpg', 'dungeon', 'world', 'discover', 'treasure'],
    'Arcade': ['arcade', 'classic', 'retro', 'jump', 'run', 'platform', 'endless', 'score', 'highscore', 'casual'],
    'Multiplayer': ['io', 'multiplayer', 'pvp', 'battle royale', 'online', 'bros', 'versus', 'team', 'competition', 'arena'],
    'Simulation': ['simulator', 'life', 'farm', 'city', 'shop', 'management', 'idle', 'tycoon', 'business', 'build', 'craft'],
    'Fighting': ['fight', 'martial', 'combat', 'versus', 'warrior', 'arena', 'battle', 'duel', 'tournament'],
    'Shooting': ['shooter', 'fps', 'gun', 'sniper', 'aim', 'target', 'military', 'war', 'battle'],
    'Horror': ['horror', 'scary', 'zombie', 'survival', 'dark', 'night', 'dead', 'evil', 'monster']
};

// 游戏描述映射
const gameDescriptions = {
    'Farm Merge Valley': {
        description: '在这个轻松有趣的农场合并游戏中，您可以通过合并相同的动物和物品来升级它们。种植农作物，添加动物到您的农场，同时扩展到令人兴奋的新土地。在完成各种挑战的同时，体验您一直梦想的平和农场生活。',
        howToPlay: '点击并拖动相同的物品来合并它们。合并后会产生更高级的物品。管理您的农场资源，完成任务获得奖励。'
    },
    'Castle Craft': {
        description: '这是一款战略建造游戏，您需要建造和管理自己的中世纪王国。建造各种建筑，收集资源，同时保护您的城堡免受敌人的侵扰，扩大您的领土。',
        howToPlay: '使用鼠标点击建造建筑物，收集资源。合理规划建筑布局，提高防御能力。完成任务获得更多资源和奖励。'
    },
    'Night City Racing': {
        description: '在这款刺激的赛车游戏中，您将在霓虹闪烁的城市环境中竞速。在夜晚的城市街道上飙车，升级您的车辆，与其他赛车手竞争，成为终极街头赛车冠军。',
        howToPlay: '使用方向键控制车辆方向，空格键加速，Shift键刹车/漂移。完成比赛获得奖金，升级您的车辆性能。'
    },
    'Smash Karts': {
        description: '一款充满乐趣的多人卡丁车对战游戏。在竞技场中与其他玩家展开激烈的碰撞对决，收集武器和道具，成为最后的胜利者。',
        howToPlay: '使用方向键控制车辆移动，空格键使用道具和武器。收集散落在场地上的道具来增强战斗力。'
    },
    'Shell Shockers': {
        description: '独特的第一人称射击游戏，您将扮演一个战斗鸡蛋，在各种有趣的地图中与其他玩家展开对战。',
        howToPlay: '使用WASD移动，鼠标瞄准和射击。收集武器和弹药，消灭敌人获得积分。'
    },
    'BuildNow GG': {
        description: '一款创意十足的建造游戏，您可以自由建造和设计自己的世界。使用各种材料和工具，创造独特的建筑和场景。',
        howToPlay: '使用鼠标选择和放置建筑块，右键打开建造菜单。探索不同的建筑材料，发挥创意建造独特作品。'
    },
    'Bullet Force': {
        description: '高质量的多人在线第一人称射击游戏，提供多种游戏模式和丰富的武器选择。与来自世界各地的玩家一起战斗。',
        howToPlay: 'WASD移动，鼠标瞄准射击，R装弹，F切换武器。参与团队或个人对战，完成任务获得奖励。'
    }
    // 可以继续添加更多游戏的描述
};

// 根据游戏标题和URL判断分类
function determineCategories(title, url) {
    const categories = new Set();
    const lowerTitle = title.toLowerCase();
    const lowerUrl = url.toLowerCase();
    
    // 检查每个分类的关键词
    for (const [category, keywords] of Object.entries(categoryRules)) {
        for (const keyword of keywords) {
            if (lowerTitle.includes(keyword.toLowerCase()) || 
                lowerUrl.includes(keyword.toLowerCase())) {
                categories.add(category);
            }
        }
    }
    
    // 如果没有匹配到任何分类，添加到"Others"分类
    if (categories.size === 0) {
        categories.add('Others');
    }
    
    return Array.from(categories);
}

// 读取markdown文件
const markdown = fs.readFileSync('game_by_category.md', 'utf-8');

// 解析游戏数据
const games = [];
let currentGame = null;
let inGameBlock = false;

// 按行分割内容
const lines = markdown.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // 跳过目录部分
    if (line.startsWith('## 目录') || line.startsWith('- [')) {
        continue;
    }
    
    // 检测游戏标题（以 ### 开头）
    if (line.startsWith('### ')) {
        if (currentGame) {
            // 确定游戏分类
            currentGame.categories = determineCategories(currentGame.title, currentGame.url);
            games.push(currentGame);
        }
        currentGame = {
            title: line.replace('### ', '').trim(),
            url: '',
            iframe_src: '',
            categories: [],
            thumbnail: '',
            description: '',
            howToPlay: ''
        };
        continue;
    }

    // 解析游戏信息
    if (currentGame) {
        if (line.startsWith('- 游戏链接:')) {
            currentGame.url = line.split(': ')[1].trim();
            // 生成缩略图URL
            const titleMatch = currentGame.url.match(/game\/(.*?)$/);
            if (titleMatch) {
                const gameId = titleMatch[1];
                currentGame.thumbnail = `https://images.crazygames.com/games/${gameId}/cover-1584359196486.png`;
            }
        } else if (line.startsWith('- iframe链接:')) {
            currentGame.iframe_src = line.split(': ')[1].trim();
        }
    }
}

// 添加最后一个游戏
if (currentGame) {
    currentGame.categories = determineCategories(currentGame.title, currentGame.url);
    games.push(currentGame);
}

// 添加游戏描述
games.forEach(game => {
    // 根据游戏标题和类型生成描述
    const categories = game.categories.join('、');
    game.description = `《${game.title}》是一款精彩的${categories}游戏。快来体验紧张刺激的游戏过程吧！`;
    game.howToPlay = '使用键盘方向键和空格键控制游戏。根据游戏内提示完成各种挑战。';
});

// 按分类组织游戏
const gamesByCategory = {};
Object.keys(categoryRules).concat(['Others']).forEach(category => {
    gamesByCategory[category] = games.filter(game => game.categories.includes(category));
});

// 写入JSON文件
fs.writeFileSync('games.json', JSON.stringify(games, null, 2));

// 写入分类统计信息
const categoryStats = Object.entries(gamesByCategory).map(([category, games]) => ({
    category,
    count: games.length,
    games: games.map(g => g.title)
}));

fs.writeFileSync('category_stats.json', JSON.stringify(categoryStats, null, 2));

console.log(`成功转换 ${games.length} 个游戏数据到 games.json`);
console.log('\n游戏分类统计：');
categoryStats.forEach(({category, count}) => {
    console.log(`${category}: ${count} 个游戏`);
}); 