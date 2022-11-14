import React from 'react';
import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import { Container } from "react-bootstrap";
import papirus from "../../images/greek/papirus.png";
import Overlay from "../overlay/overlay";
import { useState } from "react";

const aboutTxt = [
    "Mythical Game Jam1 SU 2022 - ежегодный, республиканский, 5-ти дневный фестиваль разработки компьютерных игр для студентов и школьников, развивающихся в сфере программирования, дизайна, геймдизайна, иллюстрации, литературы, моделировании, музыки и искусства. Мероприятие проводится Институтом Автоматики и Информационных при Satbayev University и независимым молодежным сообществом the HUB.",
    "Тематикой 2022 года выбрана тема - “Мифология”, приуроченная к году Детей в Казахстане. Подразумевается свободная интерпретация темы и использование Мифологий любых культур, вплоть до современной. Но особое внимание уделяется проектам посвященным Тюркской и Казахской мифологиям.",
    "Первый день мероприятия, будет посвящён конференции с приглашенными спикерами из игровой индустрии и смежных областей. Конференция пройдёт в открытой форме, в гибридном формате и будет доступна для всех желающих. Второй, третий и четвертый день в течение 48 часов, участники фестиваля будут вести разработку своих игровых проектов.",
]

const AboutText = () =>{
    return(       
        <div className="info-text">
             {aboutTxt.map(txt =>
                <React.Fragment key={txt}>
                    <p>{txt}</p>
                    <br/>
                </React.Fragment>
            )}
            {/* # Зарезезервировано под раздел правил!!!!!!!!!!!1
             <h4 className="about-info-title">Тебя ожидают:</h4>
            <ul className="about-info-list">
                <li>Помощь специалистов</li>
                <li>Полезные воркшопы и лекции от профессионалов</li>
                <li>48 часов на разработку</li>
                <li>5 Номинаций на победу</li>
                <li>Интересные знакомства</li>
                <li>Показ твоей игры на широкую публику</li>
                <li>Интересные призы</li>
            </ul>
            <br/>
            <p>А также, все то что сделает эти 4 дня незабываемыми! Новые друзья, поддержка сообщества, безумные идеи, 
                невероятный буст твоих скилов, заливка в последнюю минуту и прохождение игр от множества других разработчиков из Алматы!</p>
            <br/> */}
           
        </div>
    )
}
const About = ({handleShowText, show}) =>{
    
    return(
        <section className="about page">
            <Container className="wrapper">
                <div className="about-content">
                    <div className="general-text">
                        <h2 className="general-title">О GAMEJAM</h2>
                        <p className="general-subtitle">Кликни на папирус чтобы <br/> получить больше информации</p>
                    </div>
                    <img src={papirus} 
                         className="papirus" 
                         style={{transform: show? `scale(${1.3})` : null}} 
                         alt="papirus" 
                         onClick={handleShowText}/>
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show}
                content={<AboutText/>}
            />
        </section>
    )
}

export default About;