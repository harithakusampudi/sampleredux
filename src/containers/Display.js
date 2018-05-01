import React from 'react';
// import PropTypes from 'prop-types'
import '../App.css'
import {MyMapComponent} from '../components/Map' ;



export default class  Display extends React.Component{ 

  constructor(props){
    super(props);
    this.state={
      search_term:''
    }
    this.updateSearchValue=this.updateSearchValue.bind(this);
    this.buttonclick=this.buttonclick.bind(this);  
   
  }
  
  updateSearchValue(e){
      console.log("onchange",e.target.value) ,
    this.props.actions.fetchlist(e.target.value)
  }
  buttonclick(search_term){
    // console.log("button",e.target.value)
    this.props.actions.getlocation(search_term)
  }

  componentWillReceiveProps(nextProps) { 
    console.log("nextprops")
    if(nextProps.todos.search_term|| nextProps.todos.search_term==="")
        this.setState({search_term:nextProps.todos.search_term}) 
  }

render(){ 
  return( 
      <div>  
        <input class="search_box" value={this.state.search_term} onChange={this.updateSearchValue} />
          {this.props.todos.list ? this.props.todos.list.map((ele)=>
            <div class="auto_box" onClick={()=>{
                                  this.props.actions.autoclick(ele);
                                  this.props.actions.getlocation(ele.description)}}>{ele.description}
            </div>
          ) : <div/>}<br/>
        <MyMapComponent results={this.props.todos.results}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}/>
      </div>
    );
  }
}


 