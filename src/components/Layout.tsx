import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW='1200px' color='white'>
      <Header></Header>
      {children}
    </Container>
  )
}

export default Layout
