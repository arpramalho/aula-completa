# Guia de Implementação Técnica - Design System Moderno

## 1. Estrutura de Arquivos Renovada

### 1.1 Organização Geral
```
src/
├── app/
│   ├── globals.css                 # Estilos globais renovados
│   ├── layout.tsx                  # Layout principal
│   └── page.tsx                    # Landing page renovada
├── components/
│   ├── ui/                         # Componentes base redesenhados
│   │   ├── button.tsx              # Sistema de botões moderno
│   │   ├── card.tsx                # Cards elegantes
│   │   ├── input.tsx               # Inputs refinados
│   │   ├── badge.tsx               # Badges minimalistas
│   │   ├── avatar.tsx              # Avatars modernos
│   │   ├── dialog.tsx              # Modais redesenhados
│   │   ├── dropdown.tsx            # Dropdowns fluidos
│   │   ├── toast.tsx               # Notificações elegantes
│   │   └── skeleton.tsx            # Loading states
│   ├── navigation/                 # Navegação redesenhada
│   │   ├── header.tsx              # Header moderno
│   │   ├── footer.tsx              # Footer minimalista
│   │   ├── sidebar.tsx             # Sidebar fluida
│   │   └── breadcrumb.tsx          # Breadcrumbs elegantes
│   ├── landing/                    # Seções da landing renovadas
│   │   ├── hero-section.tsx        # Hero impactante
│   │   ├── benefits-section.tsx    # Benefícios visuais
│   │   ├── ai-demo-section.tsx     # Demo interativa
│   │   ├── testimonials-section.tsx # Depoimentos elegantes
│   │   └── cta-section.tsx         # CTA conversivo
│   └── common/                     # Componentes comuns
│       ├── loading-spinner.tsx     # Spinners modernos
│       ├── empty-state.tsx         # Estados vazios
│       └── error-boundary.tsx      # Tratamento de erros
├── lib/
│   ├── utils.ts                    # Utilitários atualizados
│   └── animations.ts               # Animações customizadas
├── styles/
│   ├── components.css              # Estilos de componentes
│   └── animations.css              # Animações CSS
└── public/
    └── images/
        └── logo-aula-completa.svg  # Logo existente
```

### 1.2 Convenções de Nomenclatura

#### Arquivos e Pastas
```
kebab-case.tsx          # Componentes
camelCase.ts            # Utilitários
PascalCase.tsx          # Componentes principais
```

#### Classes CSS
```
.component-name         # Componente base
.component-name--variant # Variante
.component-name__element # Elemento interno
.is-active              # Estado
.has-error              # Condição
```

## 2. Configuração Tailwind CSS Renovada

### 2.1 tailwind.config.ts Completo
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cores baseadas no logo e design system
      colors: {
        // Cores primárias do logo
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2472FE', // Azul principal do logo
          600: '#1D5FE8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3A8A',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#17C878', // Verde principal do logo
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Neutros sofisticados
        neutral: {
          0: '#FFFFFF',
          50: '#FAFBFC',
          100: '#F4F6F8',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Estados funcionais
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      
      // Tipografia moderna
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'Monaco', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // Espaçamento harmônico
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border radius moderno
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      
      // Sombras elegantes
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(36, 114, 254, 0.15)',
        'glow-lg': '0 0 40px rgba(36, 114, 254, 0.2)',
      },
      
      // Animações fluidas
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
          '70%': { transform: 'translate3d(0, -4px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
```

### 2.2 Estilos Globais Renovados (globals.css)

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Fonte Geist */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Reset e base styles */
@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-neutral-0 text-neutral-700 font-sans;
    font-feature-settings: 'rlig' 1, 'calt' 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    @apply w-2;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-neutral-100;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-neutral-300 rounded-full;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-neutral-400;
  }
  
  /* Focus styles */
  .focus-visible {
    @apply outline-none ring-2 ring-primary-500 ring-offset-2;
  }
  
  /* Selection */
  ::selection {
    @apply bg-primary-100 text-primary-900;
  }
}

/* Componentes base */
@layer components {
  /* Container responsivo */
  .container-custom {
    @apply w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12;
  }
  
  /* Gradientes de marca */
  .gradient-primary {
    background: linear-gradient(135deg, #2472FE 0%, #1D5FE8 100%);
  }
  
  .gradient-accent {
    background: linear-gradient(135deg, #17C878 0%, #059669 100%);
  }
  
  .gradient-hero {
    background: linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%);
  }
  
  /* Glassmorphism */
  .glass {
    @apply bg-white/80 backdrop-blur-md border border-white/20;
  }
  
  .glass-dark {
    @apply bg-neutral-900/80 backdrop-blur-md border border-neutral-800/20;
  }
  
  /* Hover effects */
  .hover-lift {
    @apply transition-transform duration-200 ease-out;
  }
  
  .hover-lift:hover {
    @apply -translate-y-1;
  }
  
  .hover-glow {
    @apply transition-shadow duration-200 ease-out;
  }
  
  .hover-glow:hover {
    @apply shadow-glow;
  }
  
  /* Text gradients */
  .text-gradient-primary {
    @apply bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent;
  }
  
  .text-gradient-accent {
    @apply bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent;
  }
}

/* Utilitários */
@layer utilities {
  /* Animações de entrada */
  .animate-in {
    @apply animate-fade-in;
  }
  
  .animate-in-up {
    @apply animate-fade-in-up;
  }
  
  .animate-in-scale {
    @apply animate-scale-in;
  }
  
  /* Estados de loading */
  .skeleton {
    @apply bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] animate-pulse;
  }
  
  /* Truncate text */
  .truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .truncate-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

## 3. Componentes UI Redesenhados

### 3.1 Button Component (components/ui/button.tsx)

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-white text-neutral-700 border border-neutral-200 shadow-sm hover:bg-neutral-50 hover:border-primary-300 hover:text-primary-600",
        ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-primary-600",
        outline: "border border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300",
        success: "bg-gradient-to-r from-success-600 to-success-500 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
        destructive: "bg-gradient-to-r from-error-600 to-error-500 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 3.2 Card Component (components/ui/card.tsx)

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-xl border bg-white shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:shadow-md hover:-translate-y-1",
        featured: "border-primary-200 bg-gradient-to-br from-primary-50 to-accent-50",
        interactive: "border-neutral-200 hover:border-primary-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer",
        glass: "bg-white/80 backdrop-blur-md border-white/20",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-neutral-900", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-600", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
```

### 3.3 Input Component (components/ui/input.tsx)

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-white px-4 py-3 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-neutral-300 focus:border-primary-500",
        error: "border-error-500 focus:border-error-500 focus-visible:ring-error-500",
        success: "border-success-500 focus:border-success-500 focus-visible:ring-success-500",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-4 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
```

## 4. Animações e Micro-interações

### 4.1 Framer Motion Setup

```bash
npm install framer-motion
```

### 4.2 Animation Utilities (lib/animations.ts)

```typescript
import { Variants } from "framer-motion"

// Animações de entrada
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export const fadeInScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Animações de container (stagger)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Hover animations
export const hoverLift = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

// Loading animations
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}
```

### 4.3 Animated Components

```typescript
// components/common/animated-section.tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedDiv({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
```

## 5. Performance e Otimização

### 5.1 Next.js Configuration (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compressão de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 5.2 Bundle Analyzer Setup

```bash
npm install @next/bundle-analyzer
```

```javascript
// next.config.js (adicionar)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

### 5.3 Performance Monitoring

```typescript
// lib/performance.ts
export function measurePerformance(name: string, fn: () => void) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now()
    fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
  } else {
    fn()
  }
}

export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Enviar métricas para analytics
    console.log(metric)
  }
}
```

## 6. Acessibilidade e Testes

### 6.1 Configuração de Acessibilidade

```typescript
// lib/accessibility.ts
export const a11yProps = {
  // ARIA labels em português
  labels: {
    menu: 'Menu principal',
    search: 'Pesquisar',
    close: 'Fechar',
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
  },
  
  // Configurações de foco
  focusRing: 'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  
  // Skip links
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50',
}
```

### 6.2 Testing Setup

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

## 7. Deploy e CI/CD

### 7.1 Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["gru1"],
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 7.2 Environment Variables

```bash
# .env.example
NEXT_PUBLIC_SITE_URL=https://aulacompletasaas.com
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

## 8. Checklist de Implementação

### 8.1 Fase 1: Fundação
- [ ] Configurar Tailwind CSS com tema customizado
- [ ] Implementar tipografia Geist
- [ ] Criar componentes UI base (Button, Card, Input)
- [ ] Configurar animações com Framer Motion
- [ ] Implementar sistema de cores baseado no logo

### 8.2 Fase 2: Componentes
- [ ] Redesenhar Header e Footer
- [ ] Criar componentes de navegação
- [ ] Implementar estados de loading
- [ ] Adicionar notificações (Toast)
- [ ] Criar componentes de formulário

### 8.3 Fase 3: Landing Page
- [ ] Implementar Hero Section moderna
- [ ] Criar seções de benefícios visuais
- [ ] Adicionar demo interativa de IA
- [ ] Implementar depoimentos elegantes
- [ ] Criar CTA conversivo

### 8.4 Fase 4: Otimização
- [ ] Configurar performance monitoring
- [ ] Implementar lazy loading
- [ ] Otimizar imagens e fontes
- [ ] Adicionar testes de acessibilidade
- [ ] Configurar SEO avançado

### 8.5 Fase 5: Deploy
- [ ] Configurar Vercel
- [ ] Implementar CI/CD
- [ ] Configurar monitoramento
- [ ] Testes de performance
- [ ] Launch e feedback

---

*Este guia técnico fornece todas as especificações necessárias para implementar o Design System moderno do Aula Completa, priorizando performance, acessibilidade e experiência do usuário.*