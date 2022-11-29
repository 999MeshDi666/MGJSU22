import { Swiper, SwiperSlide } from "swiper/react";
import {useContext} from "react";
import { LanguageOption } from '../../context';
import { Container } from "react-bootstrap";
import { EffectCards } from "swiper";
import "./slider.css"
import "swiper/css/effect-cards";


import pic2 from "../../images/slider/pic2.jpg";
import pic3 from "../../images/slider/pic3.jpg";
import pic6 from "../../images/slider/pic6.jpg";
import pic8 from "../../images/slider/pic8.jpg";
import pic9 from "../../images/slider/pic9.jpg";
import pic11 from "../../images/slider/pic11.jpg";
import pic12 from "../../images/slider/pic12.jpg";
import pic13 from "../../images/slider/pic13.jpg";
import pic14 from "../../images/slider/pic14.jpg";
import pic15 from "../../images/slider/pic15.jpg";

const pics = [pic2,pic3,pic6,pic8,pic9,pic11,pic12,pic13,pic14,pic15]
const Slider = () =>{

    const {chosenLang} = useContext(LanguageOption)
    return(
       <section className="slider page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text reg-text">
                        <h2 className="general-title">{chosenLang['slider'].title}</h2>
                        <p className="general-subtitle">{chosenLang['slider'].subtitle}</p>
                    </div>
                </div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    allowTouchMove={true}
                    loop = {true}
                    loopedSlides = {1}
                    modules={[EffectCards]}
                    className="slider-imgs"
                >
                    {pics.map((pic, index)=>
                        <SwiperSlide key={index}>
                            <img src={pic} alt="slide pics" className="slide-img"/>
                        </SwiperSlide>
                    )}
                    
                </Swiper>

            </Container>
           
       </section>
    )
}
export default Slider