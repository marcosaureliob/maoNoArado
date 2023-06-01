'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logos.svg'
import {
  HeaderContainer,
  HeaderWrapper,
  NavHeaderWrapper,
  LogoWrapper,
  MobileMenu,
  Support,
  NavLink,
  NavLinkLogo,
  ButtonSupportMobile,
} from './style'
import { ButtonSupport } from '@/components/ButtonSupport'
import { HandHeart } from '@phosphor-icons/react'

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

  const [hasNewClass, setHasNewClass] = useState(false)

  function handClick() {
    setHasNewClass(!hasNewClass)
  }

  function handleItemClick(event: any) {
    setHasNewClass(false)
  }

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
              onClick={handleItemClick}
            />
          </NavLinkLogo>
        </LogoWrapper>

        <MobileMenu onClick={handClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </MobileMenu>

        <NavHeaderWrapper
          className={hasNewClass ? 'navHeader-active' : ''}
          onClick={handleItemClick}
        >
          <NavLink href="/history" className="navigationLink">
            Mão no Arado
          </NavLink>
          <NavLink href="/project" className="navigationLink">
            Projetos
          </NavLink>
          <NavLink href="/gallery" className="navigationLink">
            Galeria
          </NavLink>

          <ButtonSupportMobile href="contact">
            Apoiar
            <HandHeart size={40} />
          </ButtonSupportMobile>
        </NavHeaderWrapper>
        <Support>
          <ButtonSupport />
        </Support>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
