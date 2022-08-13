import React, { useRef } from 'react'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  useDimensions,
} from '@chakra-ui/react'

import LinkBtn from './LinkBtn'
import { styles } from 'theme'

interface Props {
  category: string
  color: string
  text: string
}

const AppDetail: React.FC<Props> = ({ category, color, text }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(elementRef, true)

  return (
    <>
      <Box
        maxW='705px'
        bg={color}
        borderRadius='20px'
        height={dimensions ? dimensions.borderBox.width / 2 : 360}
      ></Box>
      <Flex pr='60px' mt={3}>
        <Heading fontSize='36px'>{category}</Heading>
        <Spacer />
        <LinkBtn
          text='go to website'
          size={styles.fonts.title.fontSize}
          weight={700}
          color='rgba(240, 125, 125, 0.2)'
          icon={true}
        ></LinkBtn>
      </Flex>
      <Text
        pt={1}
        fontSize={styles.fonts.content.fontSize}
        fontWeight={styles.fonts.content.fontWeight}
      >
        {text}
      </Text>
    </>
  )
}

export default AppDetail
