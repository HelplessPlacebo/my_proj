import React from "react"
export const required = (value) =>{

if(value ){
    return undefined
}
else return <div>
    This field is required
</div>

}


export const MaxLengthCreator = (MaxLengthValue) =>{
    return(value =0 )=>{
if(value && value.length > MaxLengthValue) {
    return `Maximal length is a ${MaxLengthValue} symbols`
}
else return undefined
    }
}

