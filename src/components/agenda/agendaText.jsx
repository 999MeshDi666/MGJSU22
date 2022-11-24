const dates = [
    {   
        title: (<h3 className="agenda-title">
                    Вторник – 6 декабря <br/>(Церемония открытия. Первый день фестиваля)
                </h3>),
     
        dates: [
                {
                    dateTitle: "10:30-11:00",
                    text: "Сбор участников «Mythical Game Jam SU 2022»", 
                },
                {
                    dateTitle: '11:00-12:10',
                    text: "Церемония открытия. Презентация «Mythical Game Jam SU 2022»", 
                },
                {
                    dateTitle: "12:10-12:20",
                    text:  "Знакомство с составом жюри. Приветственное слово жюри.",
                },
                {
                    dateTitle: "12:20-12:30",
                    text:  "Обратный отчет.Открытие фестиваля",
                },
                {
                    dateTitle: "12:30-13:30",
                    text:  "Обед",
                },
                {
                    dateTitle: "14:00-17:00",
                    text:  "Мастер-классы от спикеров фестиваля",
                },
                {
                    dateTitle: "17:00",
                    text: "Завершение первого дня фестиваля"
                }
            ]
    },
    {
         
        title: (<h3 className="agenda-title">
                    Дни с 7 по 9 декабря
                </h3>),
        dates: [
            {
                dateTitle: "09:00-09:30",
                text:  "Сбор всех участников фестиваля",
            },
            {
                dateTitle: '10:00',
                text:  "Старт Game Jam SU 22",
            },
            {
                dateTitle: "08.12.22|весь день",
                text:  "Работа команд и менторов.",
            },
            {
                dateTitle: "09.12.22|9:00-11:00",
                text:   "Прием проектов «SU Game Jam» до 11 час 00 мин 09.12.2022г.",
            },
            {
                dateTitle: "11:00–18:00",
                text:  "Подготовка команд к защите проектов. Свободное время",
            }
         
        ]
    },
    {
         
        title: (<h3 className="agenda-title">
                    Суббота 10 декабря <br/> (Закрытие фестиваля)
                </h3>),
          dates: [
            {
                dateTitle: "10:00-13:00",
                text:  "Презентация работ участниками фестиваля.", 
            },
            {
                dateTitle: '13:00–15:00',
                text:  "Работа жюри",
            },
            {
                dateTitle: "16:00–17:00",
                text:   "Церемония награждения победителей «Mythical Game Jam SU 2022»",
            }
        
        ]
    },

]
const AgendaText = ({imgIndex}) =>{

    return(
        <div className="info-text agenda-text">
            {dates[imgIndex]?dates[imgIndex]["title"]:null}
            <div>
                {dates[imgIndex]?dates[imgIndex]["dates"].map((date, index)=>
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