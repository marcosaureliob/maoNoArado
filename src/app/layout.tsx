// import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'

import global from '../styles/global.module.scss'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  style: 'normal',
  preload: false,
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={global.html}>
      <body className={roboto.className}>
        {/* <body className={inter.className}> */}
        <StyledComponentsRegistry> {children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}