import React from 'react'
import './App.css'
import { Container, Title } from './Styles'
import Todos from './Todos'

function App() {
  return (
    <Container>
      <Title>Things to be done!</Title>
      <Todos />
    </Container>
  )
}

export default App
