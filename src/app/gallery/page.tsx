'use client'

import Image from 'next/image'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'

import { imageDatabase } from '@/database/index'

import { GalleryContainer, ImageContainer } from '@/styles/page/gallery'

export default function Gallery() {
  return (
    <GalleryContainer>
      <h2>Galeria de Imagens</h2>

      <LightGallery
        elementClassNames={ImageContainer()}
        plugins={[lgVideo]}
        mode="lg-fade"
      >
        {imageDatabase.map((image) => {
          return (
            <a key={image.title} className="gallery-item" data-src={image.src}>
              <Image
                src={image.src}
                alt={image.title}
                style={{ objectFit: 'cover' }}
                fill
              />
            </a>
          )
        })}
      </LightGallery>
    </GalleryContainer>
  )
}
