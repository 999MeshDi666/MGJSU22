import React, { useRef, useContext } from "react";
import { OverlayContext } from '../../context';
import { LanguageOption } from "../../context";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./rules-styles/rules.css"
import { Container } from "react-bootstrap";
import loki from "../../images/norse/loki.png";
import thor from "../../images/norse/thor.png";
import doc from "../../docs/polojenieGJ.pdf";
const RulesFaq = ({handleFlipCard, IsFlipped}) =>{
    const {handleShowOverlay} = useContext(OverlayContext)
    const {chosenLang} = useContext(LanguageOption)
    const lokiRef = useRef(null);
    const thorRef = useRef(null);
    const nodeRef = IsFlipped ? thorRef : lokiRef;
  
    return(
        <section 
            className="rule page" 
            style={{backgroundColor: IsFlipped? "#9f9634":"#3D6C41"}}>
            <Container className="wrapper">
                <div className="rule-content">
                    <div className="general-text rule-text">
                        <h2 className="general-title">{chosenLang['rulesFaq'].title}</h2>
                        <p className="general-subtitle">{chosenLang['rulesFaq'].subtitle}</p>
                        <a href={doc} 
                           download="polojenieGJ" 
                           className="rule-download-btn">
                            {chosenLang['rulesFaq'].doc}
                        </a>
                    </div>
                    <div className="card-rule">
                        <div className="card-rule-wrapper" 
                             style={{ 
                                    transform: IsFlipped? `rotateY(${180}deg)`
                                    :`rotateY(${0}deg)`
                                }}>
                            <div className="card card-rule-front">
                                <button 
                                    className="flip-btn" 
                                    onClick={handleFlipCard}>
                                    {chosenLang['rulesFaq'].showFaq}
                                </button>
                                <h3 className="card-title card-title-rule">
                                    {chosenLang['rulesFaq'].rules}
                                </h3>
                                <button 
                                    className="general-btns card-rule-btn-front" 
                                    onClick={handleShowOverlay}>
                                    {chosenLang['rulesFaq'].read}
                                </button>
                            </div>
                            <div className="card card-rule-back">
                                <button 
                                    className="flip-btn" 
                                    onClick={handleFlipCard}>
                                    {chosenLang['rulesFaq'].showRules}
                                </button>
                                <h3 className="card-title card-title-rule">
                                    {chosenLang['rulesFaq'].faq}
                                </h3>
                                <button 
                                    className={"general-btns card-rule-btn-back" }
                                    onClick={handleShowOverlay}>
                                        {chosenLang['rulesFaq'].read}
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>
            </Container>
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
export default RulesFaq;