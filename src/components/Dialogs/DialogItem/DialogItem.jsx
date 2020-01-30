import React from 'react'
import d from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (dialogProps) => {
    let path = "/dialogs/" + dialogProps.id;
   /* let avatars = dialogProps.avatars.map(a => <img className={d.img} src={a.avalink}/>);*/
    return (
        <div className={d.dialog}>
       {/*   <img className={d.img} src={dialogProps.avalink}/>*/}
            <img className={d.img} src='http://img1.reactor.cc/pics/post/full/Anime-Art-Anime-6cat-2781305.jpeg'/>
            <NavLink to={path}>{dialogProps.name}</NavLink>
</div>
)
}

export default DialogItem;