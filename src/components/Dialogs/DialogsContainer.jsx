import React from 'react'
import {SetNewMessages,GetAllDialogsThunk,
    GetNewMessagesThunk,SendNewMessageThunk} from "../../data/DIalogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../hocs/AuthRedirect";
import {compose} from "redux";
import {GetAllDialogsSelector, GetMessagesDataSelector} from "../../data/DialogsSelectors";
import { withRouter} from 'react-router-dom'


class DialogsContainer extends React.Component {

    componentDidMount() {
      this.props.GetAllDialogsThunk()

    }

    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let StateToProps = (state) => ({
 MessagesData: GetMessagesDataSelector(state),
    AllDialogs : GetAllDialogsSelector(state)
})

export default compose(connect(StateToProps, {SetNewMessages,
        GetAllDialogsThunk,GetNewMessagesThunk,SendNewMessageThunk}),
    AuthRedirect,
    withRouter)(DialogsContainer)