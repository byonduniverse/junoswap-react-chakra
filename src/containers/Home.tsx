import React from 'react'
import { Divider, Box, Grid, GridItem, Hide } from '@chakra-ui/react'

import CarouselSlide from 'components/CarouselSlide'
import AppSearch from 'components/AppSearch'
import AppBoard from 'components/AppBoard'
import { slideData } from 'config/images'

const Home: React.FC = () => {
  return (
    <>
      <CarouselSlide slides={slideData}></CarouselSlide>
      <Grid pt={10} minBlockSize='sm' templateColumns='repeat(4, 1fr)' gap={8}>
        <GridItem colSpan={[4, null, 1]} w='100%'>
          <Box maxW='300px' pb='20px' display='flex'>
            <AppSearch></AppSearch>
            <Hide below='md'>
              <Divider
                orientation='vertical'
                height={window.innerHeight - 400}
              />
            </Hide>
          </Box>
          <Hide above='md'>
            <Divider orientation='horizontal' width='100%' mb='20px' />
          </Hide>
        </GridItem>
        <GridItem colSpan={[4, null, 3]}>
          <AppBoard></AppBoard>
        </GridItem>
      </Grid>
    </>
  )
}

export default Home
