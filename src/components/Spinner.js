import React, { Component } from 'react'
import loading from './Spinner-5.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt= {loading} />
      </div>
    )
  }
}
