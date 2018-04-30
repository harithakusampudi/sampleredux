import React from 'react';
import PropTypes from 'prop-types'
import '../App.css'



export default class  Display extends React.Component{ 

  constructor(props){
    super(props);
    this.state={
      search_term:'',
    }
    this.updateSearchValue=this.updateSearchValue.bind(this);  
    // this.removeAutolist=this.removeAutolist.bind(this);  
  }
  
   updateSearchValue(e){
    this.setState({search_term:e.target.value})
    this.props.actions.fetchlist(this.state.search_term)
    // this.removeAutolist()
    console.log("search-term",this.state.search_term)
    }
    componentWillReceiveProps(search_term) {
      this.setState({
        // set something 
      });
    }

    // removeAutolist()
    //   {
    //     this.setState({search_term:''})
     
    //   }
render(){ 
  return( 
      <div>  
        <input class="search_box" value={this.props.search_term} onChange={this.updateSearchValue}/>
        {/* <button>search</button> */}
        {this.props.list.list ? this.props.list.list.map((ele)=><div class="auto_box" onClick={()=>this.props.actions.autoclick(ele)}>{ele.description}</div>) : <div/>}
      </div>
    );
  }
}

// Display.propTypes = {
//   todos:PropTypes.objectOf(PropTypes.shape({
//     list: PropTypes.array.isRequired,
//     search_term:PropTypes.string.isRequired
//   }).isRequired).isRequired,
// }

 