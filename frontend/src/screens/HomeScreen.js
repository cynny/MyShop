import React, { useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Homescreen = () => {

  useEffect(()) => {
    axios.get('/api/products')
  }


  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product) => (

            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
        )
        )}
    </Row>
    </>
  )
}

export default Homescreen