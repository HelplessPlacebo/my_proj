import React from "react"
import {Redirect} from "react-router";
import {connect} from "react-redux";

let MapStateToPropsForRedirect = (state)=>{
    return{
        IsLogined : state.Auth.IsLogined
    }
}

export const AuthRedirect = (Component) =>{
class RedirectComp extends React.Component {
    render() {
        if (!this.props.IsLogined) {
            // редирект на страничку авторизации
            return <Redirect to={"/Login"} />
        }
        return <Component {...this.props} />
    }
}
let ConectedAuthRedirectComp = connect(MapStateToPropsForRedirect)(RedirectComp)
return ConectedAuthRedirectComp
}