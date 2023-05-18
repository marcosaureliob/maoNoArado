'use client'

import Image from 'next/image'

import Person from '@/assets/person.svg'
import BackgroundProjectTop from '@/assets/background-project-top.svg'
import BackgroundProjectBottom from '@/assets/background-project-bottom.svg'

import {
  ImageBox,
  BackgroundSection,
  ProjectBox,
  ProjectContainer,
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

        <div>
          <span>cultural copeira</span>
          <span>teatro</span>
          <span>alfabetização</span>
          <span>dança</span>
          <span>maculele</span>
          <span>esportes</span>
          <span>ballet</span>
          <span>educação física</span>
          <span>artesanato</span>
          <span>saúde em 1° lugar</span>
          <span>grupo da terceira idade</span>
          <span>reforço escolar</span>
        </div>
      </ProjectBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <section>
        <h2>Benefícios e Saúde</h2>

        <div>
          <span>psicóloga</span>
          <span>psicanalise</span>
          <span>Sócio emocional</span>
          <span>corte e costura</span>
          <span>projeto conectados</span>
          <span>padaria artesanal</span>
          <span>assistente social</span>
          <span>informática básica</span>
          <span>cabelereiro</span>
          <span>palestras sobre empreendorismo</span>
          <span>capacitação profissional</span>
          <span>conecta trampo</span>
          <span>Workshop do emprego</span>
          <span>curso manicure pedicure</span>
          <span>e muito mais</span>
        </div>
      </section>
    </ProjectContainer>
  )
}
