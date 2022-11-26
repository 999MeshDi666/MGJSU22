import React from 'react';
import {useContext} from "react";
import { OverlayContext } from '../../context';
import { LanguageOption } from "../../context";
import "./agenda-styles/agenda.css";
import "./agenda-styles/agenda-responsive.css";
import { Container } from "react-bootstrap";
import scroll1 from "../../images/japan/scroll1.png";
import scroll2 from "../../images/japan/scroll2.png";
import scroll3 from "../../images/japan/scroll3.png";
import benzaiten from "../../images/japan/benzaiten.png";


const scrolls = [
    {
        src: scroll1,
        class: "scroll-img",
        alt: "scroll1"
    },
    {
        src: scroll2,
        class: "scroll-img",
        alt: "scroll2"
    },
    {
        src: scroll3,
        class: "scroll-img",
        alt: "scroll3"
    }
]
const Agenda = () =>{
    const {chosenLang} = useContext(LanguageOption)
    const {handleShowOverlay, imgIndex} = useContext(OverlayContext)
      
    const images = scrolls.map((scroll, index)=>(
                <img src={scroll.src} 
                    className={scroll.class} 
                    alt={scroll.alt} 
                    style={{transform: imgIndex === index? `scale(${1.1})`:  null}} 
                    key={index} 
                    onClick={ ()=> handleShowOverlay(index)}/>
            )) 
    
    return(
        <section className="agenda page">
            <Container className="wrapper">
                <div className="agenda-content">
                    <div className="general-text">
                        <h2 className="general-title">{chosenLang['agenda'].title}</h2>
                        <p className="general-subtitle">{chosenLang['agenda'].subtitle}</p>
                    </div>
                    <div className="scrolls">
                        {images}
                    </div>
                </div>
            </Container>
       
            <img src={benzaiten} className="benzaiten gif-img" alt="benzaiten"/>
            
        </section>
    )
}
export default Agenda