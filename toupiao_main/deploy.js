#!/usr/bin/env node

// 简单的部署脚本，用于帮助用户快速部署到 Vercel

const fs = require('fs');
const path = require('path');

console.log('校园投票系统部署脚本');
console.log('========================');
console.log('
');

// 检查必要的文件是否存在
const indexHtmlPath = path.join(__dirname, 'index.html');
const readmePath = path.join(__dirname, 'README.md');

if (!fs.existsSync(indexHtmlPath)) {
    console.error('错误：index.html 文件不存在');
    process.exit(1);
}

if (!fs.existsSync(readmePath)) {
    console.error('错误：README.md 文件不存在');
    process.exit(1);
}

console.log('✓ 必要的文件已存在');
console.log('
');

// 显示部署步骤
console.log('部署步骤：');
console.log('1. 创建 GitHub 仓库');
console.log('2. 上传 index.html 文件到仓库');
console.log('3. 注册 Vercel 账号并导入仓库');
console.log('4. 等待部署完成并访问网站');
console.log('
');

// 显示详细的部署指南链接
console.log('详细的部署指南请参考：');
console.log('https://vercel.com/docs/getting-started-with-vercel');
console.log('
');

// 显示 Firebase 配置信息
console.log('Firebase 配置信息：');
console.log('当前项目使用的是演示用的 Firebase 配置');
console.log('如果您需要使用自己的 Firebase 项目，请按照以下步骤操作：');
console.log('1. 访问 https://firebase.google.com/ 并创建一个新项目');
console.log('2. 在项目设置中找到您的 Firebase 配置');
console.log('3. 替换 index.html 文件中的 firebaseConfig 变量');
console.log('
');

console.log('部署脚本执行完成');
console.log('==================');