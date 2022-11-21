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
import Rules from "../rules/rules";
import Navigation from "../navigation/navigation";
import { OverlayContext } from "../../context";


const SwiperPages = () =>{
    const swiperRef = useRef();
    const swiper = useSwiper();

    const [imgIndex, setImgIndex] = useState();
    const [show, setShow] = useState(false);
    const handleShowText = (index) =>{
        setShow(prevState => !prevState)
        setImgIndex(index);
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
            {/* <Navigation/> */}
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
                    <Rules/>
                </SwiperSlide>
                <SwiperSlide>
                    <Registration/>
                </SwiperSlide>
   
            </Swiper>
        </OverlayContext.Provider>
    )
}

export default SwiperPages