import React from 'react';
import HS from "./Header.module.css"



const LogOutButton =(props) =>{
    const LogOut = ()=>{
        props.LogOutThunk()
        props.handleMenuClose()
    }

return <div>
    <div className={HS.LogOutStyle} onClick={LogOut}>
        Logout
    </div>
</div>
}

export default LogOutButton