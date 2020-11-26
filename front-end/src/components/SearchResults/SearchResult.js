import React from 'react'
import { Container, Image, Col, Row } from 'react-bootstrap'

function SearchResult() {
    return (
        <div>
    <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/150" rounded />
            </Col>
        </Row>
        
    </Container>
        </div>
    )
}

export default SearchResult
