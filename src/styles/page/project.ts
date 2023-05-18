'use client'

import { styled } from '..'

export const ProjectContainer = styled('div', {
  width: '100%',
  maxWidth: '1216px',
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
