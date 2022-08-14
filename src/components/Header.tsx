import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Text,
  Spacer,
  Button,
  Heading,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  Show,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { styles } from 'themes'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

const DrawerNav: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Flex direction={'column'} m={5}>
            <Link href='/'>home</Link>
            <Link href='/new_arrivals'>new arrivals</Link>
            <Link href='/submit'>submit app</Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex alignItems='center' gap={2}>
      <Link p={2} cursor='pointer' href='/'>
        <Heading size='md' fontSize='1.5rem' color='white'>
          App Store
        </Heading>
        <Text pt={1} fontSize='14px' color='tomato' fontWeight='bold'>
          BUILT BY JUNO
        </Text>
      </Link>
      <Spacer />
      <Show breakpoint='(min-width: 600px)'>
        <Link pr={10} href='/'>
          home
        </Link>
        <Link pr={10} href='/new_arrivals'>
          new arrivals
        </Link>
        <Link pr={10} href='/submit'>
          submit app
        </Link>
      </Show>
      <Show breakpoint='(max-width: 599px)'>
        <Button
          color={styles.color.primary}
          variant='ghost'
          onClick={() => {
            onOpen()
          }}
        >
          <HamburgerIcon w={8} h={8} />
        </Button>
        <DrawerNav isOpen={isOpen} onClose={onClose}></DrawerNav>
      </Show>
    </Flex>
  )
}

export default Header
