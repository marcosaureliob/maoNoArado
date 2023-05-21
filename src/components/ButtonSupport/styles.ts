import { styled } from '@stitches/react'
import Link from 'next/link'
export const ButtonSupportWrapper = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em 2em',

  background: '#FE8824',
  gap: '1em',
  color: '#FFF',
  borderRadius: '6px',
})
export const TextButton = styled('span', {
  fontSize: '1em',
  fontWeight: '600',
})
