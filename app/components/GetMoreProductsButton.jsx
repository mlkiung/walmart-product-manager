import React from 'react'

const GetMoreProductsButton = (props) => (
  <div className="panel-adjust">
    <button className="pull-right fetch-products-button" type="submit" onClick={props.handleClick} name="get-more-products">Fetch more products</button>
  </div>
)

export default GetMoreProductsButton
