import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { deleteProduct, updateBrand } from '../redux/search'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableControlPanel from './TableControlPanel'

class Table extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }
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

  render() {
    const products = _.values(this.state.products)
    return (
      <div>
        <TableControlPanel />
        <table className="table-condensed">
          <TableHead />
          <tbody>
            {products && products.map((product, i) => (
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

const mstp = (state) => ({ products: state.products })

export default connect(mstp)(Table)

// componentDidMount() {
//   this.setState({products: this.props.products})
// }

// componentWillReceiveProps(nextProps) {
//   console.log('nextProps in ProductsList.jsx', nextProps)
//   if (nextProps.products !== this.props.products) {
//     this.setState({ products: nextProps.products })
//   }
// }

// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps !== this.props || nextState !== this.state
// }

//

// handleSubmit(event) {
//   event.preventDefault()
//   const brandName = this.state.updatedBrandName
//   const itemId = this.state.itemId
//   this.setState({ editable: false })
//   this.props.updateBrand(itemId, brandName)
// }

// handleChange(event) {
//   this.setState({
//     updatedBrandName: event.target.value,
//     itemId: event.target.name,
//   })
// }
