import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['./app.vue', './pages/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui'], //kalo ga ada Roboto, otomatis pake system-ui
    },
    extend: {
      colors: {
        orange: {
          '50': '#FDEFEC',
          '100': '#FCDBD5',
          '200': '#F8B7AA',
          '300': '#F59380',
          '400': '#F16F55',
          '450': '##F53D2D',
          '500': '#EE4D2D',
          '600': '#D03111',
          '700': '#9C240D',
          '800': '#681808',
          '900': '#340C04',
          '950': '#1C0702',
        },
        muted: {
          '50': '#fbfbfb',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
      },
    },
  },
};
