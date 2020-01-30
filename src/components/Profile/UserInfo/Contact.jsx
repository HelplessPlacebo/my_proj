import React from "react"
import cs from "./Contact.module.css"

const Contact = (props) =>{


    return <span>
        {props.ContactValue &&
        <div className={cs.contact} >
        {props.ContactName} : {props.ContactValue}
        </div>
        }
    </span>
}


export default Contact