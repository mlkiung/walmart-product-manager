import React, { Component } from 'react'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brandName: '',
      results: '',
      startAt: '',
      sortOption: 'relevance',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      const brandName = nextProps.search.brandName
      const results = nextProps.search.results
      const startAt = nextProps.search.startAt
      const sortOption = nextProps.search.sortOption
      this.setState({brandName, results, startAt, sortOption})
    }
  }

  render() {
    const advancedSearchOptions = [
      { placeholder: 'Brand Name', name: 'brandName', value: this.state.brandName },
      { placeholder: 'Results', name: 'results', value: this.state.results },
      { placeholder: 'Start at', name: 'startAt', value: this.state.startAt }
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
      <div id="advanced-search-container">
        {
          // making the input boxes for brandName, results, and startAt
          advancedSearchOptions.map((advancedSearchOption, i) => (
            <li role="presentation" key={i}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={advancedSearchOption.placeholder}
                  aria-describedby="basic-addon1"
                  name={advancedSearchOption.name}
                  onChange={this.props.handleChange}
                  value={advancedSearchOption.value} />
              </div>
            </li>
          ))
        }
        <li role="presentation">{'Sorted by'}</li>
        <li role="presentation">
          <select value={this.state.sortOption} name="sortOption" onChange={this.props.handleChange}>
            {
              // making the different options for sorting results in dropdown
              sortOptions.map((sortOption, i) => (
                <option key={i}>{sortOption.viewValue}</option>
              ))
            }
          </select>
        </li>
      </div>
    )
  }
}

export default AdvancedSearch
