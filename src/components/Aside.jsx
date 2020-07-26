import React from 'react'
import { FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';

const Aside = () => {

    return (
        <div className="aside">
            <h5>Ми в соціальних мережах</h5>
            <div className="aside__social-media">
            <div className="header__icons">
            <a href="https://www.facebook.com/groups/1566022256752415" rel="noopener noreferrer"
                    target="_blank">
                <FaFacebookSquare className="nav__icon fb"/>
              </a>

              <a href="https://www.youtube.com/channel/UCcTJJXt3TBZzK4Ry5VeYKpQ" rel="noopener noreferrer"
                    target="_blank">
                <FaYoutubeSquare className="nav__icon youtube" />
              </a>
            </div>
            </div>
        </div>
    )
}

export default Aside
