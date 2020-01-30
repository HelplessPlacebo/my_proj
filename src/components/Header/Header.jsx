import React,{useEffect,useState} from 'react';
import hc from './Header.module.css'
import {NavLink} from "react-router-dom";
import AccountIconComponent from "./AcountIcon";
import MessagesIcon from "./MessagesIcon";
import UsersIcon from "./UsersIcon"
import ToDoListsIcon from "./ToDoListsIcon";

const Header = (props) => {

let [NMC,SetNMC] = useState(props.NewMessagesCount)

    useEffect(() => {
        SetNMC(props.NewMessagesCount)
        }, [props.NewMessagesCount]
    )

    return <header className={hc.header}>
        <div className={hc.item}>
            {props.IsLogined
                ?
                <div className={hc.IconsWrapper}>

                    <div className={hc.startPosition}>

                    </div>
                    <div className={`${hc.item} ${hc.active}`}>
                        <NavLink activeClassName={hc.active} to={"/ToDoLists/"}>
                            <ToDoListsIcon/>
                        </NavLink>
                    </div>

                    <div className={`${hc.item} ${hc.active}`}>
                        <NavLink activeClassName={hc.active} to={"/Users/"}>
                            <UsersIcon/>
                        </NavLink>
                    </div>

                    <div className={hc.MessagesIconPosition}>
                        <div className={`${hc.item} ${hc.active}`}>
                            <NavLink activeClassName={hc.active} to={"/Dialogs/"}>
                                <MessagesIcon NewMessagesCount={NMC}/>
                            </NavLink>
                        </div>
                    </div>

                    <AccountIconComponent LogOutThunk={props.LogOutThunk}
                                          UserProfile={props.UserProfile}
                                          OwnName={props.OwnName}
                    />
                </div>
                :
                <div className={hc.unloginedHeader}>
                    <div className={hc.unloginedUsersIcon}>
                    <div className={`${hc.item} ${hc.active}`}>
                        <NavLink activeClassName={hc.active} to={"/Users/"}>
                            <UsersIcon/>
                        </NavLink>
                    </div>
                    </div>

                     <div className={hc.loginPosition}>
                        <NavLink className={hc.loginButton} to={'/login'}>
                            Login
                        </NavLink>
                     </div>

                 </div>
            }
        </div>
    </header>
}
export default Header;
