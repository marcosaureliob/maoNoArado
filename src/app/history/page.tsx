'use client'
import { HistoryContainer, HistoryContent, CardsContainer, Card, ContainerPresident, Wrapper } from "@/styles/page/history";

import { Target, Binoculars } from "phosphor-react";

import BackgroundCard from "@/assets/background-card.svg";
import Perfil from "@/assets/Perfil.png";
import Image from 'next/image';

export default function History() {
  return (
    <HistoryContainer>
      <HistoryContent>
        <h2>Associação Mão no Arado</h2>

       
              <p>Somos uma organização não governamental (ONG), que surgiu em dezembro de 1998 a partir da iniciativa de uma família, que realizava ações dentro de comunidades no bairro de Itaquera, zona leste de São Paulo em épocas natalinas, com a captação e doações de roupas, calçados, brinquedos e alimentos.</p>

              <p>Em setembro de 2013, foi criada a Associação Beneficente Mão no Arado, para a ampliação do trabalho social em prol das comunidades da região.</p> 

              <p>Atualmente os projetos e atividades são financiados por meio de doações, parceiros, instituições públicas e privadas, sendo que grande parte da mão de obra que atua na ONG é formada por voluntários e amigos.</p> 
      </HistoryContent>

      <CardsContainer>

        <Image
              src={BackgroundCard}
              alt=""
              fill
        />

        <Card>
          <div>
            <Target size={40} />
            <h3>            
                Missão     
            </h3>
          </div>
           
            <p>Promover proteção básica, por meio do serviço de convivência e fortalecimento de vínculo as      famílias em situação de média e alta vulnerabilidade e risco social.
              Além de promover a preparação para o mundo do trabalho e inclusão produtiva, para o desenvolvimento da autonomia, do protagonismo social e da formação cidadã.
            </p>
        </Card> 

        <Card>
          <div>
            <Target size={40} />
            <h3>            
                Visão     
            </h3>
          </div>
           
            <p>Buscamos ser referência no atendimento social, visando mudar a realidade individual, familiar e consequentemente a comunidade a qual atendemos.
            </p>
        </Card> 

        <Card>
          <div>
            <Binoculars size={40} />
            <h3>            
                Valores    
            </h3>
          </div>
           
            <p>Amor ao próximo, acolhimento, ética, respeito, comprometimento, transparência, solidariedade e valorização.
            </p>
        </Card> 

      </CardsContainer>

      <ContainerPresident>
        <h2>Nossa Presidente</h2>

  

        <Wrapper>

        <Image
          src={Perfil}
          alt=""     
        />
   

          <div>
            <h3>Roseli Machado Ribeiro</h3>
            <p>Presidente da Mão no Arado há mais de 24 anos.</p>

            <p>Apaixonada e dedicada em ajudar pessoas,</p>
            <p>Roseli criou a Associação Mão no Arado há</p>
            <p>mais de 24 anos.</p>
          </div>
        </Wrapper>
      </ContainerPresident>

    </ HistoryContainer>
  )
}
