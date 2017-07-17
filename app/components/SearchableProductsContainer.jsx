import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'

import { deleteRepository, sortAbc, sort123 } from '../redux/search'
import TableHead from './TableHead'
import TableRow from './TableRow'
import SearchInput from './SearchInput'

class SearchableProductsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      sortAsc: false,
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
    const targetId = event.target.id.slice(0, 14)
    const sortName = event.target.id && event.target.id.slice(14)
    if (event.target.name === 'delete-repository') this.props.deleteRepository()
    if (event.target.name === 'sort-products-name') {
      this.setState({ sortAsc: !this.state.sortAsc })
      this.props.products && this.props.sortAbc(this.state.sortAsc, this.props.products)
    }
    if (targetId && targetId === 'sort-products-') {
      this.setState({ sortAsc: !this.state.sortAsc })
      this.props.products && this.props.sort123(this.state.sortAsc, this.props.products, sortName)
    }
  }

  handleChange(event) {
    const inputValue = event.target.value
    this.setState({ inputValue })
  }

  render() {
    const inputValue = this.state.inputValue
    const products = this.props.products && this.props.products.filter(
      product => {
        return inputValue && inputValue !== ''
          ? product.name.toLowerCase().match(inputValue.toLowerCase())
          : product
      })

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">Local Database</div>
          <div className="panel-body">
            <SearchInput handleChange={this.handleChange} handleClick={this.handleClick} inputValue={this.props.inputValue} />
            <table className="table table-condensed table-bordered table-hover">
              <TableHead handleClick={this.handleClick} />
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
        </div>
      </div>
    )
  }
}

const mstp = (state) => ({ products: state.productsArr })
const mdtp = (dispatch) => ({ deleteRepository, sortAbc, sort123 })

export default connect(mstp, mdtp)(SearchableProductsContainer)

{/* <div class="panel panel-default">
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <p>...</p>
  </div>
  <table class="table">
  </table>
</div> */}
