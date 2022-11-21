import {SwiperSlide } from "swiper/react";
import Main from "../main/main";
import About from "../about/about";
import Agenda from "../agenda/agenda";
import Registration from "../registration/registration";
import Rules from "../rules/rules";

const SlidePages = ({toSlide, imgIndex}) =>{
    return(
        <>
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
        </>
    )
}
export default SlidePages