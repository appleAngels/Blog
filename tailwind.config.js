const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',
      gray: colors.slate,

      rose: colors.rose,
      teal: colors.teal,
      sky: colors.sky,
      pink: colors.pink,

      primary: '#ff4500', //'#F86011',   //主题颜色，用于所有控件的首要颜色
      // secondary: '#fd5d0a', //提示性颜色，提示动作之类的信息
      // accent: '#F86011', //交互性颜色，连接颜色之类的
      
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '42rem',
            color: theme('colors.gray.700'),
            'h1, h2, h3, h4, h5': {
              color: theme('colors.gray.600'),
            },
            h4: {
              fontSize: '1.125em',
            },
            p: {
              textAlign: 'justify',
              textJustify: 'inter-ideograph',
            },
            
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.45em',
              height: '0.1em',
              top: 'calc(0.875em - 0.0625em)',
              left: '0.25em',
              borderRadius: 0,
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              },
            },
            code: {
              fontWeight: 500,
              fontSize: '85%',
              padding: '0.2em 0.4em',
              borderRadius: '6px',
              backgroundColor: theme('colors.gray.100')
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },

            'blockquote p:first-of-type::before': {
              content: 'none',
            },

            'blockquote p:last-of-type::after': {
              content: 'none',
            },

            details: {
              margin: '0.5rem 0px',
              padding: '0.5rem 1rem',
              backgroundColor: theme('colors.gray.100'),
              border: '1px solid',
              borderColor: theme('colors.gray.300'),
              borderRadius: 3,
            },

            pre: {
              // color: theme('colors.black'),
              // borderWidth: 0,
              // // borderColor: theme('colors.black'),
              // // backgroundColor: 'none',
              // backgroundColor: theme('colors.gray.100'),
              // borderRadius: 3,
              // fontSize: '85%',
              paddingTop: 0,
              marginTop: '1em',
              marginBottom: '1em',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },

          }
        }
      }),

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      }
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
