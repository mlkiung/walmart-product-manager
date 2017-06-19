import React, { Component } from 'react'

const TableRows = (props) => (
  <tbody>
    {
      props.products && props.products.map((product, i) => (
        <tr key={i}>
          <td>{product.thumbnailImage}</td>
          <td>{product.name}</td>
          <td><a href={product.productUrl} target="_blank"><span className="glyphicon glyphicon-new-window" aria-hidden="true" aria-label="Open product in a new window"></span></a></td>
          <td>{product.brandName}</td>
          <td>{product.categoryPath}</td>
          <td>{`$${product.salePrice}`}</td>
          <td>{`${product.msrp ? `$${product.msrp}` : '(none)'}`}</td>
          <td>{product.customerRating}</td>
          <td>{`(${product.numReviews})`}</td>
          <td></td>
        </tr>
      ))
    }
  </tbody>
)

export default TableRows
