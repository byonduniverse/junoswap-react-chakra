import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

import Header from './Header'
import { ThemeContext } from '../ThemeContext'
import { styles } from 'themes'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ styles }}>
      <Container maxW='1200px' color='white'>
        <Header></Header>
        {children}
      </Container>
    </ThemeContext.Provider>
  )
}

export default Layout
