const ShowImgas = document.querySelector("#ShowImages")
const PageNumberElement = document.querySelector("#page-number")
const CountOfImages = document.querySelector("#img-counts")
const EnteredNewTask = document.querySelector("#EnteredTask")
const CreateNewTask = document.querySelector("#CreateTask")
const ShowTasks = document.querySelector("#ShowTasks")
const DeleteTask = document.querySelector("#DeleteTask")
const DeleteTaskId = document.querySelector("#DeleteTaskId")
const UpdateTasks = document.querySelector("#UpdateTasks")
const UpdateTasksId = document.querySelector("#UpdateTasksId")
const NewTaskname = document.querySelector("#NewTaskname")

ShowImgas.addEventListener("click", () => {
    const promise = GetImages(PageNumberElement.value, CountOfImages.value, OnImgReceived)
    promise.then(OnImgReceived)
})

ShowTasks.addEventListener("click", () => {
    const promise = GetTasks()
    promise.then(OnTasksReceived)
})

CreateNewTask.addEventListener("click", () => {
    const promise = CreateTasks(EnteredNewTask.value)
    promise.then()
})

DeleteTask.addEventListener("click", () => {
    const promise = DelTask(DeleteTaskId.value)
    promise.then()
})

UpdateTasks.addEventListener("click", () => {
    const promise = UpTasks(NewTaskname.value,UpdateTasksId.value,true)
    promise.then()
})
function OnImgReceived(data) {
    {
        data.forEach(el => {
            const img = document.createElement('img')
            img.src = el.thumbnail
            document.querySelector('#Images').appendChild(img)
        })
    }
}

function OnTasksReceived(tasks) {
    {
        tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerHTML = task.title
            document.querySelector('#Tasks').appendChild(li)
        })
    }
}

