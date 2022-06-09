import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Categories from '../Categoriesbar/Categories'
import Video from '../video/Video'

const HomeScreen = () => {
  return (
    <Container>
        <Categories/>
         <Row>
             {
                 [... new Array(20)].map(()=>(
                     <Col lg={3} md={4}>
                     <Video/>
                     </Col>
                 ))
             }
         </Row>
    </Container>
  )
}

export default HomeScreen