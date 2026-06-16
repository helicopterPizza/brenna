import React, { Component } from 'react';
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Link } from 'react-router-dom';

//document.title="CommandField.jsx"

const CommandField = ({id, command, set_id}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id});

    const style = {transition, transform: CSS.Transform.toString(transform)}
    let indo = ""
    if((command.actionVal != null) && (command.actionVal != "")){
        indo = "\"" + command.actionVal + "\" in"
    }

    let statusIcon = ""

    if (command.status == "PENDING") {
        statusIcon = 'clock_placeholder'
    } else if (command.status == "RUNNING") {
        statusIcon = 'running_placeholder'
    } else if (command.status == "SUCCESS") {
        statusIcon = 'success_placeholder'
    } else if (command.status == "FAILED") {
        statusIcon = 'failed_placeholder'
    } else {
        console.log(command)
        statusIcon = 'what'
    }

    return(
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-red-200 p-4 rounded shadow-md flex justify-between">
            <div style={{display: 'flex'}}>
                <div className="container">
                    <div className="row" style={{margin: '5px'}}>
                        <div className="col-xs-4 col-md-4" style={{border: '1px solid black'}}>
                            <div>{command.action} {indo} {command.locator}:</div>
                            <div>{command.locator_val}</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}} className="col-xs-2 col-md-2">
                            <Link style={{marginRight: '8px', border: '1px solid black'}} className="btn btn-default" to={'/sets/' + set_id + '/commands/' + command.step_id}>Details</Link>
                            <button style={{color: 'red', border: '1px solid black'}}>🗑</button>
                            <div>{statusIcon}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommandField;