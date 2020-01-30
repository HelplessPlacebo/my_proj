import React from 'react'
import d from './News.module.css';
import {compose} from "redux";
import {AuthRedirect} from "../hocs/AuthRedirect";
const News = (props) => {
  return(
      <div>
          will be available in the next version
      </div>
  )
}
export default compose(
    AuthRedirect
)(News)