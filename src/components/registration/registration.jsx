import {useContext} from "react";
import { OverlayContext, LanguageOption } from '../../context';

import { Container } from "react-bootstrap";
import "./registration-styles/registration.css";
import "./registration-styles/reg-responsive.css";
import kempir from "../../images/turkic/kempir.gif";

const Registration = () =>{
    const {handleShowOverlay} = useContext(OverlayContext)
    const {chosenLang} = useContext(LanguageOption)
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text reg-text">
                        <h2 className="general-title">{chosenLang['reg'].title}</h2>
                        <p className="general-subtitle">{chosenLang['reg'].subtitle}</p>
                    </div>
                    
                    <div className="card card-reg">
                        <h3 className="card-title">
                            {chosenLang['reg'].registration}
                        </h3>
                        <button className="general-btns card-reg-btn" onClick={handleShowOverlay}>{chosenLang['reg'].start}</button>
                    </div>
                   
                </div>
            </Container>
            <img src={kempir} className="kempir gif-img" alt="kempir"/>
        </section>
    )
}
export default Registration;