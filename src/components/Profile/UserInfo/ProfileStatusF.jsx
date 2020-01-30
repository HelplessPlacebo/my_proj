import React, {useState, useEffect} from "react"

const ProfileStatusF = (props) => {


    let [IsStatusChanging, SetIsStatusChanging] = useState(false)
    let [Status, SetStatus] = useState(props.status)

    useEffect(() => {
            SetStatus(props.status)
        }, [props.status]
    )

    const StatusChangingON = () => {
        SetIsStatusChanging(true)
    }

    const StatusChangingOFF = () => {
        SetIsStatusChanging(false)
        props.SetProfileStatus(Status)

    }

    const OnStatusChange = (e) => {
        SetStatus(e.currentTarget.value)
    }


    return (<div>
            {props.IsMyPage ?
                <div>
                    {!IsStatusChanging ?
                        <div>
                <span onDoubleClick={StatusChangingON}>
                Status  : {Status || "the status is empty"
                }
                </span>
                        </div>
                        :
                        <div>
                            <input onChange={OnStatusChange} onBlur={StatusChangingOFF} autoFocus={true}
                                   value={Status}/>
                        </div>
                    }
                </div>
                : Status || "the status is empty"
            }
        </div>
    )
}


export default ProfileStatusF