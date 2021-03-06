import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }
  componentDidMount(){
    
  }

  leftClick = () => {
    if((this.state.index - 1) < 0){
      this.setState({
        index: (carouselData.length - 1)
      })
    } else {
      let newIndex = this.state.index - 1;
      this.setState({
        index: newIndex
      })
    }

  }

  rightClick = () => {
    if((this.state.index + 1) > carouselData.length - 1){
      this.setState({
        index: 0
      })
    } else {
      let newIndex = this.state.index + 1;
      this.setState({
        index: newIndex
      })
    }

  }


  selectedImage = () => {
   
    return <img src={carouselData[this.state.index]} style={{display: 'block', Zindex: 0}} alt={this.state.index} />
  }
  
  
  render(){

    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}