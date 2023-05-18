'use client'

import { Header } from '@/components/Patterns/Header'
import { HomeContainer } from '@/styles/page/home'

import Link from 'next/link'

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <Link href="/history">Mão no Arado</Link>
      <Link href="/project">Projetos</Link>
      <Link href="/contact">Página de Contato</Link>
    </HomeContainer>
  )
}
