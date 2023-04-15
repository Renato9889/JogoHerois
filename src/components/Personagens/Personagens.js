import React from 'react'
import '../../pages/style.css';
import Carousel from "./Carousel";
import { Container, Row, Col} from 'react-bootstrap'

function Personagens(){
    return(
        <div className='homepagebackground'>
            <Container>
                <Row>
                    <Col>
                        <Carousel/>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
export default Personagens