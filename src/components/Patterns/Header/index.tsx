'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logos.svg'
import {
  HeaderContainer,
  HeaderWrapper,
  NavHeaderWrapper,
  LogoWrapper,
  Support,
  NavLink,
  NavLinkLogo,
} from './style'
import { ButtonSupport } from '@/components/ButtonSupport'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0

      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <HeaderWrapper>
        <LogoWrapper>
          <NavLinkLogo href="/">
            <Image
              src={Logo}
              alt="Logo Mão no Arado"
              width="103"
              height="104"
            />
          </NavLinkLogo>
        </LogoWrapper>
        <NavHeaderWrapper>
          <NavLink href="/history" className="navigationLink">
            Mão no Arado
          </NavLink>
          <NavLink href="/project" className="navigationLink">
            Projetos
          </NavLink>
          <NavLink href="/gallery" className="navigationLink">
            Galeria
          </NavLink>
        </NavHeaderWrapper>
        <Support>
          <ButtonSupport />
        </Support>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
