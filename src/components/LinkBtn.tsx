import React from 'react'
import { Text, Center, Link } from '@chakra-ui/react'

import { Svgs } from 'assets'

interface Props {
  text: string
  size: string
  weight: number
  color: string
  icon: boolean
}

const LinkBtn: React.FC<Props> = ({ text, size, weight, color, icon }) => {
  return (
    <Link display='flex' alignItems='center' href='#'>
      <Text
        p={1}
        pl={2}
        fontSize={size}
        fontWeight={weight}
        color='white'
        bg={color}
        borderRadius={8}
        display='flex'
      >
        {text}
        {icon && (
          <Center p='0px 5px'>
            <Svgs.Union></Svgs.Union>
          </Center>
        )}
      </Text>
    </Link>
  )
}

export default LinkBtn
