# GoDaddy DNS Configuration for algorithmsofquality.com

## Current Status
- ✅ **Domain Added in Vercel**: algorithmsofquality.com is added to your Vercel project
- ❌ **DNS Configuration**: "Invalid configuration" - waiting for GoDaddy DNS setup
- 🎯 **Next Step**: Configure DNS records in GoDaddy

## Step-by-Step GoDaddy DNS Setup

### Step 1: Get DNS Records from Vercel
1. In your Vercel dashboard, click "View DNS Records & More for algorithmsofquality.com"
2. Copy the exact DNS records Vercel provides (they should look like this):

**Your Vercel DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 60

Nameservers: ns1.vercel-dns.com, ns2.vercel-dns.com
```

## Choose Your DNS Configuration Method:

### Option A: Use Vercel Nameservers (RECOMMENDED)
**Easiest approach - let Vercel manage all DNS**

1. **Login to GoDaddy**: Go to https://godaddy.com
2. **Navigate to Domains**: 
   - Click "My Products" → "All Products and Services"
   - Find "algorithmsofquality.com"
   - Click "DNS" button next to the domain

3. **Change Nameservers**:
   - Look for "Nameservers" section
   - Change from GoDaddy nameservers to:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - Click "Save"

**That's it!** Vercel will handle all DNS automatically.

### Option B: Keep GoDaddy DNS (Manual Configuration)
**If you prefer to keep GoDaddy as DNS provider**

1. **Remove Existing Records**:
   - Delete any A records pointing to GoDaddy parking IPs
   - Remove any domain forwarding rules

2. **Add A Record**:
   - Type: A
   - Name: @ (root domain)
   - Value: 76.76.21.21 (your exact Vercel IP)
   - TTL: 60 (or 600)
   - Click "Save"

**Note**: No CNAME record needed since you only added the root domain in Vercel.

### Step 5: Save and Wait
1. **Save Changes**: Click "Save" or "Save All Changes"
2. **Wait for Propagation**: 
   - Initial: 15-30 minutes
   - Full propagation: Up to 48 hours

## Verification Steps

### Check DNS Propagation:
```bash
# Check A record
dig algorithmsofquality.com

# Check CNAME record
dig www.algorithmsofquality.com

# Check with Google DNS
nslookup algorithmsofquality.com 8.8.8.8
```

### Online Tools:
- https://dnschecker.org - Enter "algorithmsofquality.com"
- https://whatsmydns.net - Check global propagation

### Expected Results:
```
algorithmsofquality.com → 76.76.19.19 (or Vercel's IP)
www.algorithmsofquality.com → cname.vercel-dns.com
```

## Vercel Status Check

After DNS propagation (15-30 minutes):
1. **Return to Vercel Dashboard**
2. **Check Domain Status**: Should change from "Invalid configuration" to "Valid"
3. **SSL Certificate**: Should show "Active" 
4. **Test URLs**:
   - https://algorithmsofquality.com
   - https://www.algorithmsofquality.com

## Troubleshooting

### If Still "Invalid Configuration":
1. **Double-check DNS records** in GoDaddy match Vercel exactly
2. **Wait longer** - DNS can take up to 48 hours
3. **Clear browser cache** and try again
4. **Check for typos** in DNS record values

### Common Issues:
- **Forgot to delete old A records** - Remove GoDaddy parking records
- **Wrong IP address** - Use exact IP from Vercel dashboard
- **TTL too high** - Use 600 or lower for faster propagation
- **Forwarding still active** - Ensure domain forwarding is disabled

## Quick Reference

### Current Working URLs:
- https://algorithmsofquality.vercel.app ✅
- https://algorithmsofquality-david-longs-projects-14094a66.vercel.app ✅

### Target URLs (after DNS setup):
- https://algorithmsofquality.com 🎯
- https://www.algorithmsofquality.com 🎯

---

**Next Action**: Configure the DNS records in GoDaddy using the exact values from your Vercel dashboard.
