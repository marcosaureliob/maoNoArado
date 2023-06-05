import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100%',
  padding: 0,
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ContainerBanner = styled('section', {
  position: 'relative',

  width: '100%',
  padding: '13rem 0 6.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    padding: '8rem 1rem 6.25rem',
  },

  '@tablet': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },

  '@laptop': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
})

export const MaxWidthBox = styled('div', {
  width: '100%',
  maxWidth: '76rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    responsiveBanner: {
      true: {
        '@mobile': {
          flexDirection: 'column',
          gap: '2rem',
        },

        '@tablet': {
          gap: '2rem',
        },

        '@laptop': {
          gap: '2rem',
        },
      },
    },
  },
})

export const BannerInfo = styled('div', {
  width: '100%',
  maxWidth: '33.875rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2.25rem',
    lineHeight: '130%',
    fontWeight: 700,
    letter: '4%',
  },

  p: {
    fontSize: '1.25rem',
    lineHeight: '160%',
    fontWeight: 400,
    letter: '4%',
  },

  '@mobile': {
    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1rem',
    },
  },

  '@tablet': {
    h2: {
      fontSize: '2rem',
    },
  },
})

export const ImageBox = styled('section', {
  position: 'relative',
  width: '39.0625rem',
  height: '34.5rem',

  '@mobile': {
    order: -1,
    width: '100%',
    height: '20rem',
  },
})

export const FirstContainer = styled('section', {
  width: '100%',
  maxWidth: '63rem',
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  div: {
    width: '100%',
    maxWidth: '100%',

    h2: {
      fontSize: '2rem',
      lineHeight: '130%',
      fontWeight: 700,
      letter: '4%',
    },

    p: {
      fontSize: '1.125rem',
      lineHeight: '160%',
      letter: '4%',
      marginTop: '1.875rem',
    },
  },

  '@mobile': {
    padding: '0 1rem',

    div: {
      h2: {
        fontSize: '1.5rem',
      },
    },
  },

  '@tablet': {
    padding: '0 1rem',
  },

  '@laptop': {
    padding: '0 1rem',
  },
})

export const ImageBolt = styled('section', {
  width: '206px',
  height: '128px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SecondContainer = styled('section', {
  width: '100%',
  maxWidth: '76rem',

  marginTop: '10rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    marginTop: '6.25rem',
    padding: '0 1rem',

    flexDirection: 'column',
    gap: '2rem',
  },

  '@tablet': {
    padding: '0 1rem',
    gap: '2rem',
  },

  '@laptop': {
    padding: '0 1rem',
  },
})

export const ImageKids = styled('section', {
  position: 'relative',

  width: '36.875rem',
  height: '28.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    heightEmployers: {
      true: {
        height: '25.625rem',

        '@mobile': {
          height: '16rem',
        },
      },
    },
  },

  '@mobile': {
    width: '100%',
    height: '20rem',
    order: -1,

    img: {
      objectFit: 'contain !important',
    },
  },

  '@tablet': {
    width: '100%',
    height: '20rem',

    img: {
      objectFit: 'contain !important',
    },
  },
})

export const BoxInfo = styled('div', {
  width: '100%',
  maxWidth: '36rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2rem',
    lineHeight: '130%',
    fontWeight: 700,
    letter: '4%',
  },

  p: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    letterSpacing: '4%',
  },

  '@mobile': {
    h2: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },

    p: {
      fontSize: '1.125rem',
      textAlign: 'center',
    },
  },
})

// export const ThirdContainer = styled('section', {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   border: '1px solid red',
//   gap: '3.5rem',
//   marginTop: '6rem',
//   div: {
//     width: '32rem',
//     height: '23.3rem',
//     h2: {
//       fontSize: '2rem',
//       lineHeight: '2.625rem',
//       fontWeight: 700,
//       letter: '4%',
//     },
//     p: {
//       fontSize: '1.125rem',
//       lineHeight: '1.75rem',
//       fontWeight: 400,
//       letter: '4%',
//       marginTop: '2rem',
//     },
//     '@mobile': {
//       width: '22.5rem',
//       gap: '2rem',
//       marginTop: '2rem',
//       flexDirection: 'column',
//       h2: {
//         fontSize: '1.6rem',
//         textAlign: 'center',
//       },
//       p: {
//         fontSize: '1.125rem',
//         textAlign: 'center',
//       },
//     },
//   },
// })

export const ContainerTwins = styled('section', {
  border: '1px solid',

  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
  },
})

export const BoxContentTwins = styled('section', {
  border: '1px solid red',

  width: '100%',
  maxWidth: '76rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const BoxInfoTwins = styled('div', {
  width: '100%',
  maxWidth: '35.875rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  variants: {
    widthSocial: {
      true: {
        maxWidth: '43.5rem',
      },
    },
  },

  h3: {
    fontSize: '2rem',
    lineHeight: '130%',
    letterSpacing: '0.04em',
  },

  p: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    letterSpacing: '0.06em',
  },
})

export const PictureBox = styled('div', {
  position: 'relative',

  width: '100%',
  maxWidth: '36.625rem',
  height: '27.875rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
  },
})

export const BackgroundSection = styled('div', {
  variants: {
    marginTop: {
      true: {
        marginTop: '10rem',
      },
    },
  },

  position: 'relative',
  width: '100%',
  height: '10rem',
})

// export const FourthContainer = styled('section', {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%',
//   div: {
//     width: '43.5rem',
//     height: '13.5rem',
//     h2: {
//       fontSize: '2rem',
//       lineHeight: '2.625rem',
//       fontWeight: 700,
//       letter: '4%',
//     },
//     p: {
//       fontSize: '1.125rem',
//       lineHeight: '1.75rem',
//       fontWeight: 400,
//       letter: '4%',
//       marginTop: '2rem',
//     },
//     '@mobile': {
//       width: '22.5rem',
//       gap: '2rem',
//       flexDirection: 'column',
//       h2: {
//         fontSize: '1.6rem',
//         textAlign: 'center',
//       },
//       p: {
//         fontSize: '1.125rem',
//         textAlign: 'center',
//         marginTop: '0',
//       },
//     },
//   },
// })

// export const ImageHands = styled('section', {
//   position: 'relative',
//   width: '29rem',
//   height: '27.875rem',

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// })

export const DonateSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '6rem',
  gap: '4rem',
})
export const DonateBox = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '9.25rem',
  gap: '1.5rem',
  h2: {
    fontSize: '1.2rem',
    fontWeight: 700,
    letter: '4%',
  },
  svg: {
    color: '$orange500',
  },
  div: {
    backgroundColor: '#FE8824',
    background: 'linear-gradient(90deg, #FE8824 0%, #ffffff 100%)',
    height: '0.2rem',
  },
})
export const ButtonDonate = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  button: {
    width: '16.5rem',
    height: '4.5rem',
    marginTop: '6rem',
    backgroundColor: '$orange500',
    color: '#FFFFFF',
    fontSize: '1.25rem',
    fontWeight: 700,
  },
})
export const PartnerList = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  marginTop: '6.25rem',
  paddingBottom: '10rem',
  '@mobile': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2rem',
    width: '22.5rem',
  },
})
export const ImagePartner = styled('section', {
  position: 'relative',
  width: '11rem',
  height: '6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@mobile': {
    width: '4.5rem',
    height: '2.4rem',
  },
})
