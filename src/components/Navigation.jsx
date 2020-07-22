import React from 'react'

import '../styles/nav.css'

const Navigation = () => {
    return (
        <nav className="nav">
                <div className="nav__item"><span>Головна</span></div>
                <div className="nav__item">Візитівка</div>
                <div className="nav__item">Новини</div>
                <div className="nav__item">Реєстрація до закладу</div>
                <div className="nav__item">Батькам</div>
                <div className="nav__item">Контакти</div>
        </nav>
    )
}

export default Navigation