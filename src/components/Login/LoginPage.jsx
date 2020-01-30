import React from "react"
import LoginModalWindow from "../MaterialUI/ModalWindow/LoginModal"
import lm from "../Login/login.module.css"


const LoginPage = (props) => {
    return <div className={lm.LoginPageAlarm}>
        <h1>
            you need authorization for watching this
        </h1>
        <div className={lm.AuthButton}>
            <LoginModalWindow/>
        </div>

    </div>
}

export default LoginPage