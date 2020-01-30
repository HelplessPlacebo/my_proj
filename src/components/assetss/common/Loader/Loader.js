import React from 'react'
import LoadingSvg from '../../../assetss/images/loader1.gif';
import hc from '../../../Header/Header.module.css'

let Preloader = (props) =>{
    return <img className={hc.loader} src={LoadingSvg}/>
}
export default Preloader