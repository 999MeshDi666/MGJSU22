import LangContext from "../languages/langContext";
import OverlayContexts from "../overlay/overlayContext";
import SwiperPages from "../swiper/swiperPages";
import { useRef } from "react";
const Content = () =>{
    const swiperRef = useRef();
    return(
       <LangContext>
           <OverlayContexts swiperRef={swiperRef}>
                <SwiperPages swiperRef={swiperRef}/>
           </OverlayContexts>
       </LangContext>
        
    )
}
export default Content;