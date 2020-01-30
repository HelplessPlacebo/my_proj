import React from 'react';
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginThunk} from "../../data/AuthReducer"
import {required, MaxLengthCreator} from "../utils/validators"
import {CreateField, Input, InputName} from "../assetss/common/ValidatorsComponents/ElementsValidators"
import lm from "../Login/login.module.css"
import LoginUserPhoto from "../assetss/images/userLog.jpg"
import {Redirect} from "react-router";

const maxLength50 = MaxLengthCreator(50)

const MapStateToProps = (state) => ({
    IsLogined: state.Auth.IsLogined,
    CaptchaUrl: state.Auth.CaptchaUrl
})

const LoginForm = (props) => {

    return (

        <div className={lm.login}>
            <form onSubmit={props.handleSubmit}>

                <div>
                    <img src={LoginUserPhoto} className={lm.imgUser}/>
                    {CreateField("Enter the email", "email", [required, maxLength50], Input)}
                </div>

                <div>
                    {CreateField("Enter the password", "password", [required, maxLength50],
                        Input, {type: "password"})}
                </div>

                <div className={lm.rememberMe}>
                    {CreateField("", "rememberMe", [], "input", {type: "checkbox"},
                        "remember me")}
                </div>

                {props.CaptchaUrl &&
                <div>
                    <img src={props.CaptchaUrl}/>
                    {CreateField("Enter captcha symbols", "captcha", [required],
                        InputName)}
                </div>
                }
                {props.error
                    ?
                    <div className={lm.AuthError}>
                        {props.error}
                    </div>
                    : null}
                <div>
                    <button className={lm.button}> Enter</button>
                </div>
            </form>
        </div>)
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    const PostUserDataToServer = (formDatas) => {
        props.LoginThunk(formDatas.email, formDatas.password, formDatas.rememberMe)
        //here is all datas of forms, we can do here use some thunk for a make request on server
    }

    if (props.IsLogined) {
        return <Redirect to={"/Profile"}/>
    }
    return (<div>

        <ReduxLoginForm onSubmit={PostUserDataToServer}
                        CaptchaUrl={props.CaptchaUrl}/>
    </div>)
}

export default compose(
    connect(MapStateToProps, {LoginThunk}),
)(Login)