import React from 'react';
import pc from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, MaxLengthCreator} from "../../utils/validators";
import {TextArea} from "../../assetss/common/ValidatorsComponents/ElementsValidators"


const maxValue250 = MaxLengthCreator(250)
    const MyPostForm = (props) => {

        return <div>
            {props.IsMyPage &&
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'postArea'}
                           placeholder={"type any info here"}
                           component={TextArea}
                           validate={[required, maxValue250]}/>

                </div>

                <div>
                    <button className={pc.button}> Send post</button>
                </div>

            </form>
            }
        </div>
    }

const ReduxMyPostForm = reduxForm({form: 'mypost'})(MyPostForm )


const MyPosts = React.memo((props) => {

    const SendPost = (formDatas) => {
        props.addpost(formDatas.postArea)

    }

    let Posts = props.posts.map(p => <Post message={p.Post} likecount={p.likesCount} profile={props.profile}/>);

    return (
        <div className={pc.pp}>
            {props.IsMyPage ?  <h3>My posts</h3> :  <h3>Posts</h3>}
            {<ReduxMyPostForm onSubmit={SendPost} {...props}/>}
            <div className={pc.marginPost}>
                {Posts}
            </div>
        </div>
    )
})
export default MyPosts