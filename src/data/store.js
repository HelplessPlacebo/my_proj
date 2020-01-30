import ProfileReducer from "./ProfileReduser";
import DialogsReducer from "./DIalogsReduser";

export let store = {
    _state: {
        ProfileData: {
            Posts: [
                {id: 1, Post: 'post1', likesCount: 12},
                {id: 2, Post: 'post2', likesCount: 2},
                {id: 3, Post: 'post3', likesCount: 11},
                {id: 4, Post: 'post4', likesCount: 5},
                {id: 5, Post: 'post5', likesCount: 121}
            ],
            TextNewPost: ''
        },
        MessagesData: {
            users: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Katya'},
                {id: 5, name: 'Olya'}
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'hello'},
                {id: 4, message: 'ky'},
                {id: 5, message: 'privet'}
            ],
            NewMessageText: '',

            avatars: [
                {
                    id: 1,
                    avalink: 'https://avatars.mds.yandex.net/get-pdb/988157/7bf97b91-4108-443f-b03a-9c0881ac5cb6/s1200?webp=false'
                },
                {
                    id: 2,
                    avalink: 'https://get.wallhere.com/photo/mountains-animals-flowers-looking-away-anime-anime-girls-animal-ears-blue-eyes-water-brunette-glasses-bicycle-sky-sitting-clouds-fish-butterfly-fishing-screenshot-55652.jpg'
                },
                {id: 3, avalink: 'https://s1.1zoom.ru/b5050/652/296854-Sepik_2048x1152.jpg'},
                {id: 4, avalink: 'https://c.wallhere.com/photos/04/6a/anime_anime_girls-1525953.jpg!d'},
                {id: 5, avalink: 'https://wallbox.ru/wallpapers/main/201329/anime-kartinka-yepizod-1ac0544.jpg'}
            ]
        },
        sidebar: {
            friendsNames: [
                {id: 1, name: 'Katya'},
                {id: 2, name: 'Olya'},
                {id: 3, name: 'Anya'}
            ]

        }
    },
    _callSubscriber() {
        console.log('')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.ProfileData =   ProfileReducer(this._state.ProfileData,action)
        this._state.MessagesData =  DialogsReducer(this._state.MessagesData,action)
        this._state.sidebar =  SideBarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)

    },


}

export default store
window.store = store