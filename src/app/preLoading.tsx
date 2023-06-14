'use client'

import { ReactNode, useEffect, useState } from 'react'
import { globalStyles } from '@/styles/global'
import styles from '@/styles/page/preLoading.module.css'
import logo from '../assets/logo.svg'
import Image from 'next/image'

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
    <div>
      {pageLoad ? (
        children
      ) : (
        <div className={styles.preLoadingPage}>
          <div className={styles.logoBox}>
            <Image src={logo} alt="" fill />
          </div>
        </div>
      )}
    </div>
  )
}
