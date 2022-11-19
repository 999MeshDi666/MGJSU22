import { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./rules-styles/rules.css"
import Overlay from "../overlay/overlay";
import { Container } from "react-bootstrap";
import loki from "../../images/norse/loki.png";
import thor from "../../images/norse/thor.png";

const rules = [
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
const RulesText = () =>{
    return(       
        <div className="info-text">
            <ul className="info-lists">
                {rules.map((rule)=>
                    <li key={rule}>
                        {rule}
                    </li>
                )}
            </ul>
          
        </div>
    )
}
const Rules = ({handleShowText, show}) =>{

    const [IsFlipped, setFlipCard] = useState(false)
    const handleFlipCard = () =>{
        setFlipCard(prevState => !prevState);
        
    }

    const background = {backgroundColor: IsFlipped? "#9f9634":"#3D6C41"};
    const changeImg = IsFlipped? thor: loki;
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
                                    Перед регистрацией ознакомьтесь с правилами учатися 
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
                content={<RulesText/>}
            />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={IsFlipped}
                    timeout={500}
                    classNames="fade"
                >
                    <img src={IsFlipped? thor:loki} className={`gif-img loki-thor`} alt={IsFlipped? "thor":"loki"}/>
                </CSSTransition>
            </SwitchTransition>
            
            
        </section>
    )
}
export default Rules;