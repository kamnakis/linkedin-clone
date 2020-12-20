module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        brand: '#0A66C2',
        darkgray: '#666666',
        brandGray: '#F3F2EF',
        lightblue: '#5192D4'
      },
      maxWidth: {
        large: '1128px'
      },
      backgroundOpacity: {
        10: '0.1'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
