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

  componentDidMount() {
    this.setState({products: this.props.products})
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps in ProductsList.jsx', nextProps)
    if (nextProps.products !== this.props.products) {
      this.setState({ products: nextProps.products })
    }
  }

  render() {
    const products = this.state.products

    return (
      <div id="products-container">
        <TableControlPanel />
        <Table products={products} />
      </div>
    )
  }
}

const mstp = (state) => ({products: state.products})

export default connect(mstp)(ProductsList)
