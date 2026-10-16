# sources/ — 源素材（不部署）

这里放网站的**原始素材**，只作留档与再加工用，不进入 `dist/`、不会上传到 Cloudflare。

- `images/research/`、`images/news/`、`images/docx/`：未压缩的原始插图（PNG/JPG/TIFF）。
  页面实际引用的是 `public/images/` 里压缩后的 `.webp`（卡片另有 `-card.webp` 缩略图）。
- `favicon-原图512.png`、`images/docx/image1-原图1034.png`：站标与 favicon 的原图，
  `public/` 里是压缩到实际显示尺寸的版本。

**新增图片时的做法**：原图先放这里，转成 webp（`cwebp -q 82 -resize 1200 0`）放 `public/images/`；
卡片缩略图用 `cwebp -q 72 -resize 620 0` 生成 `-card.webp`。`public/` 只保留页面真正引用的文件。
