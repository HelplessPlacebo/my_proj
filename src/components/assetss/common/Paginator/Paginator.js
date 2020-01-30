import PS from "./Paginator.module.css";
import React, {useState} from "react"

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // расчет кол-ва страниц
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let [PortionNumber, SetPortionNumber] = useState(1)
    let LeftBorderOfPortion = (PortionNumber - 1) * props.PortionSize + 1
    let RightBorderOfPortion = PortionNumber * props.PortionSize
    let PortionCount = Math.ceil(pagesCount / props.PortionSize) // расчет кол-ва порций

    return <div className={PS.setNumbers}>
        <div className={PS.NumbersFont}>
        {PortionNumber > 1 &&
        <button className={PS.button} onClick={() => {
            SetPortionNumber(PortionNumber - 1)
        }}> back </button>}
        {pages.filter(p => p >= LeftBorderOfPortion && p <= RightBorderOfPortion).map((p) => {
            // нумерация страниц
            return (

                <span  className={props.currentPage === p && PS.numbers}
                      onClick={(ev) => {
                          props.OnChangedPage(p)
                      }}>
                            {"    " + p}
                        </span>

            )
        })}
        &nbsp;&nbsp;
        {PortionCount > PortionNumber &&

        <button className={PS.button} onClick={() => {
            SetPortionNumber(PortionNumber + 1)
        }}>next </button>}
    </div>
    </div>
}

export default Paginator