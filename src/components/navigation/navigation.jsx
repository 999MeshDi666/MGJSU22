import { useState, useContext } from "react";
import "./navigation.css";

const navigationList = ["Главная", "GameJam", "Расписание","Правила","Регистрация" ]

const Navigation = ({swiperRef}) =>{
    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () =>{
        setShowNav(prevState => !prevState);
    }
    const handleSlideTo =(index)=>{
        setShowNav(false)
        swiperRef.current.slideTo(index+1)
    }
    return(
        <header>
            <div className="nav-menu" onClick={handleShowNav}>
                <p className="nav-title">Menu</p>
                <div className={`menu-trigger ${showNav? "active": ""}`}>
                    <span className="btn-el"></span>
                    <span className="btn-el"></span>
                    <span className="btn-el"></span>
                </div>
            </div>
            <nav className="nav-overlay overlay" style={{ display: showNav? "block" : "none"  }}>
                <ul className="nav-list">
                    {
                        navigationList.map((nav, index)=>
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