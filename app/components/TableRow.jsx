import React, { Component } from 'react'
import { connect } from 'react-redux'
import BrandInput from './BrandInput'
import BrandToggle from './BrandToggle'

class TableRow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product,
      editable: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  render() {
    const product = this.state.product

    return (
      <tr>
        <td><img src={product.thumbnailImage}/></td>
        <td>{product.name}</td>
        <td>
          <a href={product.productUrl} target="_blank">
            <span
              className="glyphicon glyphicon-new-window"
              aria-hidden="true"
              aria-label="Open product in a new window"></span>
          </a>
        </td>
        {
          this.state.editable
            ? <BrandInput product={product} onClick={this.handleClick} />
            : <BrandToggle product={product} onClick={this.handleClick} />
        }
        <td>{product.categoryPath}</td>
        <td>{`$${product.salePrice}`}</td>
        <td>{`${product.msrp ? `$${product.msrp}` : '(none)'}`}</td>
        <td>{product.customerRating}</td>
        <td>{`(${product.numReviews})`}</td>
        <td>
          <button
            type="submit"
            className="btn btn-default"
            aria-label="Left Align"
            onClick={this.handleClick}
            name={`table-row-${product.itemId}`}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  }
}

export default TableRow
