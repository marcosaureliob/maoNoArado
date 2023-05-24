'use client'
import { styled } from '@/styles'
import Link from 'next/link'
export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: '1216px',

  margin: '0 auto 3.87rem',
  paddingTop: '2.37em',
})

export const HeaderWrapper = styled('div', {
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
