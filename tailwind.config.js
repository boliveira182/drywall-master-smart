const colors = require('tailwindcss/colors');

// 1. Definimos as cores que o nosso JS injeta dinamicamente
const jsColors = ['indigo', 'red', 'amber', 'emerald'];

// 2. Mapeamos todas as variações de classes que usamos nas microinterações
const dynamicSafelist = jsColors.flatMap(cor => [
  `bg-${cor}-50/50`,
  `bg-${cor}-50`,
  `border-${cor}-300`,
  `ring-${cor}-400`,
  `ring-${cor}-200`,
  `shadow-${cor}-200/40`,
  `shadow-${cor}-200/50`,
  `shadow-lg`,
  `shadow-xl`,
  `hover:shadow-${cor}-300`,
  `bg-${cor}-600`,
  `hover:bg-${cor}-700`,
  `text-${cor}-500`,
  `text-${cor}-600`
]);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./bd/**/*.php",
    "./dist/js/**/*.js",
    "./includes/**/*.php",
    "./includes/*.php",
    "./includes/cadastro/*.php",
  ],
  theme: {
    extend: {
      colors: {
        plaster: { 50:'#FBF9F5', 100:'#F4F0E7', 200:'#E7E0D1', 300:'#D8CFB9' },
        graphite: { 900:'#1C1A16', 800:'#26231D', 700:'#37332A', 600:'#4E483C', 500:'#6C6455', 400:'#8F8879', 300:'#B3AC9C', 200:'#D2CCBE' },
        amber: { 300:'#F6C067', 400:'#EFAA3E', 500:'#D98F20', 600:'#B0701A' },
        teal:  { 300:'#7FCFC7', 400:'#4AABA0', 500:'#2F8A80', 600:'#226B63' },
        navy:  { 900:'#12181C', 800:'#182127', 700:'#212D34' },
        primary: {
                            50: '#f0f7ff',
                            100: '#e0effe',
                            200: '#b9dffd',
                            300: '#7cc5fc',
                            400: '#36a9f8',
                            500: '#0c8ee9',
                            600: '#0070c7',
                            700: '#0159a1',
                            800: '#064b85',
                            900: '#0b3f6e',
                        },
                        accent: {
                            50: '#f5f7fa',
                            100: '#ebeef5',
                            200: '#d2dae5',
                            300: '#aabbcc',
                            400: '#7a93aa',
                            500: '#5a7591',
                            600: '#465e78',
                            700: '#394c61',
                            800: '#324152',
                            900: '#2d3847',
                        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'led-pulse': 'ledPulse 3.5s ease-in-out infinite',
        'draw': 'draw 1.6s ease-out forwards',
        'rise': 'rise .7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 2s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'slide-up': 'slideUp 0.5s ease-out',
                        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        ledPulse: { '0%,100%': { opacity: .55 }, '50%': { opacity: 1 } },
        draw: { from: { strokeDashoffset: 400 }, to: { strokeDashoffset: 0 } },
        rise: { from: { opacity: 0, transform: 'translateY(14px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        }
      }
    }
  },
  safelist: [
    'bg-nexus-blue','text-nexus-blue','border-nexus-blue','bg-blue-50',
    'bg-nexus-green','text-nexus-green','border-nexus-green','bg-green-50',
    'bg-nexus-yellow','text-nexus-yellow','border-nexus-yellow','bg-yellow-50',
    'bg-nexus-danger','text-nexus-danger','border-nexus-danger','bg-red-50',
    'group-hover:bg-nexus-blue',
    'group-hover:bg-nexus-green',
    'group-hover:text-white',
    
    // 3. Injetamos o array dinâmico gerado lá em cima
    ...dynamicSafelist
  ],
  plugins: []
}