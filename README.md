# Algorithms of Quality

Next.js site for [algorithmsofquality.com](https://algorithmsofquality.com) — MDX content, Tailwind, optional Postgres redirects.

**Repository:** [github.com/onareach/algorithmsofquality](https://github.com/onareach/algorithmsofquality)

Deploy and git workflow: see **`docs/COMMIT_AND_PUSH.md`**.

## Running locally

Requires Node.js v18.17+.

```bash
cd /Users/davidlong/main_projects/quality_projects/algorithmsofquality
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docs

Project documentation (deployment, DNS, dev log, article drafts) lives in **`docs/`** — not exposed as public routes.

## Database (optional)

Create `.env.local` with `POSTGRES_URL` if you use the redirects table. See `next.config.ts` and `docs/DEPLOYMENT_GUIDE.md`.
