export const loadState =()=>{
    try{
        const persistentState = localStorage.getItem('state');
        if(persistentState === null){
            return undefined
        }
        return JSON.parse(persistentState)
    }
    catch(err){
        return undefined
    }
}

export const saveState =(state)=>{
    try{
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)
    }
    catch(err){
        console.log(err)
    }
}