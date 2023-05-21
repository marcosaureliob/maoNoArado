import React from 'react'
import HandHeard from '@/assets/hand-heart.svg'
import { ButtonSupportWrapper, TextButton } from './styles'
import Image from 'next/image'
export const ButtonSupport = () => {
  return (
    <ButtonSupportWrapper href="contact">
      <TextButton>APOIAR</TextButton>
      <Image
        src={HandHeard}
        alt="Imagem de uma mão com um coração em cima, passando a ideia de apoio"
      />
    </ButtonSupportWrapper>
  )
}
