import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from './Table'
import TableControlPanel from './TableControlPanel'

class ProductsList extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }
  }

  // componentDidMount() {
  //   this.setState({products: this.props.products})
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps in ProductsList.jsx', nextProps)
  //   if (nextProps.products !== this.props.products) {
  //     this.setState({ products: nextProps.products })
  //   }
  // }

  render() {
    const products = this.state.products
    console.log('this.state in products list', this.state)

    return (
      <div id="products-container">
        <TableControlPanel />
        <Table />
      </div>
    )
  }
}

const mstp = (state) => ({products: state.items})

export default connect(mstp)(ProductsList)
