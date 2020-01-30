import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./ProfileReduser";
import DialogsReducer from "./DIalogsReduser";
import UsersReducer from "./UsersReduser";
import AuthReducer from "./AuthReducer";
import  thunkMiddleWare from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import InitializateReducer from "./InitializatonReducer";
import ToDoListsReducer from "./ToDoListsReducer";

let reducers = combineReducers({
    ProfileData: ProfileReducer,
    MessagesData: DialogsReducer,
    UsersData : UsersReducer,
    Auth : AuthReducer,
    form : formReducer,
    Init :  InitializateReducer,
    ToDoListsData : ToDoListsReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleWare))

window.store = store;
export default store
