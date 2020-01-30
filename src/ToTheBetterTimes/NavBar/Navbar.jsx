import React from 'react';
import navc from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={navc.nav}>
        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item}
                 src='https://img2.gratispng.com/20181109/fcz/kisspng-computer-icons-scalable-vector-graphics-home-page-sr-home-svg-png-icon-free-download-271-73-onl-5be659e90078d9.7643314415418229530019.jpg'/>
            <NavLink to="/Profile" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;Home Page
            </NavLink>
        </div>

        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item} src='https://sete.gr/media/1074/icon5.png'/>
            <NavLink to="/News" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;News
            </NavLink>
        </div>

        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item} src='https://image.freepik.com/icone-gratis/messaggi_318-10574.jpg'/>
            <NavLink to="/dialogs" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;Dialogs
                {props.NewMessagesCount !== 0 && props.NewMessagesCount}
            </NavLink>
        </div>

        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item}
                 src='https://c7.uihere.com/files/306/206/419/musical-note-computer-icons-clip-art-cartoon-headphones.jpg'/>
            <NavLink to="/Music" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;Music
            </NavLink>
        </div>
        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item}
                 src='https://img1.pngindir.com/20180707/wse/kisspng-computer-icons-download-installation-clip-art-icon-setting-5b405ef74d6b84.1360704415309452713171.jpg'/>
            <NavLink to="/Settings" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;Settings
            </NavLink>
        </div>

        <div className={`${navc.item} ${navc.active}`}>
            <img className={navc.item} src='https://cdn.onlinewebfonts.com/svg/img_568657.png'/>
            <NavLink to="/Users" activeClassName={navc.activeLink}>
                &nbsp;&nbsp;Users
            </NavLink>
        </div>

    </nav>
}
export default Navbar;
