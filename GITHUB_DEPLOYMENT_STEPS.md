# GitHub + Vercel Deployment Steps

## Current Status
✅ All code changes committed locally
✅ Production build tested and working
✅ Ready for GitHub repository setup

## Step 1: Check/Update GitHub Personal Access Token

### Option A: Classic PAT
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Check expiration date of existing tokens
3. If expired, click "Generate new token (classic)"
4. Select scopes: `repo` (full control of private repositories)
5. Copy the new token

### Option B: Fine-grained PAT
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Check expiration date of existing tokens
3. If expired, click "Generate new token"
4. Select repository access and permissions needed
5. Copy the new token

## Step 2: Create New GitHub Repository

1. Go to GitHub.com and click "New repository"
2. Repository name: `algorithms-of-quality-blog` (or your preferred name)
3. Description: "Algorithms of Quality blog - exploring software quality and engineering excellence"
4. Set to Public or Private (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have content)
6. Click "Create repository"
7. Copy the repository URL (e.g., `https://github.com/yourusername/algorithms-of-quality-blog.git`)

## Step 3: Update Git Remote (Run these commands)

```bash
cd next-mdx-blog

# Remove the old remote pointing to Lee Robinson's repo
git remote remove origin

# Add your new repository as origin (replace with your actual repo URL)
git remote add origin https://github.com/yourusername/algorithms-of-quality-blog.git

# Verify the new remote
git remote -v

# Push to your new repository
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your new GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait for deployment to complete

### Option B: Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy from project directory
cd next-mdx-blog
vercel

# Follow prompts to link to your account and deploy
```

## Step 5: Configure Custom Domain

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add domain: `algorithmsofquality.com`
4. Add www subdomain: `www.algorithmsofquality.com`
5. Vercel will provide DNS configuration instructions

## Step 6: Update GoDaddy DNS

1. Log into GoDaddy account
2. Go to "My Products" → "Domains"
3. Click "DNS" next to algorithmsofquality.com
4. **Turn off "coming soon" page**:
   - Look for "Domain forwarding" or "Parked domain" settings
   - Disable any forwarding or parking
5. **Update DNS records** (use values provided by Vercel):
   - Delete existing A records
   - Add new A record: `@` → `76.76.19.19` (or Vercel's current IP)
   - Add CNAME record: `www` → `cname.vercel-dns.com`
6. Save changes (DNS propagation takes 24-48 hours)

## Step 7: Verification

After DNS propagation:
- [ ] `https://algorithmsofquality.com` loads correctly
- [ ] `https://www.algorithmsofquality.com` redirects properly
- [ ] All navigation works (about, blog, quality-terms, writings)
- [ ] Mobile responsiveness functions
- [ ] Dark/light mode toggle works
- [ ] SSL certificate is active

## Troubleshooting

### Common Issues:
1. **PAT Authentication Failed**: Generate new token with correct permissions
2. **Push Rejected**: Check if repository exists and remote URL is correct
3. **Vercel Build Failed**: Check build logs in Vercel dashboard
4. **Domain Not Working**: Wait for DNS propagation (24-48 hours)

### Commands to Check Status:
```bash
# Check git status
git status

# Check remote configuration
git remote -v

# Check recent commits
git log --oneline -5

# Test local build
npm run build
```

---

**Next Action**: Create GitHub repository and update your PAT, then run the commands in Step 3.
