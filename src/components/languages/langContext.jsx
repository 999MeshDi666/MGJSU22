import { useState } from "react";
import {LanguageOption} from "../../context";
import ru from "../../langs/ru.json";
import kz from "../../langs/kz.json";
import SwiperPages from "../swiper/swiperPages";
const LangContext = ({children}) =>{

    const langList = {ru, kz}
    const [lang, setLang] = useState(window.localStorage.getItem('cur_lang')||"ru");
    const chosenLang = langList[lang]
    const handleChooseLang = (e) =>{
        window.localStorage.setItem('cur_lang', e.target.value)
        setLang(e.target.value)
    }
    return(
        <LanguageOption.Provider 
            value={{handleChooseLang, lang, chosenLang}}>
               {children}
        </LanguageOption.Provider>
    )
}
export default LangContext;