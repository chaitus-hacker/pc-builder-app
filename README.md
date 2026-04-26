# 🖥️ PCraft - PC Builder & Laptop Recommender

A modern, full-stack web application that helps users build their dream PC or find the perfect laptop based on their budget and use case.

![PCraft Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=PCraft+-+Build+Your+Dream+PC)

## ✨ Features

### 🎯 Core Features
- **PC Build Wizard**: Step-by-step guided PC building experience
- **Laptop Recommender**: Smart laptop suggestions based on purpose and budget
- **Price Comparison**: Real-time price comparison across Amazon and Flipkart
- **Build Guide**: Comprehensive PC assembly instructions with safety tips
- **Product Comparison**: Side-by-side comparison of up to 3 products
- **Best Value Badges**: Highlighted recommendations for best price-to-performance

### 🎨 UI/UX
- **Light Theme**: Clean, modern design with soft gradients
- **3D Animations**: Smooth Three.js powered floating orbs
- **Glassmorphism**: Beautiful glass-effect cards and components
- **Framer Motion**: Buttery smooth page transitions and animations
- **Fully Responsive**: Perfect experience on mobile, tablet, and desktop

### 💡 Smart Recommendations
- **Purpose-Based**: Gaming, Editing, Office, or Studying
- **Budget-Aware**: Automatic tier selection (Budget, Mid-Range, High-End)
- **Component Matching**: Intelligent component pairing for compatibility
- **Price Tracking**: Lowest price highlighting across stores

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Lucide React** - Beautiful icon library
- **Recharts** - Charting library (for future price history)

### Styling
- **Custom CSS** - Tailored styles with CSS variables
- **Glassmorphism** - Modern glass-effect design
- **Gradient Text** - Eye-catching gradient typography

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Steps

1. **Clone or extract the project**
   ```bash
   cd pc-builder-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd pc-builder-app
   vercel
   ```

3. **Follow prompts**
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: pc-builder-app
   - Directory: ./
   - Override settings: No

4. **Production deployment**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to any static hosting service:
   - GitHub Pages
   - Cloudflare Pages
   - AWS S3 + CloudFront
   - Firebase Hosting

## 📁 Project Structure

```
pc-builder-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── PageWrapper.jsx
│   │   ├── ComponentCard.jsx
│   │   ├── LaptopCard.jsx
│   │   ├── FloatingOrb.jsx
│   │   ├── BudgetSlider.jsx
│   │   └── PurposeSelector.jsx
│   ├── data/            # Product database
│   │   └── components.js
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── PCBuilderPage.jsx
│   │   ├── LaptopPage.jsx
│   │   ├── BuildGuidePage.jsx
│   │   ├── ComparePage.jsx
│   │   └── OwnerPage.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🎯 Usage Guide

### Building a PC

1. Navigate to **Build PC** from the homepage
2. Select your **purpose** (Gaming, Editing, Office, Studying)
3. Set your **budget** using the slider
4. View **recommended components** with price comparisons
5. Click **Amazon** or **Flipkart** buttons to purchase

### Finding a Laptop

1. Navigate to **Buy a Laptop** from the homepage
2. Select your **purpose**
3. Set your **budget**
4. Browse **recommended laptops** with detailed specs
5. Compare prices and buy from your preferred store

### Assembly Guide

1. Navigate to **Build Guide**
2. Follow **11 step-by-step instructions**
3. Read **safety warnings** for each step
4. Check off steps as you complete them
5. Track your progress with the progress bar

### Comparing Products

1. Navigate to **Compare**
2. Select a category (CPUs, GPUs, Laptops)
3. Choose up to **3 products** to compare
4. View side-by-side specs and prices
5. Identify the best value option

## 🔧 Customization

### Adding New Components

Edit `src/data/components.js`:

```javascript
export const cpuData = {
  gaming: {
    budget: [
      {
        name: 'AMD Ryzen 5 5600',
        specs: '6-Core, 12-Thread, 3.5GHz Base',
        price: { amazon: 12999, flipkart: 12499 },
        img: '🔲',
        best: true
      },
      // Add more...
    ],
  },
}
```

### Changing Colors

Edit `src/index.css` and component inline styles:

```css
/* Primary gradient */
background: linear-gradient(135deg, #6366f1, #8b5cf6);

/* Accent colors */
--primary: #6366f1;
--secondary: #8b5cf6;
--accent: #06b6d4;
```

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

## 🐛 Troubleshooting

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check Node version (18+ required)
node --version

# Update dependencies
npm update
```

### 3D orb not rendering
- Ensure WebGL is enabled in your browser
- Update graphics drivers
- Try a different browser (Chrome/Firefox recommended)

## 📝 Future Enhancements

- [ ] User accounts and saved builds
- [ ] Price history graphs
- [ ] Build compatibility checker
- [ ] Community builds gallery
- [ ] Real-time API integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Export build as PDF
- [ ] Build cost calculator
- [ ] Component reviews and ratings

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Built with ❤️ by a passionate developer who loves PC hardware and web development.

- **GitHub**: [Your GitHub](https://github.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com)
- **Email**: developer@pcraft.com

## 🙏 Acknowledgments

- Component data sourced from various retailers
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
- 3D graphics powered by [Three.js](https://threejs.org)
- Animations by [Framer Motion](https://www.framer.com/motion)

---

**Note**: Prices shown are mock data for demonstration. For real-time pricing, integrate with actual e-commerce APIs.

Made with 💜 using React, Vite, and Three.js
