import React from 'react'

import Table from './Table'
import TableControlPanel from './TableControlPanel'

const ProductsList = () => (
  <div id="products-container">
    <TableControlPanel />
    <Table />
  </div>
)

export default ProductsList
