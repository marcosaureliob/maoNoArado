'use client'
import { styled } from '@/styles'
import Link from 'next/link'
export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: '1216px',

  margin: '0 auto',
  marginBottom: '3.87rem',
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
  fontSize: '1.25em',
  lineHeight: '1.625em',
  letterSpacing: '4%',
  color: '$gray900',
})
export const Support = styled('div', {})
