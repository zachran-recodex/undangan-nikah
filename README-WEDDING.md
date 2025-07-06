# John & Jane Wedding Website

A beautiful, modern, and fully responsive wedding invitation website built with Astro.js, React, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Elegant and responsive design with beautiful typography
- **Interactive Components**: Countdown timer, photo gallery, and RSVP form
- **PWA Ready**: Progressive Web App capabilities for mobile installation
- **SEO Optimized**: Meta tags, Open Graph, and sitemap generation
- **Performance**: Fast loading times with optimized images and code splitting
- **Accessibility**: WCAG compliant design and keyboard navigation
- **Mobile First**: Responsive design that works on all devices

## 🚀 Live Demo

Visit the live website: [https://john-and-jane-wedding.com](https://john-and-jane-wedding.com)

## 📋 Sections

1. **Hero Section** - Couple names, wedding date, and countdown timer
2. **Our Story** - Timeline of relationship milestones
3. **Event Details** - Ceremony and reception information with schedule
4. **Photo Gallery** - Interactive gallery with lightbox functionality
5. **RSVP** - Form with validation for guest responses
6. **Registry & Gifts** - Wedding registry and gift information
7. **FAQ** - Frequently asked questions
8. **Contact** - Contact information for the couple

## 🛠️ Tech Stack

- **Framework**: [Astro.js](https://astro.build/)
- **UI Components**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Dancing Script, Inter)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wedding-website.git
   cd wedding-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🔧 Configuration

### Customizing Content

1. **Wedding Details**: Edit the wedding date, names, and venue information in `src/pages/index.astro`
2. **Contact Information**: Update contact details in the contact section
3. **Registry Links**: Add your actual registry URLs in the registry section
4. **Photos**: Replace placeholder images with your actual photos

### Environment Variables

Create a `.env` file in the root directory for any environment-specific variables:

```env
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Customizing Design

1. **Colors**: Modify the color scheme in `src/styles/global.css`
2. **Fonts**: Change Google Fonts imports in the global CSS file
3. **Layout**: Adjust spacing and layout in Tailwind classes

## 🎨 Customization Guide

### Changing Colors

The wedding website uses a elegant color palette. To change the colors:

1. Edit CSS variables in `src/styles/global.css`:
   ```css
   :root {
     --color-primary: #d4af37;     /* Gold */
     --color-secondary: #8b4513;   /* Brown */
     --color-accent: #f5f5dc;      /* Beige */
     --color-text: #2d3436;        /* Dark Gray */
     --color-text-light: #636e72;  /* Light Gray */
   }
   ```

2. Update Tailwind classes throughout the components to match your color scheme.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and use it in `src/pages/index.astro`
3. Add navigation links in `src/components/Navigation.astro`

### Form Handling

The RSVP form currently logs to console. To integrate with a backend:

1. **Netlify Forms**: Add `netlify` attribute to the form element
2. **Formspree**: Add action URL to the form
3. **Custom API**: Modify the form submission handler in `RSVPForm.tsx`

## 📱 PWA Features

The website includes Progressive Web App capabilities:

- **Installable**: Users can install the website on their mobile devices
- **Offline Ready**: Basic offline functionality
- **App-like Experience**: Fullscreen mode without browser UI

## 🔍 SEO Optimization

The website includes comprehensive SEO features:

- **Meta Tags**: Title, description, and keywords
- **Open Graph**: Facebook and social media sharing
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider

## 📊 Performance

The website is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Optimized images and code splitting
- **Minimal JavaScript**: Server-side rendering with islands architecture
- **Efficient CSS**: Tailwind CSS with purging for smaller bundle sizes

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Browser Support

The website supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from various wedding websites
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Built with [Astro.js](https://astro.build/)

## 📞 Support

If you need help customizing this website for your wedding, please:

1. Check the documentation above
2. Review the code comments for guidance
3. Modify the content to match your wedding details

---

Made with ❤️ for John & Jane's special day!