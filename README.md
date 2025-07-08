[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fnext-mdx-blog)

# next-mdx-blog

This is a blog template built with:

- **Framework**: [Next.js](https://nextjs.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Database** (Optional): [Postgres](https://vercel.com/postgres)

## Running Locally

This application requires Node.js v18.17+.

### Quick Start

1. Open a terminal window
2. Navigate to the project directory:
   ```bash
   cd /Users/davidlong/main_projects/quality_projects/next-mdx-blog
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The server will start and display a URL (typically http://localhost:3000)
5. Open that URL in your browser

Later, to stop the server before closing the terminal window, type Ctrl + C.

## Database (Optional)

Create a `.env.local` file with your `POSTGRES_URL` environment variable to store redirects.

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```
