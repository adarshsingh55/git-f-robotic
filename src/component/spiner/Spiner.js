import React, { Component } from 'react'
import "./Spiner.css"

export default class Spiner extends Component {
  render() {
    return (
      <div className='spiner my-2'>
        <img src="/img/block.gif" alt="loding" />
      </div>
    )
  }
}
