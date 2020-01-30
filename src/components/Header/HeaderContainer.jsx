import React from 'react';
import Header from "./Header";
import Preloader from "../assetss/common/Loader/Loader";
import {connect} from "react-redux";
import {LogOutThunk} from "../../data/AuthReducer";
import {GetOwnNameSelector, GetProfileSelector} from "../../data/ProfileSelectors";
import {GetNewMessagesCountThunk} from "../../data/DIalogsReduser"
import {
    GetIsFetchingSelector,
    GetIsLoginedSelector,
    GetLoginSelector,
    GetUserIDSelector
} from "../../data/AuthSelectors";
import {GetNewMessagesCountSelector} from "../../data/InitialozationSelectors";


class HeaderContainer extends React.Component {
    componentDidMount() {
        if(this.props.IsLogined){
            this.props.GetNewMessagesCountThunk()
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.IsLogined !== prevProps.IsLogined ){
            this.props.GetNewMessagesCountThunk()
        }
    }


    render() {
        return <>
        {this.props.IsFetching ? <Preloader/> :null}
          <Header {...this.props} />
          </>
    }

}
let MapStateToProps = (state) => ({
    IsFetching : GetIsFetchingSelector(state),
    IsLogined: GetIsLoginedSelector(state),
    login:GetLoginSelector(state),
    UserProfile: GetProfileSelector(state),
    OwnID : GetUserIDSelector(state),
    OwnName : GetOwnNameSelector(state),
    NewMessagesCount : GetNewMessagesCountSelector(state)
})

export default HeaderContainer = connect(MapStateToProps,
    {LogOutThunk,GetNewMessagesCountThunk})
(HeaderContainer);
