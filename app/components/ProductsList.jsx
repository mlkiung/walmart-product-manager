import React, { Component } from 'react'

import data from '../../dummyData'

class ProductsList extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  // most likely will need a lifecycle hook to grab products from store, set them on local state, and re-render table, or grab products from store and properly render the table (nextProps)

  render() {
    const products = this.state.products
    const _products = Array.from(data)

    console.log('DATA', data)
    console.log('PRODUCTS', _products)

    return (
      <div id="products-container">
        <div className="input-group">
          <span className="input-group-addon" id="sizing-addon2">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </span>
          <input type="text" className="form-control" placeholder="Search products" aria-describedby="sizing-addon2" />
        </div>
        <table className="table-condensed">
          <tr className="active">
            <th scope="col">Product</th>
            <th scope="col">Brand Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">MSRP</th>
            <th scope="col">Reviews</th>
            <th scope="col"></th>
          </tr>
          {
            _products && _products.map((product, i) => (
              <tr key={i}>
                <td></td>
              </tr>
            ))
          }
        </table>
      </div>
    )
  }
}

export default ProductsList
