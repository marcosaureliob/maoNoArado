'use client'

import {
  HomeContainer,
  ImageBox,
  ContainerBanner,
  FirstContainer,
  ImageBolt,
  SecondContainer,
  ImageKids,
  ThirdContainer,
  Title,
  FourthContainer,
  ImageHands,
  PartnerList,
  ImagePartner,
} from '@/styles/page/home'
import AC from '../assets/partners/ac.svg'
import Enel from '../assets/partners/enel.svg'
import Fundo from '../assets/partners/fundo-social.svg'
import Geracao from '../assets/partners/geracao.svg'
import Maes from '../assets/partners/maes-favela.svg'
import Mao from '../assets/partners/maosementes.svg'
import Mercado from '../assets/partners/mercadolivre.svg'
import Mulheres from '../assets/partners/mulheres-brasil.svg'
import Oliveira from '../assets/partners/oliveira.svg'
import Sabesp from '../assets/partners/sabesp.svg'
import Sales from '../assets/partners/salles.svg'
import Sebrae from '../assets/partners/sebrae.svg'
import Banner from '../assets/img-banner.svg'
import Lightning from '../assets/lightning.svg'
import Kids from '../assets/kids.svg'
import Employers from '../assets/employers.svg'
import People from '../assets/peoples.svg'
import Hands from '../assets/hands.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeContainer>
      <ContainerBanner>
        <div>
          <h2>
            Promovemos proteção básica, por meio do serviço de convivência e
            fortalecimento de vínculo as famílias
          </h2>
          <p>
            Além de promover a preparação para o mundo do trabalho e inclusão
            produtiva, para o desenvolvimento da autonomia, do protagonismo
            social e da formação cidadã.
          </p>
        </div>
        <ImageBox>
          <Image
            src={Banner}
            alt="Main Banner"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </ImageBox>
      </ContainerBanner>
      <FirstContainer>
        <ImageBolt>
          <Image src={Lightning} alt="Bolt" />
        </ImageBolt>
        <div>
          <h2>
            Buscamos ser referência no atendimento social, visando mudar a
            realidade individual, familiar e consequentemente a comunidade a
            qual atendemos.
          </h2>
          <p>
            Praticamos valores como amor, acolhimento, solidariedade, ética,
            respeito, valorização da vida e da família.
          </p>
        </div>
      </FirstContainer>
      <SecondContainer>
        <ImageKids>
          <Image src={Kids} alt="Kids" />
        </ImageKids>
        <div>
          <h2>Mão no Arado possui funções importantes na sociedade</h2>
          <p>
            Buscamos interagir e ajudar as famílias, por meio do atendimento
            social com atividades, ações solidárias e projetos de promoção da
            cultura, esporte, lazer, educação e emprego que visam a superação de
            todo o tipo de desigualdade social, proteção, combate à fome e
            promoção da cidadania. Hoje somos reconhecidos com certificado de
            utilidade Pública.
          </p>
        </div>
      </SecondContainer>
      <SecondContainer>
        <div>
          <h2>
            A associação tem seu eixo de atuação no atendimento ao serviço de
            convivência
          </h2>
          <p>
            No fortalecimento de vínculos, com amparo nas Resoluções CNAS
            109/2009 – CNAS 13/2014 a CNAS 33/2012, que define a promoção da
            integração ao mercado de trabalho no campo da assistência social,
            desenvolve atividades de capacitação para integração ao mundo do
            trabalho.
          </p>
        </div>
        <ImageKids>
          <Image src={Employers} alt="Kids" />
        </ImageKids>
      </SecondContainer>
      <Title>
        <h2>Solução</h2>
      </Title>
      <ThirdContainer>
        <ImageKids>
          <Image src={People} alt="Peoples" />
        </ImageKids>
        <div>
          <h2>
            O suprimento de carências relacionadas ao nível de escolaridade,
            qualidade da educação, qualificação profissional potencializa as
            oportunidades profissionais
          </h2>
          <p>
            Além de impactar com a redução de diversos problemas como a inserção
            ao uso e tráfico de entorpecentes, prostituição, exploração
            infantil, entre outras.
          </p>
        </div>
      </ThirdContainer>
      <Title>
        <h2>Impacto social</h2>
      </Title>
      <FourthContainer>
        <div>
          <h2>
            A oferta de cursos de capacitação tem sido uma iniciativa primordial
            e relevante na Associação
          </h2>
          <p>
            Promovemos a ampliação do processo participativo, a integração,
            emancipação e protagonismo das famílias.
          </p>
        </div>
        <ImageHands>
          <Image src={Hands} alt="Peoples" />
        </ImageHands>
      </FourthContainer>
      <Title>
        <h2>Doações</h2>
      </Title>
      <Title>
        <h2>Parceiros que fazem parte deste projeto</h2>
      </Title>
      <PartnerList>
        <ImagePartner>
          <Image src={Fundo} alt="Fundo" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Enel} alt="Enel" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Oliveira} alt="Oliveira" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Sabesp} alt="Sabesp" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Mercado} alt="Mercado" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Sebrae} alt="Sebrae" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Geracao} alt="Geracao" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Mao} alt="Maos" />
        </ImagePartner>
        <ImagePartner>
          <Image src={AC} alt="Ac" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Maes} alt="Maes" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Mulheres} alt="Mulheres" />
        </ImagePartner>
        <ImagePartner>
          <Image src={Sales} alt="Sales" />
        </ImagePartner>
      </PartnerList>
    </HomeContainer>
  )
}
