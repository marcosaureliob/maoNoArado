'use client'

import React from 'react'
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
  return (
    <HeaderContainer>
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
