'use client'
import { styled } from '@/styles'
import Link from 'next/link'
export const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,

  zIndex: 1,

  width: '100%',

  // margin: '0 auto 3.87rem',
  // paddingTop: '2.37em',
  padding: '2.375rem 0',
  transition: 'background 300ms, padding 300ms',

  display: 'flex',
  justifyContent: 'center',

  '&.scrolled': {
    backgroundColor: '$background',
    padding: '1rem 0 0 0',
    zIndex: '1',
  },
})

export const HeaderWrapper = styled('div', {
  width: '100%',
  maxWidth: '1216px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const LogoWrapper = styled('div', {})

export const NavHeaderWrapper = styled('nav', {
  display: 'flex',
  gap: '2em',
})
export const NavLinkLogo = styled(Link, {
  background: "url('../../../assets/logo.svg')",
})

export const NavLink = styled(Link, {
  fontSize: '1.25rem',
  fontWeight: '500',
  letterSpacing: '4%',
  color: '#333333',
})

export const Support = styled('div', {})
