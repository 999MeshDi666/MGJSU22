
import { useState } from "react";
import { OverlayContext } from "../../context";
const OverlayContexts = ({swiperRef, children}) =>{

    const [sliderIndex, setSliderIndex] = useState()
    const [imgIndex, setImgIndex] = useState();
    const [show, setShow] = useState(false);

    const handleShowOverlay = (index) =>{
        setShow(prevState => !prevState)
        setImgIndex(index);
        setSliderIndex(swiperRef.current.realIndex);
        if(show){
            swiperRef.current.enable()
        }else{
            swiperRef.current.disable(); 
        }
    }
    return(
        <OverlayContext.Provider value={
            { handleShowOverlay, sliderIndex, imgIndex, show}
        }>
            {children}
        </OverlayContext.Provider>
       
    )   
}
export default OverlayContexts