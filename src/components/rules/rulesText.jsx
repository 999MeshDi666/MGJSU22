import { useState, useContext, useEffect } from "react";
import { LanguageOption } from "../../context";

const Rules =({lang})=> {
    return(
        <ul className="info-lists">
            {lang['rulesFaqContent'].rulesTxt.map((rule)=> 
                <li key={rule}>
                    {rule}
                </li>
            )}
        </ul>
    )       
}
const Faq = ({lang}) => {
    
    const [faqList, setFaqList] = useState(lang['rulesFaqContent'].faqTxt)
    const handleShowAnswer = (id) =>{
        setFaqList((prevState)=>
            prevState.map((faq, index)=>{
                if(index === id){
                    return {...faq, display: !faq.display }
                }else return faq
            })
        )
    } 

    useEffect(()=>{
        setFaqList(lang['rulesFaqContent'].faqTxt)
    },[lang])
    
    return(
        <dl>
            {faqList.map((faq, index)=>
                <div className="info-line faq-line" key={index}>
                    <dt className="mb-1 faq-question"  onClick={()=> handleShowAnswer(index)}>
                        <span className="info-show-btn">+</span>
                        {faq.question}
                    </dt>
                    <dd className="mb-2 faq-answers" 
                        style={{display: faq.display ? "block":"none"}}>
                            {faq.answer}
                    </dd>
                </div>
            )}
        </dl>
    )
}
const RulesFaqText = ({IsFlipped}) =>{
    const {chosenLang} = useContext(LanguageOption)
    return(       
        <div className="info-text">
            {IsFlipped? <Faq lang={chosenLang}/>: <Rules lang={chosenLang}/>}
        </div>
    )
}
export default RulesFaqText