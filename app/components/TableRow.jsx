import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct, updateBrand } from '../redux/search'
import BrandInput from './BrandInput'
import BrandToggle from './BrandToggle'

class TableRow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {},
      editable: false,
      newBrandName: '',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.setState({product: this.props.product, key: this.props.key})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  handleClick(event, ...args) {
    event.preventDefault()
    const name = event.target.id.slice(0, 5)
    if (name === 'toggl') this.setState({ editable: true })
    else if (name === 'input') {
      const argsArr = [...args], itemId = argsArr[0].toString(), brand = argsArr[1]
      this.props.updateBrand(itemId, brand)
      this.setState({ editable: false, newBrandName: brand })
    }
  }

  handleDelete(event) {
    event.preventDefault()
    event.target.id && this.props.deleteProduct(event.target.id)
  }

  render() {
    const product = this.props.product
    const categories = product.categoryPath.split('/')

    return (
      <tr key={this.state.key}>
        <td className="thumbnail-image-width"><img src={product && product.thumbnailImage} className="img-responsive center-block img-rounded img-resize" alt={product.name} /></td>
        <td><div className="center-rows">{product.name}<a href={product.productUrl} target="_blank" className="button-margin-left">
          <span
            className="glyphicon glyphicon-new-window"
            aria-hidden="true"
            aria-label="Open product in a new window"></span></a></div></td>
        {
          this.state.editable
            ? <BrandInput product={product} handleClick={this.handleClick} />
            : <BrandToggle product={product} newBrand={this.state.newBrandName ? this.state.newBrandName : product.newBrandName} handleClick={this.handleClick} />
        }
        <td>
          <div className="center-rows">
            <ol className="breadcrumb">
              {
                categories && categories.map((category, i) =>
                  <li key={i}>{category}</li>
                )
              }</ol></div></td>
        <td><div className="center-rows">{`$${product.salePrice}`}</div></td>
        <td><div className="center-rows">{product.msrp ? `$${product.msrp}` : <em>{`(none)`}</em>}</div></td>
        <td><div className="center-rows"><img src={product.customerRatingImage}></img>{product.numReviews ? `(${product.numReviews})` : null}</div></td>
        <td>
          <div className="center-rows">
            <span type="submit" className="btn btn-default glyphicon glyphicon-remove button-no-border" onClick={this.handleDelete} aria-hidden="true" aria-label="Left Align" id={product.itemId}></span></div></td>
      </tr>
    )
  }
}

const mstp = () => ({})
const mdtp = (dispatch) => ({ deleteProduct, updateBrand })

export default connect(mstp, mdtp)(TableRow)
