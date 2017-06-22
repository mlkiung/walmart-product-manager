import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct, updateBrand } from '../redux/search'
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
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick(event, ...args) {
    event.preventDefault()
    console.log('event.target', event.target)
    const name = event.target.id.slice(0, 5)
    if (name === 'toggl') this.setState({ editable: true })
    else if (name === 'input') {
      const argsArr = [...args]
      const itemId = argsArr[0].toString()
      const brand = argsArr[1]
      console.log('value', argsArr)
      this.props.updateBrand(itemId, brand)
      this.setState({ editable: false })
    }
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.deleteProduct(event.target.id)
  }

  render() {
    const product = this.props.product
    console.log('PRODUCT', this.props.product)

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
            ? <BrandInput product={product} handleClick={this.handleClick} />
            : <BrandToggle product={product} handleClick={this.handleClick} />
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
            onClick={this.handleDelete}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true" id={product.itemId}></span>
          </button>
        </td>
      </tr>
    )
  }
}

const mstp = (state, ownProps) => ({product: state.products[ownProps.product.itemId]})
const mdtp = (dispatch, ownProps) => ({ deleteProduct, updateBrand })

export default connect(mstp, mdtp)(TableRow)
