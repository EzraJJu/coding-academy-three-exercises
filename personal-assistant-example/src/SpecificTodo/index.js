import React, { useContext, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  Container, DescriptionInput, Header, SaveTodo,
} from './styles'
import { TodosContext, EDIT_TODO } from '../context'

const SpecificTodo = () => {
  const { id: idParam } = useParams()
  const history = useHistory()
  const { state, dispatch } = useContext(TodosContext)
  const thisTodo = useRef(state.find(({ id }) => id === idParam)).current
  const [description, setDescription] = useState(thisTodo.description || '')

  return (
    <Container>
      <Header>{thisTodo.text}</Header>
      <DescriptionInput
        placeholder="Todo details..."
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <SaveTodo onClick={() => {
        dispatch({
          action: EDIT_TODO,
          payload: {
            id: thisTodo.id,
            description,
          },
        })
        history.goBack()
      }}
      >
        Save Todo
      </SaveTodo>
    </Container>
  )
}

export default SpecificTodo
