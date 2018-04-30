import {RECEIVE_LIST,AUTO_CLICK }from '../actions'

const todos = (state={}, action) => {
    switch (action.type) {
      case RECEIVE_LIST:
      console.log("list",action.list)
      return { 
        search_term:action.search_term,
        list:action.list
        }
        case AUTO_CLICK:
        return { 
          search_term:action.search_term,
          }  
    default:
    return state
    }
  }
  export default todos