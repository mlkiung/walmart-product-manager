import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { deleteProduct, updateBrand } from '../redux/search'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products,
      editable: false,
      updatedBrandName: '',
      itemId: '',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  handleClick(event) {
    event.preventDefault()
    const target = event.target.name
    console.log(target)
    if (target && target === 'brand') this.setState({ editable: true })
    else {
      target !== undefined ? window.localStorage.removeItem(target) : null
      target !== undefined ? window.location.reload() : null
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const brandName = this.state.updatedBrandName
    const itemId = this.state.itemId
    this.setState({ editable: false })
    this.props.updateBrand(itemId, brandName)
  }

  handleChange(event) {
    this.setState({
      updatedBrandName: event.target.value,
      itemId: event.target.name,
    })
  }

  render() {
    console.log('this.props', this.state)
    const products = _.values(this.state.products)
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
          {products && products.map((product, i) => (
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
              {
                this.state.editable
                  ? (<td>
                      <form className="form-inline">
                        <div className="form-group">
                          <label className="sr-only" htmlFor="editable-brand">Brand</label>
                          <input
                            value={this.state.updatedBrandName}
                            onChange={this.handleChange}
                            type="text"
                            name={product.itemId}
                            className="form-control"
                            id="editable-brand"
                            placeholder="Brand" />
                          <input type="submit" className="btn btn-default" onClick={this.handleSubmit}></input>
                        </div>
                      </form>
                    </td>)
                  : (<td>{product.brandName}<a onClick={this.handleClick}href="#" name="brand"><span className="caret"></span></a></td>)
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

const mstp = (state) => ({products: state.products})
const mdtp = (dispatch) => ({ deleteProduct, updateBrand })

export default connect(mstp, mdtp)(Table)
