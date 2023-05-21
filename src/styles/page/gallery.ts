import { css, styled } from '..'

export const GalleryContainer = styled('section', {
  width: '100%',
  maxWidth: '1216px',
  margin: '0 auto',
  padding: '32px 0',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 32,

  h2: {
    letterSpacing: '0.04em',
    fontSize: '2rem',
  },
})

export const ImageContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '8px 8px',

  a: {
    position: 'relative',

    borderRadius: '16px',
    display: 'block',
    width: '200px',
    height: '200px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'filter 200ms',

    '&:hover': {
      filter: 'brightness(60%)',
    },
  },
})
