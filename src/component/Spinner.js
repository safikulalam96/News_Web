import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3 '>
        <img className='my-4 rounded-circle' src={loading} alt='loading'/>
      </div>
    )
  }
}

export default Spinner