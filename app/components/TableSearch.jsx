import React, { Component } from 'react'

const TableSearch = (props) => (
  <div className="input-group">
    <span className="input-group-addon" id="sizing-addon2">
      <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
    </span>
    <input type="text" className="form-control" placeholder="Search products" aria-describedby="sizing-addon2" />
  </div>
)

export default TableSearch
