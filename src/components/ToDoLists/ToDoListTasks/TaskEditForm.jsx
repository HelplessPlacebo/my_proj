import React from "react"
import {
    Input,
    CreateField,
    TaskFormInput, ContactFormInput
} from "../../assetss/common/ValidatorsComponents/ElementsValidators";
import {MaxLengthCreator, required} from "../../utils/validators";
import ts from "./Tasks.module.css";
import GoBackButton from "../GoBackButton";

const maxlength50 = MaxLengthCreator(50)
const maxlength100 = MaxLengthCreator(100)

const TaskEditForm = (props) => {

    return <div>

        <form onSubmit={props.handleSubmit}>
            <div className={ts.TaskFormWrapper}>

                <div className={ts.TaskEditFromButtons}>

                    <button className={ts.TaskFormSaveButton}>
                        save
                    </button>

                    <div className={ts.GoBackButton}>
                        <GoBackButton HandleOnClick={props.TaskEditModeOFF}/>
                    </div>

                </div>


                <div>

                    <div className={props.TaskExecutedStyleForWindow}>

                            <div className={ts.Title}>
                                Task title :
                                {CreateField("title", "title", [required, maxlength50], ContactFormInput)}
                            </div>
                        <div className={ts.CompletedFieldWrapper}>
                            <span className={ts.cc}>
                                    Completed?
                            </span>

                            <span >
                                {CreateField("completed", "completed", [], TaskFormInput, {type: "checkbox"})}
                            </span>
                        </div>



                        <div className={ts.detailsWrapper}>
                            <div className={ts.startDate}>
                                Start date :
                                {CreateField("must be like 11/01/2019", "startDate", [maxlength50], ContactFormInput, {type: "date"})}
                            </div>

                            <div className={ts.deadline}>
                                deadline :
                                {CreateField("must be like 11/11/2019", "deadline", [maxlength50], ContactFormInput, {type: "date"})}
                            </div>
                        </div>
                        <div className={ts.FormDescription}>
                            description :
                            {CreateField("description", "description", [maxlength100], ContactFormInput)}
                        </div>



                    </div>
                </div>

            </div>

        </form>
    </div>
}

export default TaskEditForm