import React, { useState, useRef, useContext } from "react";
import { OverlayContext } from '../../context';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./rules-styles/rules.css"
import Overlay from "../overlay/overlay";
import { Container } from "react-bootstrap";
import loki from "../../images/norse/loki.png";
import thor from "../../images/norse/thor.png";
import RulesText from "./rulesText";

const Rules = () =>{
    const {handleShowText} = useContext(OverlayContext)
    const [IsFlipped, setFlipCard] = useState(false)
    const lokiRef = useRef(null);
    const thorRef = useRef(null);
    const nodeRef = IsFlipped ? thorRef : lokiRef;
    const handleFlipCard = () =>{
        setFlipCard(prevState => !prevState);
    }

    return(
        <section 
            className="rule page" 
            style={{backgroundColor: IsFlipped? "#9f9634":"#3D6C41"}}>
            <Container className="wrapper">
                <div className="rule-content">
                    <div className="general-text rule-text">
                        <h2 className="general-title">Правила & FAQ</h2>
                        <p className="general-subtitle">Правила и FAQ GameJam 2022</p>
                    </div>
                    <div className="card-rule">
                        <div className="card-rule-wrapper" style={{ transform: IsFlipped? `rotateY(${180}deg)`:`rotateY(${0}deg)`}}>
                            <div className="card card-rule-front">
                                <button className="flip-btn" onClick={handleFlipCard}>Показать FAQ</button>
                                <h3 className="card-title card-title-rule">
                                    Перед регистрацией ознакомьтесь с правилами участия 
                                </h3>
                                <button className={"general-btns card-rule-btn-front"} onClick={handleShowText}>Читать</button>
                            </div>
                            <div className="card card-rule-back">
                                <button className="flip-btn" onClick={handleFlipCard}>Показать Правила</button>
                                <h3 className="card-title card-title-rule">
                                    Перед регистрацией советуем таже ознакомиться с FAQ
                                </h3>
                                <button 
                                    className={"general-btns card-rule-btn-back" }
                                    onClick={handleShowText}>
                                        Читать
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>
            </Container>
            <Overlay 
                content={<RulesText IsFlipped={IsFlipped}/>}
            />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={IsFlipped}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="fade"
                >
                    <img src={IsFlipped? thor:loki} ref={nodeRef} className={`gif-img loki-thor`} alt={IsFlipped? "thor":"loki"}/>
                </CSSTransition>
            </SwitchTransition> 
        </section>
    )
}
export default Rules;