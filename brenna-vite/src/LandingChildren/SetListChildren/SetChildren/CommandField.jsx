import React, { Component } from 'react';

document.title="CommandField.jsx"

function CommandField(props) {
    let indo = ""
    if((props.command.actionVal != null) && (props.command.actionVal != "")){
        indo = "\"" + props.command.actionVal + "\" in"
    }
    return(
        <div className="row">
            <div className="col-xs-4 col-md-4" style={{border: '1px solid black', height: "60px", margin: 'auto', padding: '10px'}}>
                <div>{props.command.action} {indo} {props.command.locator}:</div>
                <div>"{props.command.locatorVal}"</div>
            </div>
            <div className="col-xs-2 col-md-2">
                <button style={{border: '1px solid black', float: "left"}} onClick={() => {props.setPage(<Command command={command}></Command>); document.title="Command.jsx"}}>Details</button>
            </div>
        </div>
    )
}

export default CommandField;