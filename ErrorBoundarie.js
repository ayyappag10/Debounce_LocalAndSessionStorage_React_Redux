import React from "react"

export default class ErrorBoundarie extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // static getDerivedStateFromError(error){
    //     return {
    //         hasError: true
    //     }
    // }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
      }

    render(){
        return(
            <div>
                {
                    this.state.hasError ?(null):
                    (this.props.children)
                }
            </div>            
        )
    }
}