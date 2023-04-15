import {React, useState} from 'react'
import '../../pages/style.css';
import '../Game/GameStyle.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import data from './data';


function Gamepage(){

    const [botao, setBotao] = useState('');
    const [botao2, setBotao2] = useState('');
    const [carta, setCarta] = useState({});
    const [carta2, setCarta2] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    function getCarta(){
        var cartanova = data.cartas.map(function(item){
            return item;
        });
      
        var numeroCartaJogador = parseInt(Math.random() * 11);
    
        setCarta(cartanova[numeroCartaJogador]);
        setBotao('');
        setIsDisabled(false);
        setCarta2({})
    }
    function getCarta2(){
        var cartanova2 = data.cartas.map(function(item){
            return item;
        });

        var numeroCartaMaquina = parseInt(Math.random() * 11);

        while( parseInt(numeroCartaMaquina) ===  parseInt(carta.id - 1)){
            numeroCartaMaquina = parseInt(Math.random() * 11);
        }

        setCarta2(cartanova2[numeroCartaMaquina]);
        
        handleShow();
        setIsDisabled(true);
        setBotao2("");
    }

    const atributos = ['Escolha um atributo:','poder','defesa','ataque'];

    const [atributo, setAtributo] = useState(atributos[0]);

    function play(){
        if( atributo === 'poder'){
            if(carta.poder > carta2.poder){
                return "Você venceu";
                
            }else{
                if(carta.poder < carta2.poder){
                    return "Você perdeu";
                }else{
                    return "EMPATOU";
                }
            }
        }else{
            if(atributo === 'ataque'){
                if(carta.ataque > carta2.ataque){
                    return "Você venceu";
                }else{
                    if(carta.ataque < carta2.ataque){
                        return "Você perdeu";
                    }else{
                        return "EMPATOU";
                    }
                }
            }else{
                if(atributo === 'defesa'){
                    if(carta.defesa > carta2.defesa){
                        return "Você venceu";
                    }else{
                        if(carta.defesa < carta2.defesa){
                            return "Você perdeu";
                        }else{
                            return "EMPATOU";
                        }
                    }
                }else{
                    return "Você não escolheu nehum atributo, sorteie outra carta e selecione o atibuto!!!";
                }
            }
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div className='homepagebackground' >
            <Container>
                <Row>
                    <Col >
                        <Button className='btnSortear' value={botao} onChange={(e)=>setBotao(e.target.value)} onClick={()=>getCarta()}>Sortear Carta</Button>
                        {Object.keys(carta).length > 0 && (
                            <div >
                                <Col>
                                    <img className='cartaJogador' src={carta.imgSrc} alt={carta.nome} />
                                </Col>
                                <Col>
                                <select className='meuSelect' value={atributo} onChange={(e)=> setAtributo(e.target.value)}>
                                        {atributos.map((value)=> (
                                            <option value={value} key={value}>
                                                {value}
                                            </option>
                                        ))}
                                </select>
                                </Col>
                                <Col>
                                    <Button className='btnPlay' disabled={isDisabled} value={botao2} onChange={(e)=>setBotao2(e.target.value)} onClick={()=>getCarta2()}>Play</Button>
                                </Col>
                                    {Object.keys(carta2).length > 0 &&(
                                            <Col>
                                            <img className='cartaMaquina' src={carta2.imgSrc} alt={carta2.nome}/>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>{play()}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            </Col>    
                                    )}  
                            </div>
                        )}
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Gamepage