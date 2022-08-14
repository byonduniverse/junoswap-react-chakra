import React from 'react'

import { Provider, Carousel, LeftButton, RightButton } from 'chakra-ui-carousel'
import { Image } from '@chakra-ui/react'

interface Props {
  slides: SlideImage[]
}

const CarouselSlide: React.FC<Props> = ({ slides }) => {
  return (
    <>
      <Provider>
        <Carousel gap={10}>
          {slides.map((slide, index) => {
            return <Image key={index} src={slide.image} height='auto' />
          })}
        </Carousel>
        <LeftButton />
        <RightButton />
      </Provider>
    </>
  )
}

export default CarouselSlide
