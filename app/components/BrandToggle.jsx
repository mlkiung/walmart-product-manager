import React, { Component } from 'react'

class BrandToggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product,
      brandName: this.props.product.brandName
    }

    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  render() {
    const product = this.props.product
    const newBrand = this.props.newBrand
    return (
      <td className="brand-width">
        {newBrand !== '' ? newBrand : product.newBrandName ? product.newBrandName : null}
        <span
          type="submit"
          className="btn btn-default button-no-border glyphicon glyphicon-triangle-bottom"
          onClick={this.handleClick}
          id={`toggle-brand-${product.itemId}`}></span>
      </td>
    )
  }
}

export default BrandToggle
