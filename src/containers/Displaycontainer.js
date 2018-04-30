import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActionCreators from '../actions'
import Display from './Display'
// import { DisplayList } from '../components/DisplayList'
 

const mapStateToProps = state => ({
   list:state.todos,
})
  
function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(
          {
            ...TodoActionCreators
          },
          dispatch
        )
      };
    }
    

export default connect(
  mapStateToProps,mapDispatchToProps
)(Display)