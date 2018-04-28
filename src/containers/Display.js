import React from 'react';
import { addtodo } from '../actions'
import { connect } from "react-redux";


const  Display = ({dispatch}) => {
  var input
    return (
      <div >
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addtodo(input.value));
          input.value = "";
        }}>
       <input ref={node => input = node}/>
       <button type="submit" >add todo</button>
       </form>
      </div>
    );
  }

export default connect()(Display);

