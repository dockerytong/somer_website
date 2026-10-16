import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const news = (await getCollection('news')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'SOMER团队 · 团队动态',
    description: '中国科学院生态环境研究中心 SOMER团队的研究进展、论文与团队活动。',
    site: context.site,
    customData: '<language>zh-CN</language>',
    items: news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.summary,
      link: `/news/${item.slug}/`,
    })),
  });
}
