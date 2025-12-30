# Deployment Guide for Algorithms of Quality Blog

## Prerequisites
- Vercel account (free tier is sufficient)
- GoDaddy domain: algorithmsofquality.com
- GitHub repository (recommended for continuous deployment)

## Phase 3: Deployment Setup

### Step 1: Prepare Project for Vercel
✅ **Completed:**
- Updated metadata base URL to `https://algorithmsofquality.com`
- Fixed title template typo ("Algorirthms" → "Algorithms")
- Updated site description to match project theme
- Created `vercel.json` configuration file with:
  - Build optimization settings
  - Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
  - Function timeout configuration
  - Regional deployment (sfo1)

### Step 2: Deploy to Vercel

#### Option A: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and use optimal settings
6. Click "Deploy"

#### Option B: Direct Upload
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Step 3: Configure Custom Domain

#### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Domains" tab
3. Add custom domain: `algorithmsofquality.com`
4. Add www subdomain: `www.algorithmsofquality.com`
5. Vercel will provide DNS configuration instructions

#### Expected DNS Records:
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Update GoDaddy DNS Settings

#### In GoDaddy Domain Management:
1. Log into GoDaddy account
2. Go to "My Products" → "Domains"
3. Click "DNS" next to algorithmsofquality.com
4. **Turn off GoDaddy "coming soon" page:**
   - Look for "Domain forwarding" or "Parked domain" settings
   - Disable any forwarding or parking
5. **Update DNS records:**
   - Delete existing A records pointing to GoDaddy
   - Add new A record: `@` → `76.76.19.19`
   - Add CNAME record: `www` → `cname.vercel-dns.com`
6. Save changes (propagation takes 24-48 hours)

### Step 5: Environment Variables (Optional)

If using PostgreSQL for redirects:
1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add `POSTGRES_URL` with your database connection string
3. Redeploy the project

### Step 6: Verification Checklist

After DNS propagation:
- [ ] `https://algorithmsofquality.com` loads correctly
- [ ] `https://www.algorithmsofquality.com` redirects to main domain
- [ ] All navigation links work (about, blog, quality-terms, writings)
- [ ] Mobile responsiveness works
- [ ] Dark/light mode toggle functions
- [ ] Vercel Analytics is tracking visits
- [ ] SSL certificate is active (https)

## Troubleshooting

### Common Issues:
1. **DNS not propagating**: Wait 24-48 hours, check with DNS checker tools
2. **SSL certificate issues**: Vercel auto-generates SSL, may take a few minutes
3. **Build failures**: Check build logs in Vercel dashboard
4. **404 errors**: Ensure all page routes are correctly configured

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GoDaddy DNS Help](https://www.godaddy.com/help/manage-dns-680)

## Post-Deployment

### Monitoring:
- Vercel Analytics dashboard for traffic insights
- Vercel Functions logs for any errors
- Core Web Vitals monitoring

### Future Updates:
- Push to GitHub repository for automatic deployments
- Use Vercel preview deployments for testing changes
- Monitor performance and optimize as needed

---

**Status**: Ready for deployment once build completes successfully
**Next Action**: Deploy to Vercel and configure custom domain
