'use client'

import { globalStyles } from '@/styles/global'
import { Header } from '@/components/Patterns/Header'

import Home from './home/page'
import Link from 'next/link'

globalStyles()

export default function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}
