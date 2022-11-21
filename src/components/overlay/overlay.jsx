import "./overlay.css";

const Overlay = ({handleShowText, show, content}) =>{
    return(
        <div className="overlay" style={{ display: show? "block" : "none"  }}>
            <div className="close-btn" onClick={handleShowText}>
                <span className="btn-el close-btn-el"></span>
                <span className="btn-el close-btn-el"></span>
            </div>
            <div className="overlay-content">
                {content}
                
            </div>

    </div>
    )
}
export default Overlay