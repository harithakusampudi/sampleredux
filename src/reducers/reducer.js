import { RECEIVE_LIST, AUTO_CLICK, GET_LOCATION }from '../actions'

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
          case GET_LOCATION:
          return { 
            search_term:action.search_term,
            results:action.results
            }  
    default:
    return state
    }
  }
  export default todos