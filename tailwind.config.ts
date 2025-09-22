import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['./app.vue', './pages/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        orange: {
          '50': 'oklch(0.968 0.014 22.88)',
          '100': 'oklch(0.927 0.032 22.51)',
          '200': 'oklch(0.853 0.071 22.97)',
          '300': 'oklch(0.78 0.114 25.26)',
          '400': 'oklch(0.716 0.157 28.55)',
          '500': 'oklch(0.642 0.203 33.14)',
          '600': 'oklch(0.546 0.173 33.07)',
          '700': 'oklch(0.437 0.138 32.84)',
          '800': 'oklch(0.34 0.108 32.9)',
          '900': 'oklch(0.241 0.076 32.92)',
          '950': 'oklch(0.195 0.062 34.18)',
        },
      },
    },
  },
};
