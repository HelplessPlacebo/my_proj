import React from 'react'
import d from './Settings.module.css';
import {compose} from "redux";
import {AuthRedirect} from "../hocs/AuthRedirect";


const Settings = (props) => {
  return(
      <div >

      </div>
  )
}
export default compose(
    AuthRedirect
)(Settings)