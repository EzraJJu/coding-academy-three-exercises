import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllTodos from './AllTodos'
import Greeting from './Greeting'
import NavBar from './Navbar'
import theme from './theme'
import { TodosProvider } from './context'
import SpecificTodo from './SpecificTodo'

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <TodosProvider>
      <AppWrapper>
        <BrowserRouter basename="/personal-assistant-example">
          <NavBar />
          <Switch>
            <Route path="/todo/:id">
              <SpecificTodo />
            </Route>
            <Route path="/todo">
              <AllTodos />
            </Route>
            <Route path="/">
              <Greeting />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </TodosProvider>
  </ThemeProvider>
)

export default App
