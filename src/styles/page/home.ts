import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100%',
  padding: 0,
  boxSizing: 'border-box',
})

export const ContainerBanner = styled('section', {
  padding: '13rem 0 6.25rem',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const MaxWidthBox = styled('div', {
  width: '100%',
  maxWidth: '1216px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
})

export const BannerInfo = styled('div', {
  width: '542px',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2.25rem',
    lineHeight: '2.925rem',
    fontWeight: 700,
    letter: '4%',
  },

  p: {
    fontSize: '1.25rem',
    lineHeight: '2rem',
    fontWeight: 400,
    letter: '4%',
    marginTop: '2rem',
  },
})

export const ImageBox = styled('section', {
  position: 'relative',

  width: '39.0625rem',
  height: '34.5rem',
})

export const ImagePartner = styled('section', {
  position: 'relative',

  width: '11rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageBolt = styled('section', {
  position: 'relative',

  width: '8rem',
  height: '8rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10rem',
  marginBottom: '3.125rem',
})

export const ImageKids = styled('section', {
  position: 'relative',

  width: '38rem',
  height: '28.6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const ImageHands = styled('section', {
  position: 'relative',

  width: '29rem',
  height: '27.875rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const FirstContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-between',
  div: {
    width: '63rem',
    h2: {
      fontSize: '2rem',
      lineHeight: '2.625rem',
      fontWeight: 700,
      letter: '4%',
    },
    p: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      letter: '4%',
      marginTop: '1.875rem',
    },
  },
})

export const SecondContainer = styled('section', {
  marginTop: '10rem',

  display: 'flex',
  justifyContent: 'center',
})

export const BoxInfo = styled('div', {
  width: '35.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2rem',
    lineHeight: '2.625rem',
    fontWeight: 700,
    letter: '4%',
  },
  p: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
    letter: '4%',
    marginTop: '2rem',
  },
})

export const ThirdContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.5rem',
  marginTop: '6rem',
  div: {
    width: '32rem',
    height: '23.3rem',
    h2: {
      fontSize: '2rem',
      lineHeight: '2.625rem',
      fontWeight: 700,
      letter: '4%',
    },
    p: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      letter: '4%',
      marginTop: '2rem',
    },
  },
})
export const Title = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.5rem',
  marginTop: '10rem',
})
export const FourthContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  div: {
    width: '43.5rem',
    height: '13.5rem',
    h2: {
      fontSize: '2rem',
      lineHeight: '2.625rem',
      fontWeight: 700,
      letter: '4%',
    },
    p: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      letter: '4%',
      marginTop: '2rem',
    },
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
})
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
