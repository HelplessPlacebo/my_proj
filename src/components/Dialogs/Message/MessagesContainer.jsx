import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom'
import {
    GetIsFetchingDialogs,
    GetMessagesDataSelector,
} from "../../../data/DialogsSelectors";
import MessagesWithUser from "./MessagesWithUser";
import {AuthRedirect} from "../../hocs/AuthRedirect";
import {
    SendNewMessageThunk,
    GetNewMessagesThunk,
    GetInterlocutorAvatarThunk,
    setUserAvatarForDialogs,
    GetProfileAvatarThunk,
    DeleteMessageThunk,
    GetNewMessagesCountThunk
} from "../../../data/DIalogsReduser"
import {GetUserIDSelector} from "../../../data/AuthSelectors";
import {GetNewMessagesCountSelector} from "../../../data/InitialozationSelectors";
import Preloader from "../../assetss/common/Loader/Loader";

class MessagesContainer extends React.Component {

    componentDidMount() {
        const DialoguserID = this.props.match.params.userID
        this.props.GetNewMessagesThunk(DialoguserID)
        this.props.GetInterlocutorAvatarThunk(DialoguserID)
        this.props.GetProfileAvatarThunk(this.props.MyID)
        if(this.props.NewMessagesCount > 0){
            this.props.GetNewMessagesCountThunk()
        }
    }


    render() {
        return (
            <>
            {
                this.props.IsFetching ? <Preloader/> :
                    <MessagesWithUser {...this.props} DialoguserID={this.props.match.params.userID}/>
            }
            </>

        )
    }
}

let StateToProps = (state) => ({
    MessagesData: GetMessagesDataSelector(state),
    MyID: GetUserIDSelector(state),
    NewMessagesCount : GetNewMessagesCountSelector(state),
    IsFetching : GetIsFetchingDialogs(state)
})

export default  compose(connect(StateToProps,
    {
        GetNewMessagesThunk, SendNewMessageThunk,
        GetInterlocutorAvatarThunk, setUserAvatarForDialogs,
        GetProfileAvatarThunk,DeleteMessageThunk,GetNewMessagesCountThunk
    }),
    AuthRedirect,
    withRouter)(MessagesContainer)