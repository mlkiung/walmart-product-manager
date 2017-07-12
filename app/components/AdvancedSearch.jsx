import React, { Component } from 'react'
import { connect } from 'react-redux'

import { receiveProducts } from '../redux/search'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.handleChange(event)
  }

  render() {
    const advancedSearchOptions = [
      { placeholder: 'Brand Name', name: 'brandName', value: this.props.search.brandName },
      { placeholder: 'Results', name: 'results', value: this.props.search.results },
      { placeholder: 'Start at', name: 'startAt', value: this.props.search.startAt }
    ]
    const sortOptions = [
      { value: 'relevance', viewValue: 'Relevance' },
      { value: 'price', viewValue: 'Price' },
      { value: 'title', viewValue: 'Title' },
      { value: 'bestseller', viewValue: 'Bestseller' },
      { value: 'customer-rating', viewValue: 'Customer Rating' },
      { value: 'new', viewValue: 'New' }
    ]

    return (
      <div className="col-sm-12" id="advanced-search-container">
        {
          // making the input boxes for brandName, results, and startAt
          advancedSearchOptions.map((advancedSearchOption, i) => (
            <div className="input-group col-sm-2" key={i}>
              <input
                type="text"
                className="form-control center-rows-half"
                placeholder={advancedSearchOption.placeholder}
                aria-describedby="basic-addon1"
                name={advancedSearchOption.name}
                onChange={this.handleChange}
                value={advancedSearchOption.value} />
            </div>
          ))
        }
        <div className="col-sm-12">
          <div className="col-sm-2 center-rows-half">{'Sorted by'}</div>
          <div className="col-sm-10 center-rows-half">
            <select value={this.props.sortOption} name="sortOption" onChange={this.handleChange}>
              {
              // populating the "sort by" dropdown
                sortOptions.map((sortOption, i) => (
                  <option key={i}>{sortOption.viewValue}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default AdvancedSearch
