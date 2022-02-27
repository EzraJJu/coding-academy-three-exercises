import React, { useReducer, useEffect } from 'react'
import nanoid from 'nanoid'

export const TodosContext = React.createContext()

// ACTIONS
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS'

const baseReducer = (prevState, { action, payload }) => {
  switch (action) {
    case (ADD_TODO):
      return [...prevState, { id: nanoid(), text: payload }]
    case (DELETE_TODO):
      return prevState.filter(({ id }) => id !== payload)
    case (CLEAR_ALL_TODOS):
      return []
    case (EDIT_TODO):
      return prevState.map(
        ({ id, ...rest }) => (id === payload.id
          ? ({ ...payload, ...rest }) : ({ id, ...rest })),
      )
    default:
      return prevState
  }
}

export const TodosProvider = ({ children }) => {
  // Initialize Todos from localStorage, otherwise empty array
  const [state, dispatch] = useReducer(baseReducer, null,
    () => JSON.parse(localStorage.getItem('todos')) || [])

  // Keep localStorage version up-to-date with every change to state
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])


  return (
    <TodosContext.Provider value={{
      state,
      dispatch,
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
