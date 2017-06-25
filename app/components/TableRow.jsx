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
    this.setState({product: this.props.product})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  handleClick(event, ...args) {
    event.preventDefault()
    console.log('event.target', event.target)
    const name = event.target.id.slice(0, 5)
    if (name === 'toggl') this.setState({ editable: true })
    else if (name === 'input') {
      const argsArr = [...args],
        itemId = argsArr[0].toString(),
        brand = argsArr[1]

      console.log('value', argsArr)
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

    return (
      <tr>
        <td><img src={product && product.thumbnailImage} className="img-responsive center-block img-rounded" /></td>
        <td>{product.name}<a href={product.productUrl} target="_blank" className="button-margin-left">
          <span
            className="glyphicon glyphicon-new-window"
            aria-hidden="true"
            aria-label="Open product in a new window"></span></a></td>
        {
          this.state.editable
            ? <BrandInput product={product} handleClick={this.handleClick} />
            : <BrandToggle product={product} newBrand={this.state.newBrandName ? this.state.newBrandName : product.newBrandName} handleClick={this.handleClick} />
        }
        <td>{product.categoryPath}</td>
        <td>{`$${product.salePrice}`}</td>
        <td>{product.msrp ? `$${product.msrp}` : <em>{`(none)`}</em>}</td>
        <td><img src={product.customerRatingImage}></img>{product.numReviews ? `(${product.numReviews})` : null}</td>
        <td>
          <span type="submit" className="btn btn-default glyphicon glyphicon-remove" onClick={this.handleDelete} aria-hidden="true" aria-label="Left Align" id={product.itemId}></span></td>
      </tr>
    )
  }
}

// const mstp = (state, ownProps) => ({ product: ownProps.product })
const mstp = () => ({})
const mdtp = (dispatch) => ({ deleteProduct, updateBrand })

export default connect(mstp, mdtp)(TableRow)

/*
<td>
  <span type="submit" className="btn btn-default glyphicon glyphicon-remove" onClick={this.handleDelete} aria-hidden="true" aria-label="Left Align" id={product.itemId}></span></td>

< td > <span
  className="glyphicon glyphicon-remove"
  onClick={this.handleDelete}
  aria-hidden="true"
  id={product.itemId}></span> < /td>
*/
