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

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({products: this.props.products})
  }

  handleClick(event) {
    event.preventDefault()
    const name = event.target.name
    console.log('TARGET: ', name)
    if (name.indexOf('toggle-brand')) this.setState({ editable: true })
    else if (name.indexOf('input-brand')) this.setState({ editable: false })
    else if (name.indexOf('table-row')) this.props.deleteProduct(name)
    else console.log('None of the target names matched the event target name!')
  }

  render() {
    const products = _.values(this.state.products)
    return (
      <div>
        <table className="table-condensed">
          <TableControlPanel />
          <TableHead />
          <tbody>
            {products && products.map((product, i) => (
              <TableRow
                product={product}
                key={i}
                handleClick={this.handleClick} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mstp = (state) => ({ products: state.products })
const mdtp = (dispatch) => ({ deleteProduct })

export default connect(mstp, mdtp)(Table)

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
