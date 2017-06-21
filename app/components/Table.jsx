import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
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

  handleClick(event) {
    event.preventDefault()
    const target = event.target
  }

  render() {
    return (
      <table className="table-condensed">
        <thead>
          <tr className="active">
            <th scope="col">Product</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Brand Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">MSRP</th>
            <th scope="col">Reviews</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products && this.props.products.map((product, i) => (
            <tr key={i}>
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
              <td>{product.brandName}</td>
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
                  name={product.itemId}>
                  <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

const mstp = (state) => ({products: state.items})
const mdtp = (dispatch) => ({})

export default connect(mstp, mdtp)(Table)