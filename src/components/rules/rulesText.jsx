import { useState } from "react"
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
        question: "Формат мероприятия?",
        answer: "«Mythical Game Jam SU 2022» пройдет в оффлайн формате в городе Алматы в Satbayev University по адресу Сатпаева 22.",
        display: false
    },
    {
        question: "Сколько человек в команде?",
        answer: "Соревнование командное, допускаются команды от 2 до 5 человек.",
        display: false
    },
    {
        question: "Кто может принять участие?",
        answer: "Команда обучающихся школ, колледжей и ВУЗов достигших 16 лет и ознакомленных с Положением о фестивале разработчиков видео игр «Mythical Game Jam SU 2022» (Положение будет доступно на сайте в ближайшее время).",
        display: false
    },
    {
        question: "Для какой платформы создаются видео игры?",
        answer: "Для Персонального компьютера (ПК).",
        display: false
    },
    {
        question: "Что мне делать, если у меня нет команды?",
        answer: "Вы можете подать заявку на участие в одиночку, и либо собрать команду на месте, либо присоединиться к уже существующим командам до старта разработки. Но, если вам не удастся найти команду,вы не сможете принять участие в конкурсе, но сможете принять участие в лекциях и воркшопах. ",
        display: false
    },
    {
        question: "У нашей команды совсем нет опыта, что делать?",
        answer: "ГеймДжем это отличный способ получить первый опыт, в конце концов, ведь все бывает в первый раз!",
        display: false
    },
    {
        question: "Можем ли мы использовать  Unity3D/RPG MAker/Game Maker или любой другой игровой движок в разработке своего проекта?",
        answer: "Да, вы можете использовать любой игровой движок, если конечный проект будет доступен на платформах указанных в правилах ГеймДжема.",
        display: false
    },
    {
        question: "Проект обязательно должен соответствовать тематике 'Мифы'?",
        answer: "Да. Это необходимое ограничение для поощрения вашего творчества.",
        display: false
    },
    {
        question: "Нам нужно приносить собственную технику (Ноутбуки, граф. планшеты и т.д.)?",
        answer: "Да, на фестиваль «SU Game Jam 2022» необходимо прийти со своей техникой. Формат BYOD (bring your own device).",
        display: false
    },
    {
        question: "Можно ли прийти с готовым продуктом?",
        answer: "Разрешено использование заготовок или ранее созданных прототипов если они были созданы участниками «Mythical Game Jam SU 2022» (но не более 50% продукта, при условии, что каждый ассет будет перечиcлен). В случае возникновения у Организатора и/или Соревновательного Жюри сомнений касательно уникальности разработки Результата, Соревновательное Жюри оставляет за собой право отказать в допуске Результата до процедуры оценки.",
        display: false
    },
    
]
const Rules =()=> {
    return(
        <ul className="info-lists">
            {rulesTxt.map((rule)=> 
                <li key={rule}>
                    {rule}
                </li>
            )}
        </ul>
    )       
}
const Faq = () => {
 
    const [faqList, setFaqList] = useState(faqTxt)
    const handleShowAnswer = (id) =>{
        setFaqList((prevState)=>
            prevState.map((faq, index)=>{
                if(index === id){
                    return {...faq, display: !faq.display }
                }else return faq
            })
        )
    } 

    return(
        <dl>
            {faqList.map((faq, index)=>
                <div className="info-line faq-line" key={index}>
                    <dt className="mb-1 faq-question"  onClick={()=> handleShowAnswer(index)}>
                        <span className="info-show-btn">+</span>
                        {faq.question}
                    </dt>
                    <dd className="mb-2 faq-answers" 
                        style={{display: faq.display ? "block":"none"}}>
                            {faq.answer}
                    </dd>
                </div>
            )}
        </dl>
    )
}
const RulesFaqText = ({IsFlipped}) =>{
    return(       
        <div className="info-text">
            {IsFlipped? <Faq/>: <Rules/>}
        </div>
    )
}
export default RulesFaqText