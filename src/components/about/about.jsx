import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import { Container } from "react-bootstrap";
import papirus from "../../images/greek/papirus.png";
import {useContext} from "react";
import { OverlayContext } from '../../context';

const About = () =>{
    const {handleShowText, show} = useContext(OverlayContext)
    return(
        <section className="about page">
            <Container className="wrapper">
                <div className="about-content">
                    <div className="general-text">
                        <h2 className="general-title">О GAMEJAM</h2>
                        <p className="general-subtitle">Кликни на папирус чтобы <br/> получить больше информации</p>
                    </div>
                    <img src={papirus} 
                         className="papirus" 
                         style={{transform: show? `scale(${1.3})` : null}} 
                         alt="papirus" 
                         onClick={handleShowText}/>
                </div>
            </Container>
        </section>
    )
}

export default About;