import React from "react";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { LanguageOption } from "../../context";
import "./contacts.css";
import telegram from "../../images/contact/telegram.png";
import instagram from "../../images/contact/instagram.png";
import discord from "../../images/contact/discord.png";
import map from "../../images/contact/map.png";


const contactSN = [
    {
        href: "https://instagram.com/gamejam_su?igshid=YmMyMTA2M2Y=",
        src: instagram
    },
    {
        href: "https://discord.gg/eR2NczHr",
        src: discord
    },
    {
        href: "https://t.me/gamejamsu",
        src: telegram
    }
]

const Contacts = () =>{
    const {chosenLang} = useContext(LanguageOption)
    return(
        <section className="contacts page">
             <Container className="wrapper">
                <div className="contacts-content">
                    <div className="general-text contacts-text">
                        <h2 className="general-title">{chosenLang['contacts'].title}</h2>
                        <p className="general-subtitle">{chosenLang['contacts'].subtitle}</p>
                    </div>
                    
                    <div className="contact-content">
                        <div className="contact-info">
                            <div>
                                <h3 className="info-title mb-lg-2">{chosenLang['contacts'].address.title}</h3>
                                <p className="contact-subtitle">{chosenLang['contacts'].address.subtitle}</p>
                                <div className="contact-txt-inner">
                                    <span>
                                        <h3  className="info-title mb-lg-2">{chosenLang['contacts'].email.title}</h3>
                                        <p className="contact-subtitle">{chosenLang['contacts'].email.subtitle}</p>
                                    </span>
                                    <span className="ms-3">
                                        <h3 className="info-title mb-lg-2">{chosenLang['contacts'].tel.title}</h3>
                                        <p className="contact-subtitle">{chosenLang['contacts'].tel.subtitle}</p>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-sn">
                                {contactSN.map((icons, index)=>
                                    <a href={icons.href} target="_blank" key={index}>
                                        <img src={icons.src}  alt="contact sn" className="contact-icons"/>
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="contact-map">
                            <h3 className="info-title mb-2">{chosenLang['contacts'].mapTitle}</h3>
                            <div className="contacts-map-img"></div>
                        </div>
                    </div>
                </div>
             </Container>
        </section>
    )
}
export default Contacts