# EarnFlow Store - Next.js Application

A modern Next.js application for distributing the EarnFlow APK file, converted from a static Google Play Store page.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Direct APK Downloads**: Bypasses Google Play Store with direct download functionality
- **User-Friendly Interface**: Clean, modern UI inspired by Google Play Store
- **Installation Guide**: Step-by-step instructions for Android users
- **Progress Indicators**: Loading states and notifications for better UX

## 📱 Functionality

### Core Features
- **App Information Display**: Shows app details, ratings, and screenshots
- **Download Management**: Multiple download methods with fallbacks
- **Installation Guidance**: In-app guide for Android installation
- **Security Notifications**: User alerts for download status

### Technical Features
- **Static Asset Optimization**: Efficient serving of APK files and images
- **Component-Based Architecture**: Modular, reusable React components
- **TypeScript Safety**: Full TypeScript implementation
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Deployment**: Compatible with Vercel, Netlify, and other platforms

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── AppHeader.tsx      # Application header
│   ├── AppInfo.tsx        # App information section
│   ├── InstallButton.tsx  # Download functionality
│   ├── InstallGuide.tsx   # Installation instructions
│   └── Notification.tsx   # User notifications
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
public/
├── earnflow.apk         # The downloadable APK
├── images/               # Static images
│   ├── logo.png         # App icon
│   └── ...
└── fonts/               # Font files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd earnflow-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage Instructions

### For Users
1. Click the "Install" button to download the EarnFlow APK
2. Follow the on-screen installation guide
3. Enable "Install from unknown sources" in device settings
4. Install the downloaded APK file
5. Launch EarnFlow and start using

### For Developers
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`

## 🔧 Configuration

### APK File
- Location: `public/earnflow.apk`
- Served from: `/earnflow.apk` (root path)
- Update the APK path in JavaScript files if changing the file location

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Custom colors defined for Google Play theme

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. No additional configuration required

### Other Platforms
- **Netlify**: Compatible with static export
- **Docker**: Can be containerized
- **Traditional Hosting**: Build with `npm run build` and serve the `.next` folder

## 🔒 Security Features

- **Verified APK**: Only official EarnFlow files distributed
- **Security Notifications**: Users warned about installation process
- **Direct Downloads**: No third-party tracking or redirects
- **HTTPS Ready**: Secure connections for production

## 🐛 Troubleshooting

### Common Issues

1. **Download not starting**
   - Check if `earnflow.apk` exists in `public/`
   - Verify file permissions

2. **Styling issues**
   - Run `npm install` to ensure all dependencies are installed
   - Check Tailwind CSS configuration

3. **Build errors**
   - Verify TypeScript types
   - Check for missing imports

## 📄 License

This project maintains the same licensing as the original EarnFlow distribution.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues related to:
- **Application functionality**: Open a GitHub issue
- **EarnFlow app**: Contact Soft Reward support
- **APK installation**: Refer to the in-app guide

---

**Built with ❤️ using Next.js and Tailwind CSS**# referralhai
