import React from 'react';
import Overlay from "../overlay/overlay";
import "./agenda-styles/agenda.css";
import "./agenda-styles/agenda-responsive.css";
import { Container } from "react-bootstrap";
import scroll1 from "../../images/japan/scroll1.png";
import scroll2 from "../../images/japan/scroll2.png";
import scroll3 from "../../images/japan/scroll3.png";


const AgendaText = ({imgIndex}) =>{
  
    const dates = [
        {   
            title: (<h3 className="info-title">
                        Вторник – 6 декабря <br/>(Церемония открытия. Первый день фестиваля)
                    </h3>),
         
            dates: [
                    {
                        dateTitle: "10:30-11:00:",
                        text: "Сбор участников «Mythical Game Jam SU 2022»", 
                    },
                    {
                        dateTitle: '11:00-12:10:',
                        text: "Церемония открытия. Презентация «Mythical Game Jam SU 2022»", 
                    },
                    {
                        dateTitle: "12:10-12:20:",
                        text:  "Знакомство с составом жюри. Приветственное слово жюри.",
                    },
                    {
                        dateTitle: "12:20-12:30:",
                        text:  "Обратный отчет.Открытие фестиваля",
                    },
                    {
                        dateTitle: "12:30-13:30:",
                        text:  "Обед",
                    },
                    {
                        dateTitle: "14:00-17:00:",
                        text:  "Мастер-классы от спикеров фестиваля",
                    },
                    {
                        dateTitle: "17:00:",
                        text: "Завершение первого дня фестиваля"
                    }
                ]
        },
        {
             
            title: (<h3 className="info-title">
                        Дни с 7 по 9 декабря
                    </h3>),
            dates: [
                {
                    dateTitle: "09.00-09:30:",
                    text:  "Сбор всех участников фестиваля",
                },
                {
                    dateTitle: '10:00:',
                    text:  "Старт Game Jam SU 22",
                },
                {
                    dateTitle: "08.12.22|весь день:",
                    text:  "Работа команд и менторов.",
                },
                {
                    dateTitle: "09.12.22|9:00-11:00:",
                    text:   "Прием проектов «SU Game Jam» до 11 час 00 мин 09.12.2022г.",
                },
                {
                    dateTitle: "11:00–18:00:",
                    text:  "Подготовка команд к защите проектов. Свободное время",
                }
             
            ]
        },
        {
             
            title: (<h3 className="info-title">
                        Субботник 10 декабря <br/> (Закрытие фестиваля)
                    </h3>),
              dates: [
                {
                    dateTitle: "10:00-13.00:",
                    text:  "Презентация работ участниками фестиваля.", 
                },
                {
                    dateTitle: '13.00–15:00:',
                    text:  "Работа жюри",
                },
                {
                    dateTitle: "16:00–17:00:",
                    text:   "Церемония награждения победителей «Mythical Game Jam SU 2022»",
                }
            
            ]
        },

    ]

    return(
        <div className="info-text agenda-text">
            {dates[imgIndex]?dates[imgIndex]["title"]:null}
            <div>
                {dates[imgIndex]?dates[imgIndex]["dates"].map((date, index)=>
                    <div className='agenda-dates' key={index}>
                        <p className="info-subtitle" >{date.dateTitle}</p>
                        <p>{date.text}</p>
                    </div>
                       
                ):null}
                
            </div>
        </div>
    )
}
const Agenda = ({handleShowText, show, imgIndex}) =>{

    const scrolls = [
        {
            src: scroll1,
            class: "scroll-img",
            alt: "scroll1"
        },
        {
            src: scroll2,
            class: "scroll-img",
            alt: "scroll2"
        },
        {
            src: scroll3,
            class: "scroll-img",
            alt: "scroll3"
        }
    ]
    const images = scrolls.map((scroll, index)=>(
                <img src={scroll.src} 
                    className={scroll.class} 
                    alt={scroll.alt} 
                    style={{transform: imgIndex === index? `scale(${1.1})`:  null}} 
                    key={index} 
                    onClick={ ()=> handleShowText(index)}/>
            )) 
    
    return(
        <section className="agenda page">
            <Container className="wrapper">
                <div className="agenda-content">
                    <div className="general-text">
                        <h2 className="general-title">Расписание</h2>
                        <p className="general-subtitle">Расписание GameJam 2022</p>
                    </div>
                    <div className="scrolls">
                        {images}
                    </div>
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show} 
                content={<AgendaText imgIndex={imgIndex} />}
                />
            
        </section>
    )
}
export default Agenda