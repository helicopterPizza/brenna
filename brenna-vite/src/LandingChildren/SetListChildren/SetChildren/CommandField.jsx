import React, { Component } from 'react';
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

//document.title="CommandField.jsx"

const CommandField = ({id, command}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

    const style = {transition, transform: CSS.Transform.toString(transform)}

    console.log(id)

    let indo = ""
    if((command.actionVal != null) && (command.actionVal != "")){
        indo = "\"" + command.actionVal + "\" in"
    }
    return(
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <div className="col-xs-4 col-md-4" style={{border: '1px solid black', height: "60px", margin: 'auto', padding: '10px'}}>
                <div>{command.action} {indo} {command.locator}:</div>
                <div>"{command.locatorVal}"</div>
                <div>{command.stepID}</div>
            </div>
            <div className="col-xs-2 col-md-2">
                <button style={{border: '1px solid black', float: "left"}}>Details</button>
            </div>
        </div>
    )
}

export default CommandField;