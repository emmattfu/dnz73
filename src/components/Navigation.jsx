import React from 'react'
import {NavLink} from 'react-router-dom'


import '../styles/nav.css'

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__item" to="/">Головна</NavLink>
            <NavLink className="nav__item" to="/about-us">Візитівка</NavLink>
            <NavLink className="nav__item" to="/news">Новини</NavLink>
            <NavLink className="nav__item" to="/registration-info">Реєстрація до закладу</NavLink>
            <NavLink className="nav__item" to="/parents-info">Батькам</NavLink>
            <NavLink className="nav__item" to="/contacts">Контакти</NavLink>
     
        </nav>
    )
}

export default Navigation