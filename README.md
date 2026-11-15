# Kavya Shah — Personal Portfolio

A premium, production-ready personal portfolio website for Kavya Shah — BSc Data Science student at Ca' Foscari University of Venice.

## 🎯 Overview

This portfolio showcases:
- **Academic background** — Ca' Foscari University of Venice, BSc Data Science
- **Technical skills** — Python, SQL, MySQL, Data Analysis, Data Cleaning, Reporting
- **Professional experience** — Data Analyst Intern at Digitattva Technolabs
- **Featured projects** — Data Analysis Portfolio, VitaVerse healthcare platform concept
- **Startup venture** — VitaVerse: AI-powered digital health platform
- **Career interests** — AI/ML, Healthcare Technology, International Innovation, Social Impact

## 🎨 Design System

- **Typography**: Playfair Display (headings) + DM Sans (body) + JetBrains Mono (code)
- **Color Palette**: Stone/Slate neutral base with Emerald accent
- **Spacing**: 4px base unit with systematic scale (4px → 192px)
- **Animations**: Framer Motion with reduced-motion support
- **Responsive**: Mobile-first, breakpoints at 640/768/1024/1280/1536px
- **Accessibility**: WCAG AA compliant, keyboard navigation, focus management

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Native HTML5 with validation
- **Fonts**: Google Fonts (Playfair Display, DM Sans, JetBrains Mono)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kavya-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & design tokens
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Navigation.tsx    # Responsive navigation with theme toggle
│   ├── Hero.tsx          # Hero section with CTAs
│   ├── About.tsx         # About me with interests & facts
│   ├── Skills.tsx        # Technical & soft skills
│   ├── Experience.tsx    # Timeline-based experience
│   ├── Projects.tsx      # Featured projects showcase
│   ├── VitaVerse.tsx     # Startup concept detail
│   ├── Education.tsx     # Academic timeline
│   ├── CareerInterests.tsx # Career focus areas
│   ├── Contact.tsx       # Contact form & info
│   └── Footer.tsx        # Site footer
├── lib/
│   ├── data.ts           # Portfolio content data
│   └── utils.ts          # Utility functions
public/
├── cv.pdf                # Resume download
├── projects/             # Project preview images
├── robots.txt
└── sitemap.xml
```

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast ratios (WCAG AA)
- Reduced motion support
- Screen reader friendly
- Alt text for all images

## 🌙 Dark Mode

- System preference detection
- Manual toggle with persistence
- Smooth transitions
- All components support both themes

## 📱 Responsive Design

- Mobile-first approach
- Fluid typography with `clamp()`
- Flexible grid layouts
- Touch-friendly targets (44px minimum)
- Optimized for 375px → 1536px+

## 🔧 Customization

### Content
Edit `src/lib/data.ts` to update:
- Personal information
- About section content
- Skills and proficiency levels
- Experience entries
- Projects
- Education history
- Career interests

### Styling
Modify `tailwind.config.ts` for:
- Color palette
- Typography scale
- Spacing system
- Animation durations
- Border radius scale

### Fonts
Update `src/app/layout.tsx` to change font families.

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own portfolio.

## 🤝 Contact

- **Email**: kavyasshah2006@gmail.com
- **LinkedIn**: [linkedin.com/in/kavyashah](https://linkedin.com/in/kavyashah)
- **GitHub**: [github.com/kavyashah](https://github.com/kavyashah)
- **Location**: Venice, Italy