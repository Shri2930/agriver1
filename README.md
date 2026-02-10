# Agri-BioFuels Global Ltd. Website

A modern, responsive website for Agri-BioFuels Global Ltd., showcasing sustainable fuel production from agricultural waste using CAT-HTR technology.

## 🚀 Project Overview

This is a React-based website built with TypeScript, Vite, and Tailwind CSS. The site features:

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: AI chat assistant, animated counters, particle effects
- **Performance Optimized**: Fast loading with code splitting and optimization
- **Production Ready**: Configured for Vercel deployment

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Deployment**: Vercel
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Button, AnimatedCounter)
│   ├── animations/      # Animation components (ParticleSystem)
│   ├── ai/             # AI chat functionality
│   ├── modals/         # Modal components
│   └── [SectionComponents] # Main page sections
├── pages/              # Page components
├── assets/             # Static assets (images, logos)
├── lib/               # Utility libraries (removed Supabase)
├── index.css          # Global styles and Tailwind imports
└── main.tsx           # Application entry point

public/                # Static public assets
supabase/             # Database migrations (not currently used)
```

## 🏗 Key Components

### Main Sections
- **HeroSection**: Landing area with background slideshow
- **AboutSection**: Company information and leadership
- **TechnologySection**: CAT-HTR technology explanation
- **ImpactSection**: Environmental and economic impact
- **ImplementationSection**: Timeline and deployment strategy
- **PartnershipsSection**: Strategic partners and certifications
- **SDGAlignmentSection**: UN Sustainable Development Goals alignment
- **NewsSection**: Press releases and resources
- **ContactSection**: Contact form and information

### Interactive Features
- **AIChat**: Floating chat assistant with predefined responses
- **IntroLoader**: Animated loading screen with company branding
- **ParticleSystem**: Dynamic background animations
- **AnimatedCounter**: Smooth number animations
- **PartnerModal**: Multi-step partnership application form

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd agri-biofuels-website
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
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes
The project uses a consistent design system:

- **Colors**: Green palette (`green-50` to `green-950`)
- **Spacing**: 8px grid system
- **Typography**: Inter font family
- **Shadows**: Consistent shadow system with green tints

### Component Patterns
- Use `Button` component for all buttons with variants: `primary`, `secondary`, `outline`, `text`
- Consistent section padding: `py-20`
- Container max-width: `container mx-auto px-4 md:px-6`

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin setup
- Build optimizations
- Code splitting configuration
- Asset handling

### Tailwind Configuration (`tailwind.config.js`)
- Content paths
- Custom theme extensions
- Plugin configurations

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking
- Modern ES features
- React JSX support

### Vercel Configuration (`vercel.json`)
- SPA routing support
- Build settings
- Framework detection

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🎭 Animation System

### Framer Motion
Used for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

### Custom Animations
- **ParticleSystem**: Canvas-based particle effects
- **AnimatedCounter**: Smooth number counting
- **CSS Animations**: Custom keyframes in `index.css`

## 🤖 AI Chat Assistant

The AI chat component provides:
- Contextual responses about the company
- Keyword-based response matching
- Minimizable interface
- Message history

### Adding New Responses
Edit `src/components/ai/AIChat.tsx` and add to the `aiResponses` array:

```typescript
{
  keywords: ['keyword1', 'keyword2'],
  response: "Your response text here"
}
```

## 📊 Performance Optimization

### Build Optimizations
- Code splitting by route and vendor
- Tree shaking for unused code
- Asset optimization
- Lazy loading for images

### Bundle Analysis
- Manual chunk splitting in `vite.config.ts`
- Vendor libraries separated
- Icon libraries optimized

## 🚀 Deployment

### Vercel Deployment
The site is configured for automatic Vercel deployment:

1. **Connect Repository**: Link your Git repository to Vercel
2. **Auto Deploy**: Pushes to main branch trigger deployments
3. **Environment**: Production builds use optimized settings

### Manual Deployment
```bash
npm run build        # Create production build
npm run preview      # Test production build locally
```

## 🔍 SEO & Meta Tags

- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for images
- Meta descriptions
- Open Graph tags (can be added)

## 🧪 Testing Guidelines

### Component Testing
- Test user interactions
- Verify responsive behavior
- Check accessibility features

### Performance Testing
- Lighthouse audits
- Core Web Vitals
- Bundle size monitoring

## 🔧 Development Workflow

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Consistent naming conventions
- Component composition over inheritance

### Git Workflow
- Feature branches for new development
- Descriptive commit messages
- Pull request reviews
- Automated deployment on merge

## 📝 Content Management

### Updating Content
Most content is hardcoded in components. To update:

1. **Text Content**: Edit component files directly
2. **Images**: Replace files in `src/assets/` or update URLs
3. **Data**: Modify arrays/objects in component files

### Adding New Sections
1. Create component in `src/components/`
2. Add to `HomePage.tsx`
3. Update navigation in `Navbar.tsx`
4. Add scroll target ID

## 🐛 Troubleshooting

### Common Issues

**White Screen on Deployment**
- Check build logs for errors
- Verify all imports are correct
- Ensure assets are properly referenced

**Styling Issues**
- Verify Tailwind classes are correct
- Check responsive breakpoints
- Validate CSS syntax

**Performance Issues**
- Analyze bundle size
- Check for memory leaks in animations
- Optimize images and assets

### Debug Mode
Enable development tools:
```bash
npm run dev -- --debug
```

## 🤝 Contributing

### Adding New Features
1. Create feature branch
2. Implement with TypeScript
3. Add responsive design
4. Test across devices
5. Update documentation
6. Submit pull request

### Code Review Checklist
- [ ] TypeScript types are correct
- [ ] Responsive design works
- [ ] Accessibility standards met
- [ ] Performance impact considered
- [ ] Documentation updated

## 📞 Support

For technical questions or issues:
1. Check this documentation
2. Review component code and comments
3. Test in development environment
4. Check browser console for errors

## 🔮 Future Enhancements

Potential improvements:
- [ ] Content Management System integration
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Blog functionality
- [ ] User authentication
- [ ] Database integration (Supabase ready)
- [ ] E-commerce features
- [ ] Advanced SEO optimization

## 📄 License

[Add your license information here]

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Maintainer**: [Your Team Name]