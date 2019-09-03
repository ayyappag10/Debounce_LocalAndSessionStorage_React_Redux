import React from 'react';
import {connect} from 'react-redux'

const Cart = (props)=>{

    function addItemHandler(){
        props.dispatch({type:'inc'})
        
    }
    return(
        <>
        <div>
            cartcount: {props.count}
        </div>
        <button
        onClick={addItemHandler}>
            addItem
        </button>
        </>
    )
}

function mapStateToProps(state){
    
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Cart);
