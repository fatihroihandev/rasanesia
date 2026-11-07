/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* 1. Primitive Brand Palette (Backward-compatible tokens) */
        brand: {
          brown: '#6B3E26',
          'brown-dark': '#432414',
          'brown-light': '#8A5438',
          cream: '#F6EFE2',
          'cream-light': '#FAF6EE',
          'cream-dark': '#E5D7C1',
          green: '#4A5D32',
          'green-dark': '#364523',
          'green-light': '#677C4B',
          gold: '#D99A55',
          'gold-ink': '#8A5218',
          'gold-dark': '#B87E3A',
          'gold-light': '#E5B174',
          white: '#FFFDF9',
          dark: '#22140D',
          muted: '#594A42'
        },
        /* 2. Semantic Design Tokens (Role-based architecture) */
        surface: {
          canvas: 'var(--surface-canvas)',
          primary: 'var(--surface-primary)',
          subtle: 'var(--surface-subtle)',
          elevated: 'var(--surface-elevated)',
          inverse: 'var(--surface-inverse)',
          accent: 'var(--surface-accent)'
        },
        content: {
          primary: 'var(--content-primary)',
          secondary: 'var(--content-secondary)',
          accent: 'var(--content-accent)',
          highlight: 'var(--content-highlight)',
          inverse: 'var(--content-inverse)',
          'inverse-muted': 'var(--content-inverse-muted)',
          'inverse-highlight': 'var(--content-inverse-highlight)'
        },
        line: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
          inverse: 'var(--border-inverse)'
        },
        action: {
          primary: 'var(--action-primary)',
          'primary-hover': 'var(--action-primary-hover)',
          whatsapp: 'var(--action-whatsapp)',
          'whatsapp-hover': 'var(--action-whatsapp-hover)'
        },
        status: {
          success: 'var(--status-success)',
          warning: 'var(--status-warning)',
          danger: 'var(--status-danger)'
        }
      },
      fontFamily: {
        serif: ['Lora', 'Lora Fallback', 'Georgia', 'serif'],
        sans: ['Inter', 'Inter Fallback', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        xs: '0 1px 3px 0 rgba(34, 20, 13, 0.04)',
        soft: '0 6px 24px -4px rgba(107, 62, 38, 0.10), 0 2px 6px -1px rgba(107, 62, 38, 0.05)',
        card: '0 14px 36px -8px rgba(34, 20, 13, 0.07), 0 4px 12px -2px rgba(34, 20, 13, 0.04)',
        hover: '0 24px 48px -10px rgba(34, 20, 13, 0.15), 0 10px 20px -4px rgba(34, 20, 13, 0.07)',
        editorial: '0 1px 0 0 rgba(107, 62, 38, 0.12), 0 20px 40px -15px rgba(34, 20, 13, 0.08)'
      }
    },
  },
  plugins: [],
};
