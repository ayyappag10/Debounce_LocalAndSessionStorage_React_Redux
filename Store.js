import {createStore} from "redux"
import {saveState, loadState} from "./LocalStorage"


const initialState = {
    count: 0,
    whatevr: "wahtever"
}

const peristentData = loadState();

const stateReducer = (state = peristentData || initialState, action)=>{
    switch(action.type){
        case 'inc':
            return{
                ...state, count: state.count + 1
            };
            case 'dec':
                return{
                    ...state, count: state.count -1
                };
                default:
                    return state;
    }
}


const store = createStore(stateReducer)



store.subscribe(()=>{
    saveState(store.getState())
})


export default store;
