import "../navigation/navigation.css"
import { useContext } from "react"
import { LanguageOption } from "../../context"
const langs = ['ru','kz','en']
const LangSelect = () =>{
    const {handleChooseLang, lang} = useContext(LanguageOption)
    return(
        <select 
            className="lang-select"
            value={lang}
            onChange= {handleChooseLang}
        >
            {langs.map((lang)=>
                <option
                    key={lang} 
                    value={lang}>
                        {lang}
                </option>
            )}
        </select>
    )
}
export default LangSelect;