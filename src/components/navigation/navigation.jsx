import { useState,  useContext } from "react";
import LangSelect from "../languages/lang";
import "./navigation.css";
import { LanguageOption } from "../../context";
const navigationList = ["Главная", "GameJam", "Расписание","Правила","Регистрация" ]

const Navigation = ({swiperRef}) =>{
    const [showNav, setShowNav] = useState(false);
    const {chosenLang} = useContext(LanguageOption)
    const handleShowNav = () =>{
        setShowNav(prevState => !prevState);
    }
    const handleSlideTo =(index)=>{
        setShowNav(false)
        swiperRef.current.slideTo(index+1)
    }
    
    return(
        <header>
            <div className="navigation">
                <LangSelect/>
                <div className="nav-menu" onClick={handleShowNav}>
                    <p className="nav-title">Menu</p>
                    <div className={`menu-trigger ${showNav? "active": ""}`}>
                        <span className="btn-el"></span>
                        <span className="btn-el"></span>
                        <span className="btn-el"></span>
                    </div>
                </div>
            </div>
            
            <nav className="nav-overlay overlay" 
                    style={{ display: showNav? "block" : "none"  }}>
                <ul className="nav-list">
                    {
                        chosenLang['navigation'].navList.map((nav, index)=>
                            <li onClick={()=>handleSlideTo(index)} key={nav}>
                                {nav}
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}
export default Navigation;