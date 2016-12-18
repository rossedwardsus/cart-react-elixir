import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

export default class Home extends React.Component{
  render(){
  alert();
  
  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
  }
}