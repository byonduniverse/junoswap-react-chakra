import React, { useContext } from 'react'
import {
  Heading,
  Flex,
  Wrap,
  WrapItem,
  Center,
  InputGroup,
  Input,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react'

import { Svgs } from 'assets'
import { ThemeContext } from 'ThemeContext'
import { tags } from 'config/data'

const AppSearch: React.FC = () => {
  const { styles } = useContext(ThemeContext)

  return (
    <Flex direction='column'>
      <SimpleGrid columns={[2, null, 1]}>
        <Heading pb={5} fontSize={styles.fonts.header.fontSize}>
          App Store
        </Heading>
        <InputGroup mb='20px' w='auto' alignItems='center'>
          <InputLeftElement
            pointerEvents='none'
            height='100%'
            p={0}
            children={<Svgs.Filter></Svgs.Filter>}
          ></InputLeftElement>
          <Input
            w='70%'
            placeholder='search by type'
            borderRadius='10px'
            height='var(--chakra-sizes-7)'
            color={styles.color.gray}
            bg={styles.color.dark}
          ></Input>
        </InputGroup>
      </SimpleGrid>
      <Wrap spacing='10px' align='center'>
        {tags.map((item, index) => (
          <WrapItem key={index}>
            <Center
              p={'2px'}
              pl={2}
              pr={2}
              bg={item.color}
              cursor='pointer'
              fontSize={styles.fonts.content.fontSize}
              fontWeight={styles.fonts.content.fontWeight}
              borderRadius='10px'
            >
              {item.text}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}

export default AppSearch
