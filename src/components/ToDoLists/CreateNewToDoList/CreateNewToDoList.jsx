import React,{useState} from "react"
import InputWithIcon from "./TextFieldToDoLists";
import TDlistS from "./CreateNewToDoList.module.css"


const CreateNewToDoList = (props) =>{
    let[CreateNewToDoListMode,SetCreateNewToDoListMode] = useState(false);
    let[CurrentValueOfCreateNewToDoListInput,SetCurrentValueOfCreateNewToDoListInput] = useState("");

    const OnTextFieldCreateNewToDoListChanging = (el) =>{
     SetCurrentValueOfCreateNewToDoListInput(el.currentTarget.value)
    }

    const CreateToDoListON = () =>{
        SetCreateNewToDoListMode(true)
    };
    const CreateToDoListOFF = () =>{
        SetCreateNewToDoListMode(false)
    }

    const AddNewToDoList = () => {
        if (CurrentValueOfCreateNewToDoListInput.length > 0 && CurrentValueOfCreateNewToDoListInput.length < 100) {
            props.AddNewToDoListsThunk(CurrentValueOfCreateNewToDoListInput)
            SetCreateNewToDoListMode(false)
        }

    }


    return <div>
        {!CreateNewToDoListMode &&
            <div   className={TDlistS.CreateAndGoBackButtons}>
                <button className={TDlistS.AddNewListButton} onClick={CreateToDoListON}>
                    ADD NEW LIST
                </button>
            </div>

        }

        { CreateNewToDoListMode &&
            <>
                <div className={TDlistS.CreateAndGoBackButtons}>
                    <button className={TDlistS.GoBacktButton} onClick={CreateToDoListOFF}>
                       GO BACK
                    </button>
                </div>
                <div className={TDlistS.AddNewListWrapper} >
                    <InputWithIcon OnTextFieldCreateNewToDoListChanging={OnTextFieldCreateNewToDoListChanging} />
                    <button onClick={AddNewToDoList} className={TDlistS.Addbutton} > add </button>
                </div>
        </>
        }
    </div>
}

export default CreateNewToDoList