import React, { useContext, useState } from 'react'
import { ADD_TODO, CLEAR_ALL_TODOS, TodosContext } from '../context'
import {
  Container, Input, Button, TodosList, Row, Header, NoTodos,
} from './styles'
import Todo from '../Todo'

const AllTodos = () => {
  const { state, dispatch } = useContext(TodosContext)
  const [filter, setFilter] = useState('')
  const [todoText, setTodoText] = useState('')

  return (
    <Container>
      <Row>
        <Input placeholder="My todo" value={todoText} onChange={e => setTodoText(e.target.value)} />
        <Button onClick={() => dispatch({ action: ADD_TODO, payload: todoText })}>Add Todo</Button>
      </Row>
      <Row>
        <Input placeholder="Search todos" value={filter} onChange={e => setFilter(e.target.value)} />
        <Button onClick={() => dispatch({ action: CLEAR_ALL_TODOS })}>Clear All Todos</Button>
      </Row>
      <Header>Your Todos:</Header>
      <TodosList>
        {state.length ? state.filter(({ text }) => text.includes(filter))
          .map(({ id, ...rest }) => <Todo key={id} id={id} dispatch={dispatch} {...rest} />)
          : <NoTodos>No Todos. Enjoy your day!</NoTodos>}
      </TodosList>
    </Container>
  )
}

export default AllTodos
