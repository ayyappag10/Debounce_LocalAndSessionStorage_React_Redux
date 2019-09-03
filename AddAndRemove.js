import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import debounce from 'lodash/debounce';


const AddAndRemove = (props)=>{
    
    sessionStorage.setItem("cartcount",props.count)
    function addItemHandler(){

        props.dispatch({type:'inc'})
        
    }

    function removeItemHandler(){
        props.dispatch({type:'dec'})
    }

    return(
        <div>

        <button
        onClick={debounce(addItemHandler, 1000)}>
            +
        </button>
        <div>
            cartcount: {props.count}
        </div>
        <button
        onClick={debounce(removeItemHandler, 1000)}>
            -
        </button>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(AddAndRemove);
