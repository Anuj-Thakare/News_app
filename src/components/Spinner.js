import React, { Component } from 'react'
import Sggs from './Sggs.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
         <img className="my-3" src={Sggs} alt="loading"/>
      </div>
    )
  }
}

export default Spinner