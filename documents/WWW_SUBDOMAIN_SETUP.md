# Adding www Subdomain to Vercel

## Current Issue
- ✅ `https://algorithmsofquality.com` - Working perfectly
- ❌ `https://www.algorithmsofquality.com` - SSL certificate error

## Why This Happens
When using Vercel nameservers, you need to add each subdomain (including www) in the Vercel dashboard for SSL certificates to be generated.

## Solution: Add www in Vercel Dashboard

### Step 1: Access Vercel Dashboard
1. **Go to**: https://vercel.com
2. **Sign in** to your account
3. **Navigate to**: Your "algorithmsofquality" project
4. **Click**: Settings → Domains

### Step 2: Add www Subdomain
1. **Click**: "Add" button
2. **Enter**: `www.algorithmsofquality.com`
3. **Click**: "Add"

### Step 3: Verify Configuration
After adding, you should see:
```
✅ algorithmsofquality.com → Valid Configuration
✅ www.algorithmsofquality.com → Valid Configuration
```

### Step 4: Wait for SSL Certificate
- **Time**: 5-10 minutes for SSL certificate generation
- **Status**: Check that both domains show "SSL Certificate: Active"

## Expected Result

After completion, both URLs will work with HTTPS:
- ✅ `https://algorithmsofquality.com`
- ✅ `https://www.algorithmsofquality.com`

## Alternative: Manual DNS Configuration

If you can't access the Vercel dashboard, you can manually add the CNAME record:

### In Vercel DNS (since you're using Vercel nameservers):
This needs to be done through the Vercel dashboard - you can't manually configure DNS when using Vercel nameservers.

## Troubleshooting

### If www Still Shows SSL Error:
1. **Wait longer** - SSL certificates can take up to 30 minutes
2. **Clear browser cache** and try again
3. **Check Vercel dashboard** - ensure both domains show "Valid"
4. **Try incognito/private browsing** to avoid cached SSL errors

### If You Can't Access Vercel Dashboard:
The CLI authentication issues suggest you may need to:
1. **Update your GitHub PAT** (Personal Access Token)
2. **Re-authenticate with Vercel CLI**: `vercel login`
3. **Try different browser** for Vercel dashboard access

## Current Status
- **Main Domain**: ✅ Working perfectly
- **WWW Subdomain**: 🔄 Needs to be added in Vercel dashboard
- **Next Action**: Add www.algorithmsofquality.com in Vercel dashboard

---

**Note**: Since you're using Vercel nameservers, all DNS management must be done through Vercel's dashboard, not GoDaddy.
