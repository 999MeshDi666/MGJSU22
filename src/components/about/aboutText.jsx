import React from 'react';
import {useContext} from "react";
import { LanguageOption } from '../../context';

const AboutText = () =>{
    const {chosenLang} = useContext(LanguageOption)
    return(       
        <div className="info-text">
             {chosenLang['aboutContent'].aboutTxt.map(txt =>
                <React.Fragment key={txt}>
                    <p>{txt}</p>
                    <br/>
                </React.Fragment>
            )}
           
        </div>
    )
}

export default AboutText;