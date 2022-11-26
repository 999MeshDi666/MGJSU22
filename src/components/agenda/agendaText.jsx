import {useContext} from "react";
import { LanguageOption } from '../../context'

const AgendaText = ({imgIndex}) =>{
    const {chosenLang} = useContext(LanguageOption)
    const agenda = chosenLang['agendaContent'].agendaDates[imgIndex]
    return(
        <div className="info-text agenda-text">
            <h3 className="agenda-title">{agenda?agenda.title:null}</h3>
            
            <div>
                {agenda?agenda.dates.map((date, index)=>
                    <div className='info-line' key={index}>
                        <p className="info-title" >{date.dateTitle}</p>
                        <p>{date.text}</p>
                    </div>   
                ):null}
                
            </div>
        </div>
    )
}

export default AgendaText