import React from "react";
import { Container } from "react-bootstrap";
import "./contacts.css";
import telegram from "../../images/contact/telegram.png";
import instagram from "../../images/contact/instagram.png";
import discord from "../../images/contact/discord.png";
import map from "../../images/contact/map.png";

const contactTxt = [
    {
        title:  "Адрес:",
        subtitle: "ул. Сатпаева 22, Алматы 050000"
    },
    {
        title:  "Почта:",
        subtitle: "info@thehub.su"
    },
    {
        title:  "Телефон:",
        subtitle: "+7 707 291 7226"
    }
]
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
        href: "#",
        src: telegram
    }
]

const Contacts = () =>{
    return(
        <section className="contacts page">
             <Container className="wrapper">
                <div className="contacts-content">
                    <div className="general-text contacts-text">
                        <h2 className="general-title">Контакты MGJSU22</h2>
                        <p className="general-subtitle">Контакты поддержки и получения <br/> доп. информации GameJam 2022</p>
                    </div>
                    
                    <div className="contact-content">
                        <div className="contact-info">
                            <div>
                                <h3 className="info-title mb-2">Адрес:</h3>
                                <p className="contact-subtitle">ул. Сатпаева 22, Алматы 050000</p>
                                <div className="contact-txt-inner">
                                    <span>
                                        <h3  className="info-title mb-2">Почта:</h3>
                                        <p className="contact-subtitle">info@thehub.su</p>
                                    </span>
                                    <span className="ms-3">
                                        <h3 className="info-title mb-2">Телефон:</h3>
                                        <p className="contact-subtitle">+7 707 291 7226</p>
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
                        {/* <div className="contact-map">
                            <h3 className="info-title mb-2">Место собра:</h3>
                            <div className="contacts-map-img"></div>
                        </div> */}
                    </div>
                </div>
             </Container>
        </section>
    )
}
export default Contacts