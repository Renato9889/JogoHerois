import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col, Button } from 'react-bootstrap'

function Homepage(){
    return(
        <div className='homepagebackground'>
            <Container>
                <Row>
                    <Col md={0}>
                        <div className='imagegame'>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={0}>
                        <Button className="playgame">PLAY</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Homepage