import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#111827', paper: '#F9FAFB', accent: '#2563EB' }, letterSpacing: { editorial: '-0.045em' } } },
  plugins: [],
}
export default config
