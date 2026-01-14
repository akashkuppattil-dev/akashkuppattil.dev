# Vercel Deployment Guide

## ⚠️ Important: Configure Environment Variables

Your `.env.local` file is **NOT** pushed to GitHub (and shouldn't be) for security reasons. 
You need to manually configure environment variables in Vercel.

## 📋 Steps to Configure Vercel

### 1. Access Your Vercel Project
- Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
- Select your project: `akashkuppattil.dev`

### 2. Navigate to Environment Variables
- Click on **Settings** (in the top navigation)
- Click on **Environment Variables** (in the left sidebar)

### 3. Add the Brevo API Key
Click "Add New" and enter:

| Field | Value |
|-------|-------|
| **Key** | `BREVO_API_KEY` |
| **Value** | Your actual Brevo API key from [app.brevo.com](https://app.brevo.com/settings/keys/api) |
| **Environment** | ✅ Production<br>✅ Preview<br>✅ Development |

### 4. Save and Redeploy
- Click **Save**
- Go to **Deployments** tab
- Click on the three dots (...) next to your latest deployment
- Select **Redeploy**

## 🎯 How to Get Your Brevo API Key

1. Log in to [Brevo Dashboard](https://app.brevo.com)
2. Go to **Settings** → **API Keys**
3. Copy your **API Key** (v3)
4. Paste it into Vercel as shown above

## ✅ Verification

After redeployment:
1. Visit your live website
2. Test the contact form
3. You should receive:
   - An enquiry email to `tombogy52@gmail.com`
   - An auto-reply sent to the person who filled the form

## 🔐 Security Best Practices

- ✅ **DO**: Store sensitive keys in Vercel Environment Variables
- ✅ **DO**: Keep `.env.local` in `.gitignore`
- ✅ **DO**: Use `.env.example` to document required variables
- ❌ **DON'T**: Commit `.env.local` to GitHub
- ❌ **DON'T**: Share API keys in public repositories

---

## 📞 Need Help?

If the contact form isn't working after deployment:
1. Check Vercel build logs for errors
2. Verify the `BREVO_API_KEY` is correctly set
3. Ensure your Brevo sender email is verified
4. Check the browser console for client-side errors
