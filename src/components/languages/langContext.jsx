import { useState } from "react";
import {LanguageOption} from "../../context";
import ru from "../../langs/ru.json";
import kz from "../../langs/kz.json";
import en from "../../langs/en.json";

const LangContext = ({children}) =>{

    const langList = {ru, kz, en}
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