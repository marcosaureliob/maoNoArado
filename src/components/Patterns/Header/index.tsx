'use client'

import React from 'react'
import Image from 'next/image'
import {
  HeaderContainer,
  HeaderWrapper,
  NavHeaderWrapper,
  LogoWrapper,
  Support,
  ButtonSupport,
  NavLink,
  NavLinkLogo,
} from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper>
          <NavLinkLogo href="/">
            <Image src="/logo.svg" alt="logo" width="103" height="104" />
          </NavLinkLogo>
        </LogoWrapper>
        <NavHeaderWrapper>
          <NavLink href="/history" className="navigationLink">
            Mão no Arado
          </NavLink>
          <NavLink href="/project" className="navigationLink">
            Projetos
          </NavLink>
          <NavLink href="/contact" className="navigationLink">
            Página de Contato
          </NavLink>
        </NavHeaderWrapper>
        <Support>
          <ButtonSupport>Apoiar</ButtonSupport>
        </Support>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
