import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Source Sans Pro:400,700', 'sans-serif'],
  },
})

const theme = {
  colors: {
    layout: {
      background: 'white',
      accent: '#00A676',
      darkAccent: '#008E66',
      secondary: '#F7F9F9',
    },
    fonts: {
      header: 'rgba(0,0,0,0.8)',
      body: 'rgba(0,0,0,0.8)',
      placeholder: 'rgba(0,0,0,0.6)',
      accent: '#00A676',
      button: '#ffffff',
    },
  },
  fonts: {
    header: {
      family: 'Source Sans Pro',
      weight: 700,
    },
    body: {
      family: 'Source Sans Pro',
      weight: 400,
    },
  },
}

export default theme
