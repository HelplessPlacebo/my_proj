import React from 'react'
import LoadingSvg from '../../../assetss/images/loader1.gif';
import ls from './LoaderStyles.module.css'



let Preloader = (props ) =>{

    return <img className={ls.large} src={LoadingSvg}/>
}
export default Preloader