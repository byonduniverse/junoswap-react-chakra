import React from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  text: string
  color: string
}

const AppSearchItem: React.FC<Props> = ({ text, color }) => {
  return (
    <Button p={1} variant='solid' bg={color}>
      {text}
    </Button>
  )
}

export default AppSearchItem
