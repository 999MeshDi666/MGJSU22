import { Container } from "react-bootstrap";
import { useState } from "react";
import "./navigation.css";


const Navigation = ({toSlide}) =>{
    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () =>{
        setShowNav(prevState => !prevState);
    }
    const navigationList = [
        {
            index: 1,
            nav: "Главная"
        },
        {
            index: 2,
            nav: "GameJam"
        },
        {
            index: 3,
            nav: "Расписание"
        },
        {
            index: 4,
            nav: "Правила"
        },
        {
            index: 5,
            nav: "Регистрация"
        },
    ]
    return(
        <header>
            <div className="nav-menu" onClick={handleShowNav}>
                <p className="nav-title">Menu</p>
                <div>
                    <span className="btn-el nav-btn-el"></span>
                    <span className="btn-el nav-btn-el"></span>
                    <span className="btn-el nav-btn-el"></span>
                </div>
            </div>
            <nav className="nav-overlay overlay" style={{ display: showNav? "block" : "none"  }}>
                <ul className="nav-list">
                    {
                        navigationList.map((nav)=>
                            <li key={nav.index}>{
                                nav.nav}
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}
export default Navigation;