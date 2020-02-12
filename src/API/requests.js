import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "96428d9a-0d9d-4cb1-8a30-3ebf6693ac4b"
    }
})

const instanceToDoLists = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        "API-KEY": "96428d9a-0d9d-4cb1-8a30-3ebf6693ac4b"
    }
})
/*
const MyServerInstance = axios.create({
    baseURL: 'http://localhost:5000/'
})
*/

export const API = {

    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },

    async AuthMe() {
        const response = await instance.get(`auth/me`)
        return response.data
    },

    async getProfile(ProfileID = 2) {
        const response = await instance.get(`profile/` + ProfileID)
        return response.data
    },

    async DelSub(userId) {
        const response = await instance.delete(`follow/${userId}`)
        return response.data
    },

    async AddSub(userId) {
        const response = await instance.post(`follow/${userId}`)
        return response.data
    },

    async getProfileStatus(ProfileID ) {
        const response = await instance.get(`profile/status/` + ProfileID)
        return response.data
    },

    async setProfileStatus(status) {
        const response = await instance.put(`profile/status/`, {status: status})
        return response.data

    },

    async Login(email, password, rememberMe, captcha) {
        const response = await instance.post(`auth/login/`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        })
        return response.data
    },

    async LogOut() {
        const response = await instance.delete(`auth/login`)
        return response.data

    },

    async LoadPhotoOnServer(photo) {
        const formdata = new FormData()
        formdata.append("image", photo)
        const response = await instance.put('profile/photo', formdata, {
            'Content-Type': 'multipart/form-data'
        })
        return response.data
    },
    async PutProfileDataOnServer(profile) {
        const response = await instance.put('profile', profile)
        return response.data
    },
    async GetCaptchaFromServer() {
        const response = await instance.get('security/get-captcha-url')
        return response.data
    },
    async GetAllDialogs() {
        const response = await instance.get('dialogs')
        return response.data
    },
    async GetNewMessagesFromServer(userId) {
        const response = await instance.get(`dialogs/${userId}/messages`)
        return response.data
    },
    async SendNewMessage(userId, NewMessage) {
        const response = await instance.post(`dialogs/${userId}/messages`, {
            body: NewMessage
        })
        return response.data
    },
    async GetNewMessagesCount() {
        const response = await instance.get('dialogs/messages/new/count')
        return response
    },
    async DeleteMessage(MessageID) {
        const response = await instance.delete(`dialogs//messages/${MessageID}`)
        return response
    },
    async FindUser(UserName) {
        const response = await instance.get(`users?term=${UserName}`)
        return response
    },
    async GetToDoLists() {
        const response = await instance.get('todo-lists')
        return response
    },
    async CreateNewToDoList(title) {
        const response = await instance.post('todo-lists', {title: title})
        return response
    },
    async DeleteToDoList(todolistId) {
        await instance.delete(`todo-lists/${todolistId}`)
    },
    async ChangeToDoListTitle(todolistId, title) {
        await instance.put(`todo-lists/${todolistId}`, {
            title: title
        })
    },
    async GetToDoListTasks(todolistId, count = 10, page = 1) {
        const response = await instance.get(`todo-lists/${todolistId}/tasks?count=${count}&page=${page}`)
        return response
    },

    async CreateNewTakForToDoList(todolistId, Tasktitle) {
        const DataResponse = await instance.post(`todo-lists/${todolistId}/tasks`, {
            title: Tasktitle
        })
        return DataResponse
    },

    async ChangeTaskInformation(todolistId, taskid, status) {

        const DataResponse = await instanceToDoLists.put(`todo-lists/${todolistId}/tasks/${taskid}`, status)
        return DataResponse
    },
    async DeleteTaskFromToDoList(todolistId, taskid) {
        const DataResponse = await instanceToDoLists.delete(`todo-lists/${todolistId}/tasks/${taskid}`)
        return DataResponse
    },
/*    async MyServerReq(){
        const Res = await MyServerInstance.get('server')
        return Res
    },
    async MyServerPost(body){
        const Res = await MyServerInstance.post('friends/add',body)
        return Res
    }*/
}
