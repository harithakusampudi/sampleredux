
import React from 'react'
// import { connect } from "react-redux";
import PropTypes from 'prop-types'
// import { toggletodo } from '../actions'

const DisplayList = ({ list }) => (
      console.log(list),
      <p>{list}</p>
)
  //  list.map(todo=><li>{todo.description}</li>))

DisplayList.propTypes = {
  todos:PropTypes.objectOf(PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired).isRequired,
}

export default DisplayList;