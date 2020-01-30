import React from "react"
import Preloader from "../assetss/common/Loader/Loader";


export const WithSuspense = (Component) => {

    return (props) => {
       return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>

    }
}