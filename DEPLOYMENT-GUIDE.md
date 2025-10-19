# Deployment Guide for CRC Educational Website

This guide will walk you through deploying your CRC educational website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- The project files (already created)

## Step-by-Step Deployment Instructions

### Step 1: Personalize Your Site

Before deploying, update your name in two files:

1. **Open `src/components/Footer.jsx`**
   - Find line with `Mark [Last Name]`xxxxxxxxxxxxx
   - Replace with your full name  xxxxxxxxxx

2. **Open `src/pages/Home.jsx`**
   - Find line with `Mark [Last Name]`  xxxxxxxxxxxxxx
   - Replace with your full name xxxxxxxxxx

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name:** `crc-educational-site` (or your preferred name)
   - **Description:** "Educational website about CRC error checking for INF680"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### Step 3: Update Base Path

1. **Open `vite.config.js`**
2. Find this line:
   ```javascript
   base: '/crc-educational-site/',
   ```
3. Change `crc-educational-site` to match your repository name
4. Save the file

### Step 4: Initialize Git and Push to GitHub

Open PowerShell/Terminal in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: CRC educational website"

# Set main branch
git branch -M main

# Add your GitHub repository as remote (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/crc-educational-site.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. That's it! GitHub Actions will automatically build and deploy your site

### Step 6: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, you'll see a green checkmark ✓

### Step 7: Access Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/crc-educational-site/
```

Replace `YOUR-USERNAME` with your GitHub username and `crc-educational-site` with your repo name.

## Troubleshooting

### Issue: 404 Page Not Found

**Solution:** Check that the `base` path in `vite.config.js` matches your repository name exactly.

### Issue: Blank Page

**Solution:** 
1. Check browser console for errors (F12)
2. Verify the `base` path is correct
3. Make sure GitHub Pages is set to "GitHub Actions" source

### Issue: Workflow Failed

**Solution:**
1. Go to Actions tab
2. Click on the failed workflow
3. Read the error message
4. Common fix: Make sure all files were committed and pushed

### Issue: CSS Not Loading

**Solution:** The `base` path in `vite.config.js` must match your repository name exactly, including capitalization.

## Making Updates After Initial Deployment

After your site is live, you can make changes and redeploy:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Description of your changes"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## Alternative: Deploy to Your Own Server

If you prefer to use your own server instead of GitHub Pages:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your web server** to serve the files from the `dist` directory

4. **Update `vite.config.js`:**
   - Change `base: '/crc-educational-site/'` to `base: '/'`
   - Rebuild: `npm run build`

## Submitting to Blackboard

Once your site is live:

1. Copy the full URL of your site
2. Test it in an incognito/private browser window
3. Submit the URL to your Blackboard assignment

**Example URL format:**
```
https://yourusername.github.io/crc-educational-site/
```

## Checklist Before Submission

- [ ] Your full name appears on the home page
- [ ] Your full name appears in the footer
- [ ] Date is correct (October 2025)
- [ ] All navigation links work
- [ ] CRC Calculator functions properly
- [ ] References page shows all 8 citations
- [ ] Site loads correctly on mobile devices
- [ ] Tested in incognito/private browser window
- [ ] URL submitted to Blackboard

## Need Help?

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Vite Documentation:** https://vitejs.dev/guide/
- **React Router Documentation:** https://reactrouter.com/

## Project Structure Reference

```
crc-educational-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    ← Navigation bar
│   │   └── Footer.jsx         ← UPDATE YOUR NAME HERE
│   ├── pages/
│   │   ├── Home.jsx           ← UPDATE YOUR NAME HERE
│   │   ├── Introduction.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Applications.jsx
│   │   ├── Calculator.jsx
│   │   └── References.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js             ← UPDATE BASE PATH HERE
├── package.json
└── README.md
```

## Tips for Success

1. **Test locally first:** Run `npm run dev` to test before deploying
2. **Check all pages:** Navigate through every page to ensure content displays correctly
3. **Mobile testing:** Check on your phone or use browser dev tools
4. **Proofread:** Check for typos in your content
5. **Citations:** Verify all references are properly formatted

---

**Good luck with your project!** 🚀
