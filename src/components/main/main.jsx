import "./main-styles/main.css";
import "./main-styles/main-responsive.css";
import { useContext } from "react";
import { LanguageOption } from "../../context";
import { Container } from "react-bootstrap";
import venus from "../../images/greek/venus1.gif";
import angel1 from "../../images/greek/angel1.png";
import angel2 from "../../images/greek/angel2.png";
import angel3 from "../../images/greek/angel3.png";


const angels = [
    {
        src: angel1,
        class: "angel",
        alt: "angel1"
    },
    {
        src: angel2,
        class: "angel",
        alt: "angel2"
    },
    {
        src: angel3,
        class: "angel",
        alt: "angel3"
    },
]
const Main = ({swiperRef}) =>{
    const toSlide = () =>{
        swiperRef.current.slideTo(5)
    }
    const {chosenLang} = useContext(LanguageOption)
    return(
        <section className="main page">
            <Container className="wrapper main-wrapper">
                <div className="main_content">
                    <p className="main_subtitle">{
                        chosenLang['main'].mainDate
                    }</p>
                    <h1 className="main_title">GameJam <br/> 2022</h1>
                    <button 
                        className="main_reg-btn general-btns" 
                        onClick={toSlide}>{
                        chosenLang['main'].regBtn
                    }</button>
                </div>
            </Container>
            <img src={venus} className="venus gif-img" alt="venus"/>
            <div className="angels">
                {angels.map((angel, index)=>
                    <img src={angel.src} className={angel.class} key={index} alt={angel.alt}/>    
                )}
            </div>
        </section>
        
    )
}
export default Main;