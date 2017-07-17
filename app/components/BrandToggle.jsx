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
        <button
          className="btn btn-default button-no-border glyphicon glyphicon-pencil"
          data-toggle="tooltip"
          data-placement="left"
          title="Tooltip on left"
          onClick={this.handleClick}
          id={`toggle-brand-${product.itemId}`}></button>
        {newBrand !== '' ? newBrand : product.newBrandName ? product.newBrandName : null}
      </td>
    )
  }
}

export default BrandToggle
