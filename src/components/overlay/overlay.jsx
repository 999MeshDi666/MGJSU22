import "./overlay.css";
import {useContext} from "react";
import { OverlayContext } from '../../context';
import AboutText from "../about/aboutText";
import AgendaText from "../agenda/agendaText";
import Form from "../registration/form";
import RulesFaqText from "../rules/rulesText";

const Overlay = ({IsFlipped}) =>{
    
    const { handleShowOverlay,
            sliderIndex,
            imgIndex,
            show } = useContext(OverlayContext)
    const content = [
        <AboutText/>, 
        <AgendaText imgIndex={imgIndex}/>,
        <RulesFaqText IsFlipped={IsFlipped}/>,
        <Form handleShowText={handleShowOverlay}/>,
    ]
    return(
        <div className="overlay" style={{ display: show? "block" : "none"  }}>
            <div className="close-btn" onClick={handleShowOverlay}>
            </div>
            <div className="overlay-content">
                {content[sliderIndex-1]}
                
            </div>

    </div>
    )
}
export default Overlay