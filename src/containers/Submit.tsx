import React, { useContext } from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'

import SubmitStep from 'components/SubmitStep'
import { steps } from 'config/data'
import { ThemeContext } from 'ThemeContext'

const Submit: React.FC = () => {
  const { styles } = useContext(ThemeContext)

  return (
    <Box mt='40px'>
      <Heading
        fontSize='36px'
        fontWeight={styles.fonts.header.fontWeight}
        color='white'
        display='flex'
        justifyContent='center'
      >
        Submit an app
      </Heading>
      <Text
        fontSize={styles.fonts.title.fontSize}
        fontWeight={styles.fonts.content.fontWeight}
        display='flex'
        justifyContent='center'
      >
        Start here and follow this guide to submit an app.
      </Text>
      <Box p='50px'>
        <SubmitStep steps={steps} />
      </Box>
    </Box>
  )
}

export default Submit
