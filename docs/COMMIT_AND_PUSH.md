# Commit and Push Procedures

**Algorithms of Quality** — [algorithmsofquality.com](https://algorithmsofquality.com)

This site is a **single** Next.js app in one Git repository. There is no separate backend repo for routine content and layout work; production deploys go through **GitHub → Vercel**.

| Item | Detail |
|------|--------|
| **Repo root (run `git` here)** | `next-mdx-blog/` (the folder that contains `app/`, `package.json`, and `.git`) |
| **Remote** | `origin` → [github.com/onareach/algorithmsofquality](https://github.com/onareach/algorithmsofquality) |
| **Production** | Vercel (auto-deploys when you push to `main`) |
| **Live URL** | https://algorithmsofquality.com |

---

## Before You Begin

**Important:** The parent folder `quality_projects/` is *not* the git repository. Git commands must be run from **`next-mdx-blog/`** (where `.git` lives). Running `git status` from `quality_projects/` will fail with “not a git repository” unless you initialize git there separately.

1. **Check for changes** (from your machine):
   ```bash
   cd /Users/davidlong/main_projects/quality_projects/next-mdx-blog
   git status
   ```
2. **Commit message:** Review the diff and write a short, accurate summary of what changed.
3. **Optional Postgres:** This project can use `POSTGRES_URL` for dynamic redirects in `next.config.ts`. If you are not using that feature locally, you do not need a database to build or deploy static pages. If you *do* add redirect rows or migration SQL, document that in the commit and ensure production env vars are set in Vercel.

---

## Repository layout (reference)

```
quality_projects/                 ← not a git root (unless you add one)
└── next-mdx-blog/                ← git repo root; run all git commands here
    ├── app/
    ├── public/
    ├── docs/
    ├── package.json
    └── ...
```

---

## Standard commit and push procedure

Pushing to **`main`** on GitHub is what triggers Vercel to build and deploy. No Heroku or second repo step.

```bash
cd /Users/davidlong/main_projects/quality_projects/next-mdx-blog

# Stage and commit
git add -A
# Or stage only what you intend: git add app/writings/page.mdx
git status                    # Review changes
git commit -m "Descriptive message summarizing changes"

# Push to GitHub (triggers Vercel production deploy when connected)
git push origin main
```

**Note:** Vercel deploys automatically when the Git integration is connected and the production branch is `main`. For a normal release, pushing to `main` is enough.

### Optional: Vercel CLI

If you use the CLI for previews or manual production deploys (as in some past project notes):

```bash
cd /Users/davidlong/main_projects/quality_projects/next-mdx-blog
npx vercel --prod
```

Prefer **git push** as the primary workflow so GitHub remains the source of truth.

---

## Quick reference

| Action | Command (from `next-mdx-blog/`) |
|--------|----------------------------------|
| **Status** | `git status` |
| **Commit** | `git add …` then `git commit -m "msg"` |
| **Deploy (typical)** | `git push origin main` |
| **Local sanity check** | `npm install` (if needed) then `npm run build` |

---

## Optional: Postgres redirects

If `POSTGRES_URL` is set, `next.config.ts` may load redirects from the `redirects` table at build time. For **local** testing you need a valid URL and schema; for **Vercel**, set `POSTGRES_URL` in the project’s environment variables. If the variable is missing, the config skips DB redirects and the site still builds.

---

## Remotes

- **origin** → `https://github.com/onareach/algorithmsofquality.git`

Confirm with:

```bash
git remote -v
```

---

## Troubleshooting

**“fatal: not a git repository”**  
You are not inside `next-mdx-blog/`. `cd` to that directory and run `git status` again.

**Site not updating after push**  
- Vercel deploys from GitHub; confirm the commit appears on `main` at [github.com/onareach/algorithmsofquality](https://github.com/onareach/algorithmsofquality).  
- Check the Vercel dashboard for the **algorithmsofquality** (or connected) project: build errors, wrong branch, or failed deploy.

**Push did not trigger a Vercel build**  
1. **Production branch:** Vercel → Project → **Settings** → **Git** → **Production Branch** should be `main` (or match the branch you push).  
2. **Confirm on GitHub:** Latest commit is on `main`.  
3. **Redeploy:** Vercel → **Deployments** → **⋯** on a deployment → **Redeploy**, or create a new deployment from `main`.  
4. **Reconnect Git:** If integration broke, disconnect and reconnect the repository under **Settings** → **Git**.

**Build fails on Vercel**  
- Open the failed deployment log in Vercel.  
- Reproduce locally: `npm run build` from `next-mdx-blog/`.  
- Fix TypeScript/MDX errors, missing env (if required for your change), then commit and push again.

---

## Tips

**Selective staging**  
If you have local-only files (notes, backups) that should not ship, use `git add <path>` for specific paths instead of `git add -A`. Always run `git status` before `git commit`.

**Project log (optional)**  
If you maintain **`DEVELOPMENT_LOG.md`** in the parent `quality_projects/` folder, you can add the commit hash and a one-line note after a production deploy—purely for your own records; it is not required for Vercel.

---

*Derived from the structure of `docs/COMMIT_AND_PUSH.md` in the davidlong.tech (Research Studio) project, simplified for this single-repo, Vercel-only site.*
