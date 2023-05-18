'use client'

import Image from 'next/image'

import Person from '@/assets/person.svg'
import BackgroundProjectTop from '@/assets/background-project-top.svg'
import BackgroundProjectBottom from '@/assets/background-project-bottom.svg'

import {
  ImageBox,
  BackgroundSection,
  ProjectBox,
  BoxTags,
  Tag,
  ProjectContainer,
  BenefitBox,
} from '@/styles/page/project'

export default function Projects() {
  return (
    <ProjectContainer>
      <ImageBox>
        <Image
          src={Person}
          alt="é"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <ProjectBox>
        <h2>Projetos</h2>

        <BoxTags>
          <Tag>cultural copeira</Tag>
          <Tag>teatro</Tag>
          <Tag>alfabetização</Tag>
          <Tag>dança</Tag>
          <Tag>maculele</Tag>
          <Tag>esportes</Tag>
          <Tag>ballet</Tag>
          <Tag>educação física</Tag>
          <Tag>artesanato</Tag>
          <Tag>saúde em 1° lugar</Tag>
          <Tag>grupo da terceira idade</Tag>
          <Tag>reforço escolar</Tag>
        </BoxTags>
      </ProjectBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <BackgroundSection>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />
      </BackgroundSection>

      <BenefitBox>
        <h2>Benefícios e Saúde</h2>

        <BoxTags>
          <Tag>psicóloga</Tag>
          <Tag>psicanalise</Tag>
          <Tag>Sócio emocional</Tag>
          <Tag>corte e costura</Tag>
          <Tag>projeto conectados</Tag>
          <Tag>padaria artesanal</Tag>
          <Tag>assistente social</Tag>
          <Tag>informática básica</Tag>
          <Tag>cabelereiro</Tag>
          <Tag>palestras sobre empreendorismo</Tag>
          <Tag>capacitação profissional</Tag>
          <Tag>conecta trampo</Tag>
          <Tag>Workshop do emprego</Tag>
          <Tag>curso manicure pedicure</Tag>
          <Tag>e muito mais</Tag>
        </BoxTags>
      </BenefitBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />
      </BackgroundSection>
    </ProjectContainer>
  )
}
