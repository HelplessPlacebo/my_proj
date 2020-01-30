import React from 'react';
import {addpost} from "../../../data/ProfileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {GetIsMyPageSelector, GetPostsSelector} from "../../../data/ProfileSelectors";


class MyPostsConteiner extends React.PureComponent {

    render() {

        return (
            <MyPosts posts={this.props.posts}
                     addpost={this.props.addpost}
                     profile={this.props.profile}
                     IsMyPage={this.props.IsMyPage}/>
        )
    }
}

let StateProps = (state) => ({
    posts: GetPostsSelector(state),
    IsMyPage: GetIsMyPageSelector(state)
})

export default connect(StateProps, {addpost})(MyPostsConteiner)
