import React, { Component } from 'react'

class BrandToggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUpdateProps(nextProps) {
    nextProps !== this.props
      ? this.setState({ product: nextProps.product })
      : null
  }

  handleClick(event) {
    this.props.handleClick(event)
  }

  render() {
    const product = this.props.product
    return (
      <td>
        {product.brandName}
        <a
          href="#"
          onClick={this.handleClick}
          name={`toggle-brand-${product.itemId}`}>
          <span className="caret"></span>
        </a>
      </td>
    )
  }
}

export default BrandToggle
