import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  clickHandler=()=>{
    this.setState({
      color:this.props.getSelectedColor
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.clickHandler} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}