import {ADD_TODO,TOGGLE_TODO }from '../actions'

const todos = (state=[], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,{
            input:action.input,
            id:action.id,
            completed:false
          }
        ];
      case TOGGLE_TODO:
        return state.map(todo=> (todo.id === action.id)? {...todo, completed: !todo.completed} : todo)
      default:
        return state
    }
  }
  export default todos