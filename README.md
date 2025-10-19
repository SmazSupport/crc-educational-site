# CRC Error Checking - Educational Website

An interactive educational website exploring Cyclic Redundancy Check (CRC) error detection methodology in data communications.

**Course:** INF680 - Data and Computer Communications  
**Student:** Mark [Last Name]  
**Date:** October 2025  
**Topic:** CRC Error Checking Methodology

## 📚 About This Project

This website was created as an undergraduate project to provide an in-depth educational resource about CRC error detection. It covers:

- **Introduction** - What CRC is, its history, and importance
- **How It Works** - Step-by-step technical explanation with examples
- **Applications** - Real-world uses in networking, storage, and communications
- **Interactive Calculator** - Try CRC calculations yourself
- **References** - Properly cited academic sources

## 🚀 Live Demo

Visit the live site: `[Your GitHub Pages URL will be here]`

## 💻 Technology Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/crc-educational-site.git
cd crc-educational-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This project includes GitHub Actions for automatic deployment.

1. **Create a GitHub repository** for this project

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

3. **Update the base path** in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',
   ```

4. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[your-repo-name].git
   git push -u origin main
   ```

5. **GitHub Actions will automatically build and deploy** your site!

Your site will be available at: `https://[your-username].github.io/[your-repo-name]/`

### Option 2: Manual Deployment

```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

## 📝 Project Structure

```
crc-educational-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Main navigation bar
│   │   └── Footer.jsx         # Footer with student info
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Introduction.jsx   # CRC introduction
│   │   ├── HowItWorks.jsx     # Technical details
│   │   ├── Applications.jsx   # Real-world uses
│   │   ├── Calculator.jsx     # Interactive CRC calculator
│   │   └── References.jsx     # Citations and sources
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── .github/workflows/         # GitHub Actions
└── package.json               # Dependencies
```

## 📖 References

All sources are properly cited on the References page of the website. Key references include:

- Stallings, W. (2013). *Data and Computer Communications* (10th ed.)
- IEEE 802.3 Ethernet Standard
- Peterson & Brown (1961). Cyclic Codes for Error Detection
- And more...

## ✅ Project Requirements Met

- ✓ Professional appearance with modern design
- ✓ Responsive layout for all devices
- ✓ Student name, date, and topic prominently displayed
- ✓ Minimum 4 academic references properly cited
- ✓ Educational content with depth and breadth
- ✓ Interactive features (CRC calculator)
- ✓ Logical organization and navigation
- ✓ Clean, readable design following web best practices

## 📄 License

This project was created for educational purposes as part of coursework at Fort Hays State University.

## 🙏 Acknowledgments

- Course: INF680 - Data and Computer Communications
- Textbook: *Data and Computer Communications* by William Stallings
- Fort Hays State University

---

**Note:** Remember to update your name in the Footer.jsx and Home.jsx files before deploying!
