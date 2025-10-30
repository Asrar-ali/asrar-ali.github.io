import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../rssConfig';

export const GET = async () => {
  const posts = import.meta.glob('../../content/posts/*.mdx', { eager: true }) as any;
  const items = Object.values(posts).map((p:any) => ({
    title: p.frontmatter.title,
    pubDate: p.frontmatter.date,
    description: p.frontmatter.description,
    link: p.url,
  }));
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items,
  });
};
