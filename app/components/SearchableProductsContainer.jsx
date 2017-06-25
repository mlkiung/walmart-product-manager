import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import {deleteProduct, updateBrand, deleteRepository, searchProducts} from '../redux/search'
import TableHead from './TableHead'
import TableRow from './TableRow'
import SearchInput from './SearchInput'

class SearchableProductsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    nextProps.productsArr !== this.props.productsArr ? this.render() : null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  handleClick(event) {
    event.preventDefault()
    if (event.target.name === 'delete-repository') this.props.deleteRepository()
  }

  handleChange(event) {
    const inputValue = event.target.value
    console.log(inputValue)
    this.setState({ inputValue })
  }

  render() {
    const inputValue = this.state.inputValue
    const products = this.props.products && this.props.products.filter(
      product => {
        return inputValue && inputValue !== '' ? product.name.toLowerCase().match(inputValue.toLowerCase()) : product
      })

    return (
      <div>
        <SearchInput handleChange={this.handleChange} handleClick={this.handleClick} inputValue={this.props.inputValue} />
        <table className="table-condensed">
          <TableHead />
          <tbody>
            {
              products && products.map((product, i) => (
                <TableRow
                  product={product}
                  key={i} />
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mstp = (state) => ({ products: state.productsArr })
const mdtp = (dispatch) => ({deleteRepository, searchProducts})

export default connect(mstp, mdtp)(SearchableProductsContainer)
