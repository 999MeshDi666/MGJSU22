import { useState, useContext, useEffect } from "react";
import { LanguageOption } from "../../context";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 

const initialFormData = {
    "entry.622377088": "",
    "entry.966331574": "",
    "entry.1842236906": "",
    "entry.1419582377": "",
    "entry.1601897725": "",
    "entry.1688673403": "",
    "entry.1712183872": "",
    "entry.752129752": "",
    "entry.1555555961": "",
}

const Form = ({handleShowText}) =>{
    const {chosenLang} = useContext(LanguageOption)
    var notyf = new Notyf({
        duration: 1000,
        position: {
          x: 'right',
          y: 'top',
        },
        types: [
            {
              type: 'success',
              background: '#6db57a',
            },
        ]
    });
    const [formData, setFormData] = useState(initialFormData);
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
    };
   
    async function handleSubmit(e) {
        notyf.success("Регистрация прошла успешно")
        handleShowText();
        e.preventDefault();
        setFormData(initialFormData); 
        
        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?entry.622377088=${formData["entry.622377088"]}&entry.966331574=${formData["entry.966331574"]}&entry.1842236906=${formData["entry.1842236906"]}&entry.1419582377=${formData["entry.1419582377"]}&entry.1601897725=${formData["entry.1601897725"]}&entry.1688673403=${formData["entry.1688673403"]}&entry.1712183872=${formData["entry.1712183872"]}&entry.752129752=${formData["entry.752129752"]}&entry.1555555961=${formData["entry.1555555961"]}`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
    }
    return(
        <form method="post"  
            className="reg-form" id="reg-form" 
            onSubmit={handleSubmit} 
        >
            {chosenLang['formContent'].formFields.map((input, index)=>
                <input 
                    key={index} 
                    type={input.type} 
                    name={input.name}
                    placeholder={input.placeholder} 
                    value={formData[input.name]}
                    className="reg-control"
                    onChange={handleInputData(input.name)}
                    required
                />
            
            )}
        <input type="submit" value={chosenLang['formContent'].regBtn} className="general-btns reg-btn"/>
    </form>

    )
}

export default Form;