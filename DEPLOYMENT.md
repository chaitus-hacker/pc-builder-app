# 🚀 Deployment Guide - PCraft

This guide covers multiple deployment options for your PC Builder & Laptop Recommender application.

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install --legacy-peer-deps`)
- [ ] Build succeeds without errors (`npm run build`)
- [ ] Application runs locally (`npm run dev`)
- [ ] All pages load correctly
- [ ] 3D animations render properly
- [ ] Price comparison links work

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration for Vite/React apps
- Automatic HTTPS
- Global CDN
- Free tier available
- Instant deployments

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd pc-builder-app
   vercel
   ```

4. **Answer prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `pc-builder-app` (or your choice)
   - Directory: `./`
   - Override settings: `N`

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

6. **Your app is live!** 🎉
   - URL: `https://pc-builder-app.vercel.app` (or custom domain)

**Continuous Deployment:**
- Connect GitHub repository in Vercel dashboard
- Auto-deploy on every push to main branch

---

### Option 2: Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Form handling
- Serverless functions
- Free tier with generous limits

**Method A: Netlify CLI**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Method B: Drag & Drop**

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! Your site is live

**Method C: Git Integration**

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/pc-builder-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/pc-builder-app/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

### Option 4: Cloudflare Pages

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

3. **Login**
   ```bash
   wrangler login
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=pc-builder-app
   ```

**Or use Cloudflare Dashboard:**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect Git repository
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy!

---

### Option 5: Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select: Hosting
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub auto-deploy: Optional

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

---

### Option 6: AWS S3 + CloudFront

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - Go to AWS S3 Console
   - Create bucket (e.g., `pc-builder-app`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html` (for SPA routing)

3. **Upload files**
   - Upload all files from `dist` folder
   - Set public read permissions

4. **Create CloudFront distribution**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Custom error responses: 404 → /index.html (200)

5. **Access your site**
   - CloudFront URL: `https://d111111abcdef8.cloudfront.net`
   - Or configure custom domain

---

### Option 7: Docker + Any Cloud

**Create Dockerfile:**

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Create nginx.conf:**

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Build and run:**

```bash
docker build -t pc-builder-app .
docker run -p 80:80 pc-builder-app
```

**Deploy to:**
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform
- Heroku Container Registry

---

## 🔧 Environment Variables

If you add API integrations later, create `.env` file:

```env
VITE_AMAZON_API_KEY=your_key_here
VITE_FLIPKART_API_KEY=your_key_here
VITE_API_BASE_URL=https://api.example.com
```

**Important:** 
- Prefix with `VITE_` for Vite to expose them
- Never commit `.env` to Git
- Set environment variables in deployment platform

---

## 🎯 Performance Optimization

### Before Deployment:

1. **Code Splitting**
   - Already implemented via React Router
   - Consider lazy loading heavy components

2. **Image Optimization**
   - Use WebP format
   - Compress images
   - Use CDN for assets

3. **Bundle Analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```
   Add to `vite.config.js`:
   ```javascript
   import { visualizer } from 'rollup-plugin-visualizer'
   
   export default defineConfig({
     plugins: [react(), visualizer()]
   })
   ```

4. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Aim for 90+ scores

---

## 🔒 Security Checklist

- [ ] Remove console.logs from production
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Set security headers
- [ ] Validate all user inputs
- [ ] Use Content Security Policy (CSP)
- [ ] Keep dependencies updated

---

## 📊 Monitoring & Analytics

### Add Google Analytics:

1. **Install**
   ```bash
   npm install react-ga4
   ```

2. **Initialize in main.jsx**
   ```javascript
   import ReactGA from 'react-ga4'
   ReactGA.initialize('G-XXXXXXXXXX')
   ```

### Add Sentry (Error Tracking):

1. **Install**
   ```bash
   npm install @sentry/react
   ```

2. **Initialize**
   ```javascript
   import * as Sentry from "@sentry/react"
   Sentry.init({ dsn: "your-dsn" })
   ```

---

## 🐛 Troubleshooting

### Build fails with "out of memory"
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### 404 on page refresh
- Configure server to redirect all routes to index.html
- Already handled in most platforms

### 3D animations not working
- Check WebGL support
- Ensure Three.js loaded correctly
- Check browser console for errors

### Slow initial load
- Enable gzip compression
- Use CDN
- Implement code splitting
- Lazy load Three.js components

---

## 📱 Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### Cloudflare:
1. Add site to Cloudflare
2. Update nameservers
3. Configure DNS records

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install --legacy-peer-deps
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📈 Post-Deployment

1. **Test all features**
   - PC Builder flow
   - Laptop Recommender
   - Build Guide
   - Compare page
   - Contact form

2. **Check performance**
   - Run Lighthouse audit
   - Test on mobile devices
   - Check loading times

3. **Monitor errors**
   - Set up error tracking
   - Check console logs
   - Monitor user feedback

4. **SEO Optimization**
   - Add meta tags
   - Create sitemap.xml
   - Submit to Google Search Console

---

## 🎉 Success!

Your PC Builder app is now live! Share it with the world:

- 🔗 Add to portfolio
- 📱 Share on social media
- 💼 Add to LinkedIn
- 🌟 Get feedback from users

---

**Need help?** Check the main README.md or open an issue on GitHub.

Happy deploying! 🚀
