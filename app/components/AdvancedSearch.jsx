import React, { Component } from 'react'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: undefined,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault
    this.setState({ value: event.target.value })
  }

  render() {
    const agendas = [
      'Brand Name',
      'Results',
      'Start at',
    ]

    return (
      <div>
        {
          agendas.map((agenda) => (
            <li role="presentation">
              <div className="input-group">
                <input type="text" className="form-control" placeholder={agenda} aria-describedby="basic-addon1" onChange={this.props.handleChange} />
              </div>
            </li>
          ))
        }
        <li role="presentation">{'Sorted by'}</li>
        <li role="presentation">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{this.state.value}<span className="caret"></span>
            </button>

            

            {/*<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#" onClick={this.handleClick}>Relevance</a></li>
              <li><a href="#" onClick={this.handleClick}>Product Name</a></li>
              <li><a href="#" onClick={this.handleClick}>Price</a></li>
              <li><a href="#" onClick={this.handleClick}>Avg Customer Review</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" onClick={this.handleClick}>MSRP</a></li>
            </ul>*/}
          </div>
        </li>
      </div>
    )
  }
}

export default AdvancedSearch
