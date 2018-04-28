import { connect } from 'react-redux'
import React from 'react'
import DisplayList from '../components/DisplayList'
import { toggletodo} from '../actions'


const mapStateToProps = state => ({
   todos:state.todos
})
const mapDispatchToProps = dispatch => ({
  toggletodo: id => dispatch(toggletodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayList)