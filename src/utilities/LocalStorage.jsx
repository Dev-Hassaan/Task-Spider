
export const setLocalStorage = (taskList)=>
{
    localStorage.setItem("Tasks", JSON.stringify(taskList))
}

export const getLocalStorage = ()=>
{
    return JSON.parse(localStorage.getItem("Tasks"))
}

