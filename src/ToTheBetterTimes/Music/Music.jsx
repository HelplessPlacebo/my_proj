import React from 'react'
import d from './Music.module.css';
import {compose} from "redux";
import {AuthRedirect} from "../hocs/AuthRedirect";
import CustomizedMenus from "../MaterialUI/Menu/OpenMenu"



const Music = (props) => {
  return(
     <div>
<CustomizedMenus />
     </div>
  )
}
export default compose(
    AuthRedirect
)(Music)