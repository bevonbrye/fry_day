import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import SearchResult from '../components/SearchResults/SearchResult'



export default function Results() {
    return (
        <div>
     <Container>
            <Row>
                <Col><SearchResult/></Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
    </Container>
        </div>
    )
}
