import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useRef, useState } from "react";
import { useSwiper } from 'swiper/react';
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import Main from "../main/main";
import About from "../about/about";
import Agenda from "../agenda/agenda";
import Registration from "../registration/registration";
import RulesFaq from "../rules/rules";
import Contacts from "../contacts/contacts";
import Navigation from "../navigation/navigation";
import Overlay from "../overlay/overlay";
import { OverlayContext } from "../../context";


const SwiperPages = () =>{
    const swiperRef = useRef();
    const swiper = useSwiper();
    const [sliderIndex, setSliderIndex] = useState()
    const [IsFlipped, setFlipCard] = useState(false)
    const handleFlipCard = () =>{
        setFlipCard(prevState => !prevState);
    }
    const [imgIndex, setImgIndex] = useState();
    const [show, setShow] = useState(false);
    const handleShowText = (index) =>{
        setShow(prevState => !prevState)
        setImgIndex(index);
        setSliderIndex(swiperRef.current.realIndex);
        if(show){
            swiperRef.current.enable()
        }else{
            swiperRef.current.disable(); 
        }
    }
    
   
    const toSlide = (index) =>{
        swiperRef.current.slideTo(index)
    }
    return(
        <OverlayContext.Provider value={{ handleShowText, show}}>
            <Navigation swiperRef={swiperRef}/>
            <Overlay 
                imgIndex={imgIndex} 
                IsFlipped={IsFlipped}
                sliderIndex={sliderIndex}
            />
            <Swiper
                onSwiper={(swiper) =>{
                    swiperRef.current = swiper;
                }}
                direction={"vertical"}
                speed = {800}
                slidesPerView={"auto"}
                loop = {true}
                loopedSlides = {1}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="swiper-pages"
            >
                <SwiperSlide>
                    <Main toSlide={toSlide}/>
                </SwiperSlide>
                <SwiperSlide>
                    <About />
                </SwiperSlide>
                <SwiperSlide>
                    <Agenda imgIndex={imgIndex}/>
                </SwiperSlide>
                <SwiperSlide>
                    <RulesFaq 
                        IsFlipped = {IsFlipped} 
                        handleFlipCard = {handleFlipCard}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Registration/>
                </SwiperSlide>
                <SwiperSlide>
                    <Contacts/>
                </SwiperSlide>
            </Swiper>
        </OverlayContext.Provider>
    )
}

export default SwiperPages