# Akash Kuppattil Portfolio Website

A modern, professional freelance portfolio website built with Next.js and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd akashkuppattil.dev
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Brevo API key (get it from [Brevo Dashboard](https://app.brevo.com/settings/keys/api))

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your actual API key:
```
BREVO_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment on Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Update project"
git push origin main
```

### Step 2: Configure Environment Variables in Vercel

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Key**: `BREVO_API_KEY`
   - **Value**: Your actual Brevo API key
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

### Step 3: Deploy
- Vercel will automatically deploy when you push to the main branch
- Or manually trigger a deployment from the Vercel dashboard

## 🛠️ Built With

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible components
- **Brevo (Sendinblue)** - Email service for contact form

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BREVO_API_KEY` | Brevo API key for contact form emails | Yes |

## 🔒 Security Note

- **Never** commit `.env.local` or any file containing actual API keys to Git
- The `.env.example` file is for documentation only and should not contain real credentials
- Always configure sensitive environment variables through your hosting platform's dashboard (e.g., Vercel Environment Variables)

## 📧 Contact Form

The contact form uses Brevo's transactional email API to:
1. Send enquiry notifications to you
2. Send auto-reply confirmation to the client

Make sure your Brevo account is properly configured with a verified sender email.

## 📄 License

This project is private and proprietary.
