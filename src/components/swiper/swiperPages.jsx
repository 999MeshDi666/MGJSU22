import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useRef, useState } from "react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import Main from "../main/main";
import About from "../about/about";
import Agenda from "../agenda/agenda";
import Registration from "../registration/registration";
import Rules from "../rules/rules";
import { useSwiper } from 'swiper/react';


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
        <>
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
                    <About 
                        handleShowText={handleShowText} 
                        show={show}/>
                    </SwiperSlide>
                <SwiperSlide>
                    <Agenda 
                        handleShowText={handleShowText} 
                        show={show}
                        imgIndex={imgIndex}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Rules 
                        handleShowText={handleShowText} 
                        show={show}
                    />
                </SwiperSlide>
             
                <SwiperSlide>
                    <Registration
                        handleShowText={handleShowText} 
                        show={show}
                    />
                </SwiperSlide>
   
            </Swiper>
        </>
    )
}

export default SwiperPages