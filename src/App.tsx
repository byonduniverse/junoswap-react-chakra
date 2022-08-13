import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './routes'
import Layout from './components/Layout'

import theme from 'theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <AppRoutes />
    </Layout>
  </ChakraProvider>
)
