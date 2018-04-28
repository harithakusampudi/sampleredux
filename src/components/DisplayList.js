
import React from 'react'
import PropTypes from 'prop-types'
import { toggletodo } from '../actions'

const DisplayList = ({ todos,toggletodo }) => (

   todos.map(todo=><li onClick={()=>(toggletodo(todo.id))}
                      style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                      {todo.input}{todo.completed}
                  </li>
            )
  
)

DisplayList.propTypes = {
  todos:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggletodo: PropTypes.func.isRequired
}

export default DisplayList