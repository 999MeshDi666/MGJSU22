import { useState} from "react";
import Overlay from "../overlay/overlay";
import { Container } from "react-bootstrap";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import "./registration-styles/registration.css";
import kempir from "../../images/turkic/kempir.gif";

const formFields = [
    {
        type: "text",
        placeholder: "название команды",
        name: "entry.622377088",
    },
    {
        type: "text",
        placeholder: "учебное заведение",
        name: "entry.966331574",
    },
    {
        type: "email",
        placeholder: "электронная почта",
        name: "entry.1842236906",
    },
    {
        type: "tel",
        placeholder: "номер телефона",
        name: "entry.1419582377",
    },
    {
        type: "text",
        placeholder: "капитан",
        name: "entry.1601897725",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1688673403",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1712183872",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.752129752",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1555555961",
    },
 

]


const Form = ({handleShowText}) =>{
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
            {formFields.map((input, index)=>
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
        <input type="submit" value="Регистрация" className="general-btns reg-btn"/>
    </form>

    )
}
const Registration = ({handleShowText, show}) =>{
  
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text reg-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    
                    <div className="card card-reg">
                        <h3 className="card-title">
                            Начните свой путь в геймдев с нами на GameJam
                        </h3>
                        <button className="general-btns card-reg-btn" onClick={handleShowText}>Начать</button>
                    </div>
                   
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show}
                content={<Form handleShowText={handleShowText}/>} 
            />
            <img src={kempir} className="kempir gif-img" alt="kempir"/>
        </section>
    )
}
export default Registration;