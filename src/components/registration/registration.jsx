import {useContext} from "react";
import { OverlayContext } from '../../context';
import Overlay from "../overlay/overlay";
import { Container } from "react-bootstrap";
import "./registration-styles/registration.css";
import "./registration-styles/reg-responsive.css";
import kempir from "../../images/turkic/kempir.gif";
import Form from "./form";

const Registration = () =>{
    const {handleShowText} = useContext(OverlayContext)
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text reg-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    
                    <div className="card card-reg">
                        <h3 className="card-title">
                            Начните свой путь в геймдев с нами на GameJam
                        </h3>
                        <button className="general-btns card-reg-btn" onClick={handleShowText}>Начать</button>
                    </div>
                   
                </div>
            </Container>
            <Overlay 
                content={<Form handleShowText={handleShowText}/>} 
            />
            <img src={kempir} className="kempir gif-img" alt="kempir"/>
        </section>
    )
}
export default Registration;