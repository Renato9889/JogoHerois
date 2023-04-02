import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function Sobre(){
    return(
        <div className='homepagebackground'>
            <Container>
                <Row>
                    <Col md={0}>
                    <h2 className='sobrehead'>Sobre</h2>
                    <p className='sobrepara'> 
                    ESSE SITE É UM PROJETO PESSOAL FEITO APENAS PARA FINS DE DEMOSTRAÇÃO.<br/> NELE APLICO MEUS CONHECIMENTOS DE REACT, UX, WEB DISGNER,<br/> HTML, CSS, BOOTSTRAP E JAVASCRIPT.
                    </p>
                    <p className="sobrepara">
                    QUALQUER DÚVIDA, SUGESTÃO, RECRAMAÇÃO OU INTERESSE,<br/> SÓ MANDAR NO MEU EMAIL:
                    </p>
                    <button
                        className='sobrebtn'
                        onClick={() => {
                            window.open('mailto:renatoluiz3498@gmail.com?subject=Via Torneio de Heróis');
                        }}
                        >Diga olá</button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Sobre