# SOMER研究小组网站维护说明

这个网站是一个静态研究组网站，技术路线是：

- 框架：Astro
- 内容：Markdown / JSON
- 部署：GitHub 仓库 + Cloudflare Pages
- 输出：纯静态文件，构建后生成到 `dist/`

日常维护的核心思路是：改本地文件，提交到 GitHub，Cloudflare Pages 自动重新部署。

## 1. 本地运行网站

第一次拿到项目后，在项目目录运行：

```bash
npm install
npm run dev
```

开发服务器默认地址：

```text
http://127.0.0.1:4321/
```

如果只是检查网站能不能正常构建，运行：

```bash
npm run build
```

构建成功后，静态网站会生成到：

```text
dist/
```

Cloudflare Pages 最终部署的就是这个构建结果。

## 2. 平时更新哪些文件

大部分内容都在 `src/content/` 和 `src/pages/` 里。

### 组内动态

目录：

```text
src/content/news/
```

一个动态对应一个 Markdown 文件。比如新发论文、团建、获奖、会议、招生通知，都可以新建一个 `.md` 文件。

示例：

```md
---
title: SOMER团队参加某某会议
date: 2026-06-01
summary: 简短摘要，主要用于后台数据，不一定在列表页展示。
---

这里写正文。可以写多段文字，也可以插入图片。
```

注意：

- `date` 用 `YYYY-MM-DD` 格式。
- 文件名建议用英文或拼音，例如 `conference-2026.md`。
- 首页和“组内动态”页面会自动按日期从新到旧排序。

### 团队成员

目录：

```text
src/content/people/
```

每个成员一个 Markdown 文件。职工会自动生成个人页面，非职工显示在团队成员列表中。

常用字段：

```md
---
name: 张三
role: 博士生
group: phd
research: 尾矿成土与有机碳稳定。
period: 2025年至今
origin: 某某大学
destination:
note:
order: 1
---

这里可以写个人简介，也可以留空。
```

`group` 可选值：

- `staff`：职工
- `postdoc`：博士后
- `phd`：博士生
- `master`：硕士生
- `alumni`：毕业学生、出站博士后、访问学者等

其他字段说明：

- `period`：在组时间，例如 `2025年至今` 或 `2022-2025`
- `origin`：从哪里来，例如本科学校、博士毕业单位、原工作单位
- `destination`：毕业或离组后去向，主要用于 alumni
- `note`：备注，例如 `客座`、`访问学者`
- `order`：排序数字，数字越小越靠前

职工页面目前是：

```text
src/content/people/songlin-wu.md
src/content/people/wei-fu.md
src/content/people/tong-liu.md
```

### 研究方向

目录：

```text
src/content/research/
```

一个研究方向对应一个 Markdown 文件。

示例：

```md
---
title: 成土机制
summary: 从铁尾矿、煤矸石到铜尾矿，追踪矿物风化、有机碳稳定与微生物演替的耦合过程。
cover: /images/docx/image4.png
order: 1
---

这里写详细介绍。
```

字段说明：

- `title`：研究方向标题
- `summary`：研究方向页面上的简短介绍
- `cover`：配图路径
- `order`：排序

### 联系我们

文件：

```text
src/pages/contact.md
```

这里修改联系方式、招生说明、Google Scholar 链接等。

### 研究成果

目前研究成果页主要读取：

```text
src/data/scholar-publications.json
```

这个文件是从三位职工的 Google Scholar 页面抓取后合并生成的本地数据。网站构建时直接读取这个 JSON。

如果只是手动改某一条成果，可以直接编辑这个 JSON，但要注意 JSON 格式不能写错。

如果以后要重新抓取 Google Scholar，需要重新运行抓取脚本或让 Codex 更新这个文件。

## 3. 图片怎么放

公共图片放在：

```text
public/images/
```

从 Word 文档提取出来的图片目前在：

```text
public/images/docx/
```

Markdown 里这样引用：

```md
![图片说明](/images/docx/image4.png)
```

注意：

- 路径从 `/images/...` 开始，不要写 `public/images/...`。
- 图片尽量压缩后再放进网站，避免网页加载太慢。

## 4. 第一次上传到 GitHub

如果这个目录还不是 Git 仓库，先初始化：

```bash
cd /Users/tongliu/Desktop/codes/website
git init
git add .
git commit -m "Initial SOMER website"
```

然后在 GitHub 上新建一个仓库，例如：

```text
somer-website
```

GitHub 建好后，会给一个仓库地址，类似：

```text
https://github.com/your-name/somer-website.git
```

把本地项目推上去：

```bash
git branch -M main
git remote add origin https://github.com/your-name/somer-website.git
git push -u origin main
```

如果 GitHub 仓库已经存在，并且已经配置过 remote，平时只需要：

```bash
git add .
git commit -m "Update website content"
git push
```

## 5. Cloudflare Pages 部署

第一次部署步骤：

1. 登录 Cloudflare。
2. 进入 `Workers & Pages`。
3. 选择 `Create application`。
4. 选择 `Pages`。
5. 选择 `Connect to Git`。
6. 授权 Cloudflare 访问 GitHub。
7. 选择这个网站对应的 GitHub 仓库。
8. 框架选择 `Astro`。
9. 构建配置填写：

```text
Build command: npm run build
Build output directory: dist
```

如遇 Node 版本问题，在 Cloudflare Pages 的环境变量里添加：

```text
NODE_VERSION=22
```

保存后，Cloudflare 会自动构建并给出一个默认域名，例如：

```text
https://somer-website.pages.dev
```

## 6. 平时更新网站的完整流程

日常更新一般是下面这几步：

```bash
cd /Users/tongliu/Desktop/codes/website
npm run dev
```

在浏览器打开：

```text
http://127.0.0.1:4321/
```

修改对应文件，例如：

- 新动态：新增 `src/content/news/xxx.md`
- 改成员：修改 `src/content/people/xxx.md`
- 改研究方向：修改 `src/content/research/xxx.md`
- 改联系方式：修改 `src/pages/contact.md`

修改后先本地检查：

```bash
npm run build
```

确认没有报错后提交：

```bash
git add .
git commit -m "Update website content"
git push
```

推送到 GitHub 后，Cloudflare Pages 会自动重新部署。通常几十秒到几分钟后，线上网站会更新。

## 7. 常见问题

### 4321 端口打不开

先确认开发服务器是否启动：

```bash
npm run dev
```

看到类似下面的信息才表示启动成功：

```text
Local    http://127.0.0.1:4321/
```

### Cloudflare 构建失败

先在本地运行：

```bash
npm run build
```

如果本地也失败，先修本地错误。如果本地成功但 Cloudflare 失败，优先检查：

- Cloudflare 的 Build command 是否是 `npm run build`
- Build output directory 是否是 `dist`
- Node 版本是否需要设置为 `22`

### Markdown 页面不显示

检查文件开头的 frontmatter 是否完整，例如：

```md
---
title: 标题
date: 2026-06-01
summary: 摘要
---
```

`---` 必须成对出现，字段冒号后面要有空格。
