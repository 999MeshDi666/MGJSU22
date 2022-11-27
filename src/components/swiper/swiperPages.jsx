import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useState } from "react";
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


const SwiperPages = ({swiperRef}) =>{
   
    const swiper = useSwiper();
  
    const [IsFlipped, setFlipCard] = useState(false)
    const handleFlipCard = () =>{
        setFlipCard(prevState => !prevState);
    }
  
    return(
            <>
                <Navigation swiperRef={swiperRef}/>
                <Overlay 
                    IsFlipped={IsFlipped}
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
                        <Main  swiperRef={swiperRef}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <About />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Agenda />
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
            </>
           
      
        
    )
}

export default SwiperPages