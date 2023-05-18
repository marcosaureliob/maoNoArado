'use client'

import { styled } from '..'

export const ProjectContainer = styled('div', {
  width: '100%',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  border: '1px solid blue',
})

export const ImageBox = styled('section', {
  position: 'relative',

  width: '40.125rem',
  height: '28.125rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const BackgroundSection = styled('div', {
  position: 'relative',
  width: '100%',
  height: '10rem',
})

export const ProjectBox = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
    letterSpacing: '0.04em',
  },

  div: {
    width: '44.125rem',

    // span: {
    //   fontSize: '1.125rem',
    //   borderRadius: '50px',
    //   fontWeight: '700',
    //   border: '0.8px solid green',
    //   padding: '1rem 2rem',
    //   textTransform: 'uppercase',
    //   letterSpacing: '0.06em',
    // },
  },
})

export const BoxTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '4rem 1rem',
})

export const Tag = styled('span', {
  fontSize: '1.125rem',
  borderRadius: '50px',
  fontWeight: '700',
  border: '0.8px solid green',
  padding: '1rem 2rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
})
