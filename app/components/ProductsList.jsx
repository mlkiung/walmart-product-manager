import React, { Component } from 'react'
import { values } from 'lodash'

import data from '../../dummyData'

class ProductsList extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }
  }

  // most likely will need a lifecycle hook to grab products from store, set them on local state, and re-render table, or grab products from store and properly render the table (nextProps)
  componentDidMount() {
    // using lodash to transform incoming data into an array
    this.setState({ products: _.values(data) })
  }

  render() {
    const products = this.state.products

    console.log('DATA', data)
    console.log('PRODUCTS', products)

    return (
      <div id="products-container">
        <div className="input-group">
          <span className="input-group-addon" id="sizing-addon2">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </span>
          <input type="text" className="form-control" placeholder="Search products" aria-describedby="sizing-addon2" />
        </div>
        <table className="table-condensed">
          <thead>
            <tr className="active">
              <th scope="col">Product</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">MSRP</th>
              <th scope="col">Reviews</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              products && products.map((product, i) => (
                <tr key={i}>
                  <td>{`<image>`}</td>
                  <td>{product.name}</td>
                  <td>{`${product.size} oz`}</td>
                  <td>{product.link}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{`$${product.price}`}</td>
                  <td>{`$${product.msrp ? product.msrp : '(none)'}`}</td>
                  <td>{product.reviews.rating}</td>
                  <td>{`(${product.reviews.numReviews})`}</td>
                  <td></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductsList
