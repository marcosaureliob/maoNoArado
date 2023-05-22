'use client'

import { GalleryContainer } from '@/styles/page/gallery'
import ImageGallery from './components/ImageGallery/page'

export default function Gallery() {
  return (
    <GalleryContainer>
      <h2>Galeria de Imagens</h2>

      <ImageGallery />
    </GalleryContainer>
  )
}
