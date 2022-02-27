import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Text, DeleteButton } from './styles'
import { DELETE_TODO } from '../context'

const Todo = ({ dispatch, id, text }) => {
  const history = useHistory()

  return (
    <Container>
      <DeleteButton onClick={() => dispatch({ action: DELETE_TODO, payload: id })} />
      <Text title="View Details" onClick={() => history.push(`/todo/${id}`)}>{text}</Text>
    </Container>
  )
}

export default Todo
