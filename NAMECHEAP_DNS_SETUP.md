# 🌐 Namecheap DNS Setup for apegoon.fun

## Step-by-Step Instructions

### 1. Login to Namecheap
- Go to [namecheap.com](https://namecheap.com)
- Login to your account
- Go to "Domain List" or "My Account" → "Domain List"

### 2. Find Your Domain
- Find `apegoon.fun` in your domain list
- Click "Manage" next to your domain

### 3. Access DNS Settings
- Click on the "Advanced DNS" tab
- You should see a table with DNS records

### 4. Configure DNS Records

#### **Delete Existing Records (if any):**
- Delete any existing A records or CNAME records for the root domain

#### **Add These Records:**

**Record 1 - A Record for Root Domain:**
- Type: `A Record`
- Host: `@`
- Value: `185.199.108.153`
- TTL: `Automatic`

**Record 2 - A Record for Root Domain:**
- Type: `A Record`
- Host: `@`
- Value: `185.199.109.153`
- TTL: `Automatic`

**Record 3 - A Record for Root Domain:**
- Type: `A Record`
- Host: `@`
- Value: `185.199.110.153`
- TTL: `Automatic`

**Record 4 - A Record for Root Domain:**
- Type: `A Record`
- Host: `@`
- Value: `185.199.111.153`
- TTL: `Automatic`

### 5. Save Changes
- Click "Save All Changes" (green button)
- Wait 5-10 minutes for DNS propagation

### 6. Verify Setup
- Go back to your GitHub repository
- Go to Settings → Pages
- Under "Custom domain", enter: `apegoon.fun`
- Click "Save"
- Check "Enforce HTTPS" (this will be available after DNS propagates)

## Expected Timeline
- DNS changes: 5-10 minutes
- GitHub Pages recognition: 10-30 minutes
- Full propagation: Up to 24 hours

## Troubleshooting
- If it doesn't work immediately, wait 30 minutes and try again
- Make sure you have exactly 4 A records with the IPs above
- Don't add any CNAME records for the root domain (@)

## Your Site Will Be Live At:
**https://apegoon.fun**

## Alternative Method (if A records don't work):
If the A records don't work, try this instead:

**CNAME Record:**
- Type: `CNAME Record`
- Host: `www`
- Value: `cssbandit.github.io`
- TTL: `Automatic`

Then use `www.apegoon.fun` as your custom domain in GitHub Pages.
