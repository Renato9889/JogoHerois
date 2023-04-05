import {React, useState} from 'react'
import '../../pages/style.css';
import '../Game/GameStyle.css';
import { Container, Row, Col, Button} from 'react-bootstrap';
import data from './data';
import versus from "../../Assets/versus.png";

function Gamepage(){

    const [botao, setBotao] = useState('');
    const [botao2, setBotao2] = useState('');
    const [carta, setCarta] = useState({});
    const [carta2, setCarta2] = useState({});

    function getCarta(){
        var cartanova = data.cartas.map(function(item){
            return item;
        });
      
        var numeroCartaJogador = parseInt(Math.random() * 11);
    
        setCarta(cartanova[numeroCartaJogador]);
        setBotao('');
        setCarta2({})
    }
    function getCarta2(id){
        var cartanova2 = data.cartas.map(function(item){
            return item;
        });

        var numeroCartaMaquina = parseInt(Math.random() * 11);

        while (id == numeroCartaMaquina) {
            numeroCartaMaquina = parseInt(Math.random() * 11);
        }

        setCarta2(cartanova2[numeroCartaMaquina]);
        setBotao2("");
    }
    return(
        <div className='homepagebackground' >
            <img className='vsimg' src={versus}/>
            <Container>
                <Col md={0}>
                    <Row>
                        <Button className='btnSortear' value={botao} onChange={(e)=>setBotao(e.target.value)} onClick={()=>getCarta()}>Sortear Carta</Button>
                        {Object.keys(carta).length > 0 && (
                            <div >
                                <a>
                                    <img className='cartaJogador' src={carta.imgSrc}></img>  
                                </a>
                                <a>
                                <Button className='btnPlay'  value={botao2} onChange={(e)=>setBotao2(e.target.value)} onClick={()=>getCarta2(carta.id)}>Play</Button>
                                {Object.keys(carta2).length > 0 &&(
                                    <a >
                                        <img className='cartaMaquina' src={carta2.imgSrc}></img>
                                    </a>
                                )}
                                </a>
                                
                            </div>
                        )}
                    </Row>
                </Col>

            </Container>
        </div>
    );
};
export default Gamepage