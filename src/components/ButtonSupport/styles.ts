import { styled } from '@stitches/react'
import Link from 'next/link'
export const ButtonSupportWrapper = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 2rem',

  background: '#FE8824',
  gap: '1rem',
  color: '#FFF',
  borderRadius: '6px',
})
export const TextButton = styled('span', {
  fontSize: '1rem',
  fontWeight: '600',
})
