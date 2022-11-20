import React, { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./rules-styles/rules.css"
import Overlay from "../overlay/overlay";
import { Container } from "react-bootstrap";
import loki from "../../images/norse/loki.png";
import thor from "../../images/norse/thor.png";

const rulesTxt = [
    "Проект должен соответствовать тематике «SU Game Jam».",
    "На разработку игры дается 48 часов.",
    "Платформа разработки ПК (Системы Windows/Linux) или Web (При использовании которой, участники самостоятельно обеспечивают серверную часть).",
    "Обязательное присутствие на регистрации и закрытии мероприятия.",
    "Участвовать могут только команды. При этом, количество участников в команде должны быть от 2х до 5ти человек.",
    "Разрешено использование заготовок или ранее созданных прототипов, если они были созданы лично участниками команды.",
    "Разрешено использование любых технологий и движков разработки.",
    "Дополнительно в проекте должны присутствовать вещи, отсылающие на 3 из 5 заданных дополнительных слов (слова вскрываются непосредственно перед началом «SU Game Jam»",
    "Разрешено использовать все публично доступные библиотеки и middleware.",
    "Разрешены любые утилиты для создания контента и утилиты для разработчиков (3dsmax, Photoshop, Blender и т. д.)",
    "К игре должен быть приложен исходный код, скомпилированный файл с проектом и отчет команды (Word, PowerPoint и т.д.), в котором дается аргументация проекта, а также информация обо всех используемых в игре сторонних ассетах.",
    "Нарушение интеллектуальной собственности и авторского права в проектах участников строго запрещено и может привести к дисквалификации, все используемые ассеты, созданные не участниками, должны быть свободны для некоммерческого использования, либо у вас должно быть письменное разрешение на их использование!",
    "Взаимодействие между командами не ограничено.",
]
const faqTxt = [
    {
        question: "Что мне делать, если у меня нет команды?",
        answer: "Вы можете подать заявку на участие в одиночку, и либо собрать команду на месте, либо присоединиться к уже существующим командам до старта разработки. Но, если вам не удастся найти команду,вы не сможете принять участие в конкурсе, но сможете принять участие в лекциях и воркшопах. "
    },
    {
        question: "У нашей команды совсем нет опыта, что делать?",
        answer: "ГеймДжем это отличный способ получить первый опыт, в конце концов, ведь все бывает в первый раз!"
    },
    {
        question: "Можем ли мы использовать  Unity3D/RPG MAker/Game Maker или любой другой игровой движок в разработке своего проекта?",
        answer: "Да, вы можете использовать любой игровой движок, если конечный проект будет доступен на платформах указанных в правилах ГеймДжема."
    },
    {
        question: "Проект обязательно должен соответствовать тематике 'Мифы'?",
        answer: "Да. Это необходимое ограничение для поощрения вашего творчества."
    },
    {
        question: "Нам нужно приносить собственную технику (Ноутбуки, граф. планшеты и т.д.)?",
        answer: "Да, на фестиваль «SU Game Jam 2022» необходимо прийти со своей техникой. Формат BYOD (bring your own device)."
    },
    
]
const rules = (
    <ul className="info-lists">
        {rulesTxt.map((rule)=> 
            <li key={rule}>
                {rule}
            </li>
        )}
    </ul>
            
)

const faq = (
    <dl>
        {faqTxt.map((faq, index)=>
            <div key={index}>
                <dt className="info-line">{faq.question}</dt>
                <dd className="mb-3">{faq.answer}</dd>
            </div>
        )}
    </dl>
)
const RulesText = ({IsFlipped}) =>{
    return(       
        <div className="info-text">
            {IsFlipped? faq: rules}
        </div>
    )
}
const Rules = ({handleShowText, show}) =>{

    const [IsFlipped, setFlipCard] = useState(false)
    const handleFlipCard = () =>{
        setFlipCard(prevState => !prevState);
        
    }

    const background = {backgroundColor: IsFlipped? "#9f9634":"#3D6C41"};
    return(
        <section 
            className="rule page" 
            style={background}>
            <Container className="wrapper">
                <div className="rule-content">
                    <div className="general-text rule-text">
                        <h2 className="general-title">Правила & FAQ</h2>
                        <p className="general-subtitle">Правила и FAQ GameJam 2022</p>
                    </div>
                    <div className="card-rule">
                        <div className="card-rule-wrapper" style={{ transform: IsFlipped? `rotateY(${180}deg)`:`rotateY(${0}deg)`}}>
                            <div className="card card-rule-front">
                                <button className="flip-btn" onClick={handleFlipCard}>Показать FAQ</button>
                                <h3 className="card-title card-title-rule">
                                    Перед регистрацией ознакомьтесь с правилами участия 
                                </h3>
                                <button className={"general-btns card-rule-btn-front"} onClick={handleShowText}>Читать</button>
                            </div>
                            <div className="card card-rule-back">
                                <button className="flip-btn" onClick={handleFlipCard}>Показать Правила</button>
                                <h3 className="card-title card-title-rule">
                                    Перед регистрацией советуем таже ознакомиться с FAQ
                                </h3>
                                <button 
                                    className={"general-btns card-rule-btn-back" }
                                    onClick={handleShowText}>
                                        Читать
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show}
                content={<RulesText IsFlipped={IsFlipped}/>}
            />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={IsFlipped}
                    timeout={300}
                    classNames="fade"
                >
                    <img src={IsFlipped? thor:loki} className={`gif-img loki-thor`} alt={IsFlipped? "thor":"loki"}/>
                </CSSTransition>
            </SwitchTransition> 
        </section>
    )
}
export default Rules;