import React, { Component } from 'react'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: undefined,
    }
  }

  render() {
    const agendas = [
      'Brand Name',
      'Results',
      'Start at',
    ]

    return (
      <div id="advanced-search-container">
        {
          agendas.map((agenda, i) => (
            <li role="presentation" key={i}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder={agenda} aria-describedby="basic-addon1" onChange={this.props.handleChange} />
              </div>
            </li>
          ))
        }
        <li role="presentation">{'Sorted by'}</li>
        <li role="presentation">
          <select value={this.state.value} onChange={this.props.handleChange}>
            <option value="relevance">Relevance</option>
            <option value="product-name">Product Name</option>
            <option value="price">Price</option>
            <option value="avg-cust-review">Average Customer Review</option>
            <option value="msrp">MSRP</option>
          </select>
        </li>
      </div>
    )
  }
}

export default AdvancedSearch
