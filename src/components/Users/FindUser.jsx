import React, {useEffect, useState} from "react"
import FUStyles from "./FindUser.module.css";
import User from "./User";
import FindUserModal from "../MaterialUI/ModalWindow/UserSearchModal";


const FindUser = (props) => {
    let [FoundedUser, SetFoundedUser] = useState(props.FoundedUser)
    useEffect(() => {
            SetFoundedUser(props.FoundedUser)
        }, [props.FoundedUser]
    )

    let [FoundingMode, SetFoundingMode] = useState(false)

    const FoundingModeON = () => {
        SetFoundingMode(true)

    }
    const FoundingModeOFF = () => {
        SetFoundingMode(false)
    }


    const FindUser = (OnSubmitData) => {
        props.FindUserThunk(document.getElementById('FindingUserName').value)
        FoundingModeON()
    }


    return <div>
        {!FoundingMode ?
            <div className={FUStyles.FindUserButton}>
                <FindUserModal SubmitModal={FindUser}/>
            </div>

            :
            <div>
                <div className={FUStyles.foundArea}>



                    {FoundedUser &&
                    <div>
                        <h2 className={FUStyles.SearchingResult}>
                            Searching result :
                            <div>

                                {FoundedUser && FoundedUser.items.length === 0 ?
                                    "no one user with this name"
                                    : "founded " + FoundedUser.items.length + " users "}

                            </div>
                        </h2>

                        <div className={FUStyles.FoundedUsers}>
                            <div className={FUStyles.FoundedUsersWrapper}>
                            {FoundedUser.items.map(item => <User user={item}
                                                                 key={item.id}
                                                                 InProcess={props.InProcess}
                                                                 OnUnFollow={props.OnUnFollow}
                                                                 OnFollow={props.OnFollow}
                                                                 IsLogined={props.IsLogined}/>)}
                        </div>
                        </div>

                    </div>
                    }

                </div>
                <button
                    className={FUStyles.GoBack}
                    onClick={FoundingModeOFF}>
                    go back
                </button>
            </div>

        }

    </div>

}
export default FindUser