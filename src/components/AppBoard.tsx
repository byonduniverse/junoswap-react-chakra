import React, { useContext } from 'react'
import { Flex, Input, Button, Box } from '@chakra-ui/react'

import AppItems from './AppItems'
import { Svgs } from 'assets'
import { apps } from 'config/data'
import { ThemeContext } from 'ThemeContext'

const AppBoard: React.FC = () => {
  const { styles } = useContext(ThemeContext)

  return (
    <Box>
      <Flex mb='40px'>
        <Input
          placeholder='search dapps'
          w='476px'
          color={styles.color.gray}
          bg={styles.color.dark}
        ></Input>
        <Button
          leftIcon={<Svgs.Filter />}
          ml='30px'
          minW='80px'
          colorScheme='teal'
          variant='outline'
          border='0px'
          color={styles.color.gray}
          bg={styles.color.dark}
        >
          sort
        </Button>
      </Flex>
      <AppItems apps={apps}></AppItems>
    </Box>
  )
}

export default AppBoard
