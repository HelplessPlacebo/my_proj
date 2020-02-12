import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Redirect, Route, withRouter} from "react-router-dom";
/*import News from "./components/News/News";*/
/*import Music from "./components/Music/Music";*/
/*import Settings from "./components/Settings/Settings";*/
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileCOntainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {InitializationAPPthunk} from "./data/InitializatonReducer";
import Preloader from "./components/assetss/common/Loader/Loader";
// import {WithSuspense} from "./components/hocs/WithSuspense";
import MessagesContainer from "./components/Dialogs/Message/MessagesContainer";
import {GetinitionSelector} from "./data/InitialozationSelectors";
import {GetNewMessagesCountThunk} from "./data/DIalogsReduser";
import LoginPage from "./components/Login/LoginPage";
import ToDoListsContainer from "./components/ToDoLists/ToDoListsContainer";
import {GetIsLoginedSelector} from "./data/AuthSelectors";
/*const Music = React.lazy(() => import('./components/Music/Music'))*/


class App extends Component {
    componentDidMount() {
        this.props.InitializationAPPthunk()
    }

    render() {

        if (!this.props.inition) {
            return <Preloader/>
        }
        return (

            <div className='wrapper'>
                    <HeaderContainer  />


                <div className="app-wrapper-content">

                    <Route exact path='/'
                           render={() => <Redirect to={"Profile/"}/>}/>

                    <Route path='/dialogs/'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/messages/:userID?'
                           render={() => <MessagesContainer/>}/>

                    <Route path='/Profile/:userID?'
                           render={() => <ProfileContainer/>}/>


                    <Route exact path='/Users' render={() => <UsersContainer/>}/>

                    <Route exact path='/Login' render={() => <LoginPage/>}/>

                    <Route exact path='/ToDoLists' render={() => <ToDoListsContainer/>}/>

             {       /* to the new updates
                    <Route exact path='/News' render={() => <News/>}/>

                    <Route exact path='/Music' render={WithSuspense(Music)}/>

                    <Route exact path='/Settings' render={() => <Settings/>}/>*/}

                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => ({inition: GetinitionSelector(state),
    IsLogined: GetIsLoginedSelector(state)})

export default compose(
    connect(MapStateToProps, {InitializationAPPthunk,GetNewMessagesCountThunk}),
    withRouter)(App)
