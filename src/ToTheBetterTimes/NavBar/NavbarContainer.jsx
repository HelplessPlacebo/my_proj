import {GetNewMessagesCountThunk} from "../../data/DIalogsReduser"
import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
import Navbar from "./Navbar";
import {GetNewMessagesCountSelector} from "../../data/InitialozationSelectors";


class NavbarContainer extends React.Component {

    componentDidMount() {
    }


    render() {
        return (
            <Navbar {...this.props}  />
        )
    }
}

let StateToProps = (state) => ({NewMessagesCount: GetNewMessagesCountSelector(state)})

export default compose(connect(StateToProps, {GetNewMessagesCountThunk})
)(NavbarContainer)