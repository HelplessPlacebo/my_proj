import React,{useState} from "react"
import ts from "./Tasks.module.css";
import TaskShowDetailsIcon from "./TaskShowDetailsIcon";
import TaskHideDetailsIcon from "./TaskHideDetails";
import {DateTransform} from "../../utils/dateTransform"



const TaskDetails = (props) => {

    let [ShowDetails, SetShowDetails] = useState(false)

    let AddedDate = DateTransform(props.CurrentTask.startDate)
    let DeadLineDate = DateTransform(props.CurrentTask.deadline)

    const ShowDetailsON = () => {
        SetShowDetails(true)
        props.ShowButtonBlockedON()
    }

    const ShowDetailsOFF = () => {
        SetShowDetails(false)
        props.ShowButtonBlockedOFF()
    }
    return <div >

        {ShowDetails ?
            <div>
            <div className={ts.detailsWrapper}>

                <div className={ts.startDate}>
                    {props.CurrentTask.startDate ?
                        "start date :" + AddedDate[0]+"/"+AddedDate[1]+"/"+AddedDate[2]
                        : "no started date data"
                    }
                </div>

                <div className={ts.deadline}>

                    {props.CurrentTask.deadline ?
                        "deadline :"  + DeadLineDate[0]+"/"+DeadLineDate[1]+"/"+DeadLineDate[2]
                        : "no deadline data"
                    }

                </div>
            </div>
                <div className={ts.description}>
                    description :
                    <div className={ts.descriptionText}>
                        {props.CurrentTask.description?
                        props.CurrentTask.description:
                        "no description data"}
                    </div>

                </div>

                <div className={ts.DetailsButton}>
                    <TaskHideDetailsIcon HandleOnClick={ShowDetailsOFF} />
                </div>
            </div>
            :

            <div className={ts.DetailsButton}>
                <TaskShowDetailsIcon ShowButtonBlocked={props.ShowButtonBlocked}
                                     HandleOnClick={ShowDetailsON}/>
            </div>
        }

    </div>
}

export default TaskDetails