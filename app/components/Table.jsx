import React, { Component } from 'react'

const Table = (props) => (
  <table className="table-condensed">
    <thead>
      <tr className="active">
        <th scope="col">Product</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Brand Name</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope="col">MSRP</th>
        <th scope="col">Reviews</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {
        props.products && props.products.map((product, i) => (
          <tr key={i}>
            <td><img src={product.thumbnailImage} /></td>
            <td>{product.name}</td>
            <td><a href={product.productUrl} target="_blank"><span className="glyphicon glyphicon-new-window" aria-hidden="true" aria-label="Open product in a new window"></span></a></td>
            <td>{product.brandName}</td>
            <td>{product.categoryPath}</td>
            <td>{`$${product.salePrice}`}</td>
            <td>{`${product.msrp ? `$${product.msrp}` : '(none)'}`}</td>
            <td>{product.customerRating}</td>
            <td>{`(${product.numReviews})`}</td>
            <td><button type="submit" className="btn btn-default" aria-label="Left Align" onClick={handleClick} name={item.itemId}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default Table
