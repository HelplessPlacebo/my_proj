import React from 'react'
import {connect} from "react-redux";
import {
    followThunk,
    unfollowThunk,
    SetCurrentPage,
    getUsersThunk,
    ToggleInProcess,
    ChangePortionSize,FindUserThunk
} from "../../data/UsersReduser";
import PurifyUsers from "./Users";
import Preloader from "../assetss/common/Loader/Loader";
import {compose} from "redux";
import {
    GetCurrentPage,
    GetInProgress,
    GetIsFeching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsers,
    GetPortionSize, GetFoundedUserSelector,FindUserIsFetching
} from "../../data/Users-Selectors";
import { GetIsLoginedSelector} from "../../data/AuthSelectors";

class UsersContainer extends React.Component {
    /* this component using for make requests on server for a new users and drawing
Ui component (Users)*/

    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    OnChangedPage = (pageNumber) => {
        this.props.SetCurrentPage(pageNumber)
        this.props.getUsersThunk(pageNumber, this.props.pageSize)

    }

    render() {

        return <>
            {this.props.IsFetching ? <Preloader/> :
                <PurifyUsers Users={this.props.Users}
                             totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             OnChangedPage={this.OnChangedPage}
                             OnFollow={this.props.followThunk}
                             OnUnFollow={this.props.unfollowThunk}
                             currentPage={this.props.currentPage}
                             ToggleInProcess={this.props.ToggleInProcess}
                             InProcess={this.props.InProcess}
                             IsLogined={this.props.IsLogined}
                             ChangePortionSize={this.props.ChangePortionSize}
                             PortionSize={this.props.PortionSize}
                             FindUserThunk={this.props.FindUserThunk}
                             FoundedUser={this.props.FoundedUser}
                             FindUserIsFetching={this.props.FindUserIsFetching}
                />
            }
        </>
    }
}

let StateToProps = (state) => {
    return {
        IsLogined : GetIsLoginedSelector(state),
        Users: GetUsers(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        IsFetching: GetIsFeching(state),
        FindUserIsFetching: FindUserIsFetching(state),
        InProcess: GetInProgress(state),
        PortionSize : GetPortionSize(state),
        FoundedUser : GetFoundedUserSelector(state)
    }
}

/*let DispatchToProps = (dispatch) => {
    return {
        onFollow: (userID) => {

            dispatch(follow_AC(userID))
        },
        onUnFollow: (userID) => {

            dispatch(unfollow_AC(userID))
        },
        setUsers: (Users) => {
            dispatch(setUsers_AC(Users))
        },
        SetCurrentPage: (NumberOfPage) => {
            dispatch(setCurrentPage_AC(NumberOfPage))
        },
        SetTotalCountOfUsers: (totalCount) => {
            dispatch(SetTotalCountOfUsers_AC(totalCount))
        },
        ToggleIsFetching: (IsFetching) => {
            dispatch(IsFetchingToggle_AC(IsFetching))
        }
    }
}*/


export default compose(
    connect(StateToProps,
        {followThunk, unfollowThunk, SetCurrentPage,
            ToggleInProcess, getUsersThunk,ChangePortionSize,FindUserThunk})
)(UsersContainer)