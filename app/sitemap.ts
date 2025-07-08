import { promises as fs } from 'fs';
import path from 'path';

const SITE_URL = 'https://algorithmsofquality.com';

async function getNoteSlugs(dir: string) {
  try {
    const entries = await fs.readdir(dir, {
      recursive: true,
      withFileTypes: true
    });
    return entries
      .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
      .map((entry) => {
        const relativePath = path.relative(
          dir,
          path.join(entry.parentPath || entry.path || '', entry.name)
        );
        return path.dirname(relativePath);
      })
      .filter((slug) => slug && slug !== '.')
      .map((slug) => slug.replace(/\\/g, '/'));
  } catch (error) {
    console.warn('Error reading notes directory:', error);
    return [];
  }
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'n');
  const slugs = await getNoteSlugs(notesDirectory);

  const notes = slugs.map((slug) => ({
    url: `${SITE_URL}/n/${slug}`,
    lastModified: new Date().toISOString()
  }));

  const routes = ['', '/blog', '/quality-terms', '/writings'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes, ...notes];
}
