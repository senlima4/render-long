import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import reportWebVitals from './reportWebVitals'

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)

reportWebVitals()
