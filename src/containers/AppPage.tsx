import React from 'react'
import { useParams } from 'react-router-dom'

import {
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import AppDetail from 'components/AppDetail'
import LinkBtn from 'components/LinkBtn'
import { styles } from 'themes'
import { apps, tags } from 'config/data'

const text = `JunoCasino is a permissinless casino built on the Juno Network that
prioritise the ability for users to bet on various positions. By
offering both liquidity markets and north-delegation pools, JunoCasino
bridges the gap for medium-sized alpha markets that still base the
consumer. It’s almost like Las Vegas when you think about it. Perhaps
Montengro, I don’t really know that many gambling capitals of the
world. This text is really just placeholder, and I’d be impressed if
you read this far into it. Each project will be required to submit a
medium-length description, no more than 1200 characters, describing
their project and what the purpose is.`

const AppPage: React.FC = () => {
  const params = useParams()
  const app = apps[parseInt(params?.appId || '1')]

  return (
    <Grid templateColumns='repeat(3, 1fr)' mt={10} gap={8}>
      <GridItem colSpan={[3, null, 2]}>
        <AppDetail
          category={app.category}
          color={app.color}
          text={text}
        ></AppDetail>
      </GridItem>
      <GridItem colSpan={[3, null, 1]}>
        <Box p={5} mb={8} bg={styles.color.dark} borderRadius={20}>
          <Heading mb={1} fontSize={styles.fonts.header.fontSize}>
            Token
          </Heading>
          <LinkBtn
            text='GAMBLER'
            size={styles.fonts.content.fontSize}
            weight={styles.fonts.content.fontWeight}
            color='rgba(240, 125, 125, 0.2)'
            icon={true}
          ></LinkBtn>
        </Box>
        <Box p={5} mb={8} bg={styles.color.dark} borderRadius={20}>
          <Heading mb={1} fontSize={styles.fonts.header.fontSize}>
            Team
          </Heading>
          <Flex>
            <LinkBtn
              text='@seekingtau'
              size={styles.fonts.content.fontSize}
              weight={styles.fonts.content.fontWeight}
              color='rgba(125, 240, 157, 0.2)'
              icon={true}
            ></LinkBtn>
            <LinkBtn
              text='@junocreator'
              size={styles.fonts.content.fontSize}
              weight={styles.fonts.content.fontWeight}
              color='rgba(210, 125, 240, 0.2)'
              icon={true}
            ></LinkBtn>
          </Flex>
        </Box>
        <Box p={5} mb={8} bg={styles.color.dark} borderRadius={20}>
          <Heading mb={1} fontSize={styles.fonts.header.fontSize}>
            Social Media
          </Heading>
          <Flex>
            <LinkBtn
              text='twitter'
              size={styles.fonts.content.fontSize}
              weight={styles.fonts.content.fontWeight}
              color='rgba(125, 157, 240, 0.2)'
              icon={true}
            ></LinkBtn>
            <LinkBtn
              text='discord'
              size={styles.fonts.content.fontSize}
              weight={styles.fonts.content.fontWeight}
              color='rgba(141, 125, 240, 0.2)'
              icon={true}
            ></LinkBtn>
            <LinkBtn
              text='reddit'
              size={styles.fonts.content.fontSize}
              weight={styles.fonts.content.fontWeight}
              color='rgba(240, 125, 125, 0.2)'
              icon={true}
            ></LinkBtn>
          </Flex>
        </Box>
        <Box p={5} mb={8} bg={styles.color.dark} borderRadius={20}>
          <Heading mb={1} fontSize={styles.fonts.header.fontSize}>
            Tags
          </Heading>
          <Wrap>
            {tags.map((tag) => {
              return (
                <WrapItem>
                  <LinkBtn
                    text={tag.text}
                    size={styles.fonts.content.fontSize}
                    weight={styles.fonts.content.fontWeight}
                    color={tag.color}
                    icon={false}
                  ></LinkBtn>
                </WrapItem>
              )
            })}
          </Wrap>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default AppPage
