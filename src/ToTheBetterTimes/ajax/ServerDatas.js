function GetImages(PageNumber,Counts) {
    const promise =  axios.get(`https://repetitora.net/api/JS/Images?page=${PageNumber}&count=${Counts}`)

        return promise.then((responce)=>{

      return responce.data
  })
    }

function GetTasks() {
    const promise =  axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=123321`)
    return promise.then((responce)=>{
        return responce.data
    })
}

function CreateTasks(TaskName) {
    const promise =  axios.post(`https://repetitora.net/api/JS/Tasks`,{
        widgetId : 123321,
        title : TaskName
    })
    return promise.then((responce)=>{
        return responce.data
    })
}
function DelTask(id) {
    const promise =  axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=123321&taskId=${id}`)
    return promise.then((responce)=>{
        return responce.data
    })
}

function UpTasks(title,id,done) {
    const promise =  axios.put(`https://repetitora.net/api/JS/Tasks`,{
        widgetId : 123321,
        title: title,
        taskId : id,
        done:done
    })
    return promise.then((responce)=>{
        return responce.data
    })
}