import React from 'react'
import { DeviceMobile, Phone, Envelope } from 'phosphor-react'

import {
  Contact,
  ContactInformations,
  ContactPageContainer,
  ContactPageHowToFind,
  ContactPageInfors,
  InforMationsWrapper,
  ParagraphPageContact,
  TitleInformationWrapper,
  TitlePageContact,
  TextContact,
  ContainerInformations,
  TitleHowToFind,
  SectionMap,
} from './styles'
import { InstagramLogo } from '@/components/InstagramLogo'
import { FacebookLogo } from '@/components/FacebookLogo'
import { Map } from '@/components/Map'

export const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactPageInfors>
        <TitlePageContact>Entre em Contato</TitlePageContact>
        <ParagraphPageContact>
          Se você tiver alguma dúvida sobre a Associação Mão no Arado, entre em
          contato conosco, será um prazer poder ajudar.
        </ParagraphPageContact>
        <ContactInformations>
          <InforMationsWrapper>
            <TitleInformationWrapper>Ligue para nós</TitleInformationWrapper>
            <ContainerInformations>
              <Contact>
                <DeviceMobile size={40} />
                <TextContact>(11) 94078-3222</TextContact>
              </Contact>
              <Contact>
                <Phone size={40} />
                <TextContact>(11) 5198-2205</TextContact>
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
          <InforMationsWrapper>
            <TitleInformationWrapper>
              Nos envie um e-mail
            </TitleInformationWrapper>
            <ContainerInformations>
              <Contact>
                <Envelope size={40} />
                <TextContact>associacaomaonoarado@gmail.com</TextContact>
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
          <InforMationsWrapper>
            <TitleInformationWrapper>
              Nossas Redes Sociais
            </TitleInformationWrapper>
            <ContainerInformations>
              <Contact>
                <InstagramLogo width={40} height={40} fill="#4F4F4F" />
                <FacebookLogo width={40} height={40} fill="#4F4F4F" />
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
        </ContactInformations>
      </ContactPageInfors>
      <ContactPageHowToFind>
        <TitleHowToFind>Onde estamos</TitleHowToFind>
        <SectionMap>
          <Map />
        </SectionMap>
      </ContactPageHowToFind>
    </ContactPageContainer>
  )
}