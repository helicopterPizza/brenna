import React, { Component } from 'react';
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

//document.title="CommandField.jsx"

const CommandField = ({id, command}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id});

    const style = {transition, transform: CSS.Transform.toString(transform)}
    console.log(transform)
    let indo = ""
    if((command.actionVal != null) && (command.actionVal != "")){
        indo = "\"" + command.actionVal + "\" in"
    }
    return(
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-red-200 p-4 rounded shadow-md flex justify-between">
            <div style={{display: 'flex'}}>
                <div className="col-xs-4 col-md-4">
                    <div>{command.action} {indo} {command.locator}:</div>
                    <div>{command.locator_val}</div>
                </div>
                <div className="col-xs-2 col-md-2">
                    <button style={{border: '1px solid black', float: "left"}}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default CommandField;