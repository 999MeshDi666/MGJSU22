import "./overlay.css";
import {useContext} from "react";
import { OverlayContext } from '../../context';
const Overlay = ({content}) =>{
    const {handleShowText, show} = useContext(OverlayContext)
    return(
        <div className="overlay" style={{ display: show? "block" : "none"  }}>
            <div className="close-btn" onClick={handleShowText}>
            </div>
            <div className="overlay-content">
                {content}
                
            </div>

    </div>
    )
}
export default Overlay