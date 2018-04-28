export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nexttodoid=0
export const addtodo = input =>
{
    return {  
        type:ADD_TODO,
        id:nexttodoid++,
        completed:false,
        input   
    }
} 
export const toggletodo = id => ({
    type:TOGGLE_TODO,
    id,
  })