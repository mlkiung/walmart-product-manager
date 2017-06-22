import React, { Component } from 'react'

class BrandToggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product,
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
      <td>
        {newBrand !== '' ? newBrand : product.brandName}
        <a
          href="#"
          onClick={this.handleClick}>
          <span
            className="caret"
            id={`toggle-brand-${product.itemId}`}></span>
        </a>
      </td>
    )
  }
}

export default BrandToggle
