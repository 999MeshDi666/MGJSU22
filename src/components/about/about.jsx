import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import { Container } from "react-bootstrap";
import papirus from "../../images/greek/papirus.png";
import {useContext} from "react";
import { OverlayContext } from '../../context';
import { LanguageOption } from "../../context";
const About = () =>{
    const {handleShowOverlay, show} = useContext(OverlayContext)
    const {chosenLang} = useContext(LanguageOption)
    return(
        <section className="about page">
            <Container className="wrapper">
                <div className="about-content">
                    <div className="general-text">
                        <h2 className="general-title">{chosenLang['about'].title}</h2>
                        <p className="general-subtitle">{chosenLang['about'].subtitle}</p>
                    </div>
                    <img src={papirus} 
                         className="papirus" 
                         style={{transform: show? `scale(${1.3})` : null}} 
                         alt="papirus" 
                         onClick={handleShowOverlay}/>
                </div>
            </Container>
        </section>
    )
}

export default About;