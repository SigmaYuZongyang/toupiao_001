# 校园投票系统部署指南

这是一个简单的校园投票系统，支持校内和校外两种投票类型，并通过 Firebase 实现了多人在线协同投票功能。

## 功能特点

- ✅ 两种投票选项（在校内/在校外）
- ✅ 渐变色背景和卡片式响应式界面设计
- ✅ 实时投票统计和进度条显示
- ✅ 投票成功提示和分享功能
- ✅ Firebase 实时数据库实现多人在线协同

## 部署方法

### 使用 Vercel 免费部署（推荐）

Vercel 是一个免费的静态网站部署平台，适合部署前端项目。

**步骤：**

1. **创建 GitHub 仓库**
   - 访问 [GitHub](https://github.com/) 并登录您的账号
   - 点击「New repository」创建一个新仓库
   - 填写仓库名称（如 `campus-voting-system`）
   - 选择「Public」或「Private」（推荐 Public 以便 Vercel 访问）
   - 点击「Create repository」

2. **上传文件到 GitHub 仓库**
   - 进入您刚创建的仓库
   - 点击「Add file」→「Upload files」
   - 上传本项目中的 `index.html` 文件
   - 点击「Commit changes」

3. **注册 Vercel 账号**
   - 访问 [Vercel](https://vercel.com/) 并点击「Sign Up」
   - 选择使用 GitHub 账号登录（推荐，以便自动导入仓库）

4. **导入仓库并部署**
   - 登录后，Vercel 会自动检测您的 GitHub 仓库
   - 找到您刚创建的投票系统仓库，点击「Import」
   - 在配置页面中，保持默认设置不变：
     - 项目名称：自动填充（可自定义）
     - 根目录：保持默认
     - 构建命令：无需填写（静态网站）
     - 输出目录：无需填写（静态网站）
   - 点击「Deploy」开始部署

5. **访问部署后的网站**
   - 部署完成后，Vercel 会显示部署成功的页面
   - 您可以通过 Vercel 提供的免费域名（如 `your-project.vercel.app`）访问投票系统
   - 点击「Go to Dashboard」可以查看项目的详细信息和统计数据

### 自定义域名（可选）

如果您有自己的域名，可以在 Vercel 控制台中进行配置：

1. 进入项目 dashboard
2. 点击「Settings」→「Domains」
3. 输入您的域名（如 `vote.example.com`）
4. 按照 Vercel 的提示在您的域名注册商处添加 DNS 记录
5. 等待 DNS 记录生效后，您的投票系统就可以通过自定义域名访问了

## 注意事项

- Vercel 免费版提供 100GB/月的带宽和 100 个项目，足够小型投票系统使用
- Firebase 免费版提供 1GB 的数据库存储和 10GB/月的下载流量，足够小型应用使用
- 如果您的投票系统访问量较大，可能需要升级到付费版以获得更多资源

## 技术支持

如果您在部署过程中遇到问题，可以参考以下资源：

- Vercel 官方文档：https://vercel.com/docs
- GitHub 官方文档：https://docs.github.com/
- Firebase 官方文档：https://firebase.google.com/docs

或者您可以联系我，我会尽力帮助您解决问题。