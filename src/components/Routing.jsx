import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


export default class Routings extends Component {
  render() {
    return (

      <>
        <h2> Routing Page</h2>
        <Link to='data'> click To Go On Data </Link>
        <Outlet/>
      </>
    )
  }
}
