import React from 'react'
import Paginator from "../assetss/common/Paginator/Paginator";
import User from "./User";
import FindUser from "./FindUser";
import us from "./Users.module.css"




let PurifyUsers = (props) => {

    props.ChangePortionSize(15);

    return <div>

            <FindUser  FindUserThunk={props.FindUserThunk}
                      FoundedUser={props.FoundedUser}
                      InProcess={props.InProcess}
                      OnUnFollow={props.OnUnFollow}
                      OnFollow={props.OnFollow}
                      IsLogined={props.IsLogined}
                       FindUserIsFetching={props.FindUserIsFetching}
            />

        <div className={us.UsersWrapper}>
        { props.Users.map(us =>  <User
            user={us}
            key={us.id}
            InProcess={props.InProcess}
            OnUnFollow={props.OnUnFollow}
            OnFollow={props.OnFollow}
            IsLogined={props.IsLogined}
        />)
        }
        </div>

        <div className={us.PaginatorPosition}>
       <Paginator OnChangedPage={props.OnChangedPage}
                  currentPage={props.currentPage}
                  totalUsersCount={props.totalUsersCount}
                      pageSize={props.pageSize}
                  PortionSize={props.PortionSize}
       />
        </div>
    </div>
}
export default PurifyUsers