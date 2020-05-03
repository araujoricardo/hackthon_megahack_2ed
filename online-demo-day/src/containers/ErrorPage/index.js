import React from "react";
import {connect} from "react-redux"
import { goBack } from "connected-react-router";


class ErrorPage extends React.Component{

    render(){
        const {goBack}=this.props
        return(
            <div>
                <button onClick={goBack}>VOLTAR</button>
                Esta página esta em desenvolvimento
            </div>
        )

    }

}

const mapDispatchToProps = dispatch =>{
    return{
        goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps) (ErrorPage);