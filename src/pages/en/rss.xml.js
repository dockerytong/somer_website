import rss from '@astrojs/rss';
import { enNews } from '../../data/en-site';

export async function GET(context) {
  const news = [...enNews].sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return rss({
    title: 'SOMER Group · News',
    description: 'Research progress, publications, and activities of the SOMER Group, Research Center for Eco-Environmental Sciences, CAS.',
    site: context.site,
    customData: '<language>en</language>',
    items: news.map((item) => ({
      title: item.title,
      pubDate: item.date,
      description: item.summary,
      link: `/en/news/${item.slug}/`,
    })),
  });
}
