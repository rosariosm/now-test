export const variables = {
  color: {
    brand: {
      main: '#5d73f5',
    },
    gray: {
      base: '#474747'
    }
  },
  font: {
    family: {
      main: 'Roboto',
      alt: 'Oswald',
    },
    size: {
      large: 18,
      base: 14,
      small: 12,
      h1: 60,
      h2: 45,
      h3: 30,
      h4: 26,
      h5: 20,
      h6: 18,
    },
    weight: {
      light: 300, 
      normal: 500, 
      bold: 700,
    },
  },
}

export const utils = {
  px: (number) => {
    return `${number}px`
  }
}