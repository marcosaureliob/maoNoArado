'use client'

import { ReactNode, useEffect, useState } from 'react'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/page/preLoading'

globalStyles()
export default function PreLoading({ children }: { children: ReactNode }) {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setPageLoad(true)
    }

    handleLoad()
  }, [])

  return (
    <Container>
      {pageLoad ? <div>{children}</div> : <span>Carregando...</span>}
    </Container>
  )
}
