import React from 'react'

const TableHead = (props) => (
  <thead>
    <tr className="active">
      <th scope="col"></th>
      <th scope="col">Product<button className="btn btn-default" id="sort-products-name" onClick={props.handleClick}><span className="caret"></span></button></th>
      <th scope="col">Brand Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">MSRP</th>
      <th scope="col">Reviews</th>
      <th scope="col"></th>
    </tr>
  </thead>
)

export default TableHead


/*
< button id = "sort-products-name" onClick = {
  props.handleClick
} > </button>
*/
