# Custom Domain Setup Guide: algorithmsofquality.com → Vercel

## Overview
Connect your GoDaddy domain `algorithmsofquality.com` to your Vercel deployment.

## Current Status
- ✅ **Vercel Project**: `algorithmsofquality` deployed successfully
- ✅ **Live URLs**: https://algorithmsofquality.vercel.app
- 🔄 **Custom Domain**: algorithmsofquality.com (needs configuration)

---

## Step 1: Add Domain in Vercel Dashboard

### Option A: Web Dashboard (Recommended)
1. **Login to Vercel**:
   - Go to https://vercel.com and sign in
   - Navigate to your project: `algorithmsofquality`

2. **Access Domain Settings**:
   - Click on your project name
   - Go to "Settings" tab
   - Click "Domains" in the left sidebar

3. **Add Custom Domain**:
   - Click "Add" button
   - Enter: `algorithmsofquality.com`
   - Click "Add"
   - Also add: `www.algorithmsofquality.com`

### Option B: CLI Alternative (if web fails)
```bash
cd next-mdx-blog
vercel domains add algorithmsofquality.com --scope david-longs-projects-14094a66
vercel domains add www.algorithmsofquality.com --scope david-longs-projects-14094a66
```

---

## Step 2: Get DNS Configuration from Vercel

After adding the domain, Vercel will provide DNS records. You'll typically see:

### Expected DNS Records:
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Note**: The exact IP address may vary. Use the values Vercel provides.

---

## Step 3: Configure GoDaddy DNS

### Access GoDaddy DNS Management:
1. **Login to GoDaddy**:
   - Go to https://godaddy.com
   - Sign in to your account

2. **Navigate to DNS**:
   - Go to "My Products" → "All Products and Services"
   - Find "algorithmsofquality.com"
   - Click "DNS" button next to the domain

### Turn Off GoDaddy Parking/Forwarding:
1. **Remove "Coming Soon" Page**:
   - Look for "Forwarding" section
   - If domain is "Parked" or has forwarding enabled, disable it
   - Delete any existing forwarding rules

2. **Check Domain Forwarding**:
   - Ensure no forwarding is set up
   - Domain should point to DNS records, not forwarding

### Update DNS Records:
1. **Delete Existing A Records**:
   - Find existing A records pointing to GoDaddy parking
   - Delete them (usually pointing to GoDaddy IPs)

2. **Add New A Record**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19 (use Vercel's provided IP)
   TTL: 600 (or default)
   ```

3. **Add CNAME Record**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600 (or default)
   ```

4. **Save Changes**:
   - Click "Save" or "Save Changes"
   - Changes may take a few minutes to apply in GoDaddy interface

---

## Step 4: Verification and Testing

### DNS Propagation Check:
- **Time Required**: 24-48 hours for full propagation
- **Quick Check**: 15-30 minutes for initial propagation

### Test Commands:
```bash
# Check A record
dig algorithmsofquality.com

# Check CNAME record  
dig www.algorithmsofquality.com

# Check from different DNS servers
nslookup algorithmsofquality.com 8.8.8.8
```

### Online Tools:
- https://dnschecker.org
- https://whatsmydns.net
- Enter `algorithmsofquality.com` to check global propagation

---

## Step 5: Verify in Vercel

### Check Domain Status:
1. **Vercel Dashboard**:
   - Go to Project → Settings → Domains
   - Domain should show "Valid Configuration" or similar
   - SSL certificate should be "Active"

2. **CLI Check**:
   ```bash
   cd next-mdx-blog
   vercel domains ls
   ```

### Expected Results:
- ✅ `algorithmsofquality.com` → Valid
- ✅ `www.algorithmsofquality.com` → Valid  
- ✅ SSL Certificate → Active

---

## Step 6: Final Testing

### Test URLs:
Once DNS propagates, test these URLs:

1. **Primary Domain**: https://algorithmsofquality.com
2. **WWW Subdomain**: https://www.algorithmsofquality.com
3. **HTTP Redirect**: http://algorithmsofquality.com (should redirect to HTTPS)

### Functionality Checklist:
- [ ] Homepage loads with "Algorithms of Quality" title
- [ ] Navigation menu works (about, blog, quality terms, writings)
- [ ] All pages accessible
- [ ] HTTPS certificate active (green lock icon)
- [ ] Mobile responsive design working
- [ ] Footer links functional

---

## Troubleshooting

### Common Issues:

1. **"Domain not found" Error**:
   - Wait longer for DNS propagation (up to 48 hours)
   - Check DNS records are correctly configured
   - Verify GoDaddy parking/forwarding is disabled

2. **SSL Certificate Issues**:
   - Vercel auto-generates SSL certificates
   - May take 5-10 minutes after DNS propagation
   - Check Vercel dashboard for certificate status

3. **403/404 Errors**:
   - Ensure DNS points to correct Vercel servers
   - Check domain is properly added in Vercel project
   - Verify no conflicting DNS records

4. **Redirect Loops**:
   - Check for conflicting forwarding rules in GoDaddy
   - Ensure only DNS records are configured, no forwarding

### Support Resources:
- [Vercel Custom Domains Documentation](https://vercel.com/docs/concepts/projects/custom-domains)
- [GoDaddy DNS Management Help](https://www.godaddy.com/help/manage-dns-680)

---

## Quick Reference

### Current Vercel URLs (working now):
- https://algorithmsofquality.vercel.app
- https://algorithmsofquality-david-longs-projects-14094a66.vercel.app

### Target Custom URLs (after setup):
- https://algorithmsofquality.com
- https://www.algorithmsofquality.com

### Next Action:
**Start with Step 1** - Add the domain in Vercel dashboard, then proceed through the steps sequentially.
