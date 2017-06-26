import React from 'react'

const TableHead = (props) => (
  <thead>
    <tr className="active">
      <th scope="col"></th>
      <th scope="col">Product
        <button
          className="btn btn-default button-margin-left button-no-border button-background-color"
          name="sort-products-name"
          onClick={props.handleClick}>
          <span className="caret"></span></button></th>
      <th scope="col">Brand Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price
        <button
          className="btn btn-default button-margin-left button-no-border button-background-color"
          id="sort-products-salePrice"
          onClick={props.handleClick}>
          <span className="caret"></span></button></th>
      <th scope="col">MSRP
        <button
          className="btn btn-default button-margin-left button-no-border button-background-color"
          id="sort-products-msrp"
          onClick={props.handleClick}>
          <span className="caret"></span></button></th>
      <th scope="col">Reviews
        <button
          className="btn btn-default button-margin-left button-no-border button-background-color"
          id="sort-products-customerRating"
          onClick={props.handleClick}>
          <span className="caret"></span></button></th>
      <th scope="col"></th>
    </tr>
  </thead>
)

export default TableHead
