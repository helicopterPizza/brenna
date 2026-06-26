import React, { Component, useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

const CommandProperty = ({command, commandProp, name, content, edit, loadCommand}) => {
const [IsEdit, commandIsEdit] = useState(false)
const inputRef = useRef();

//console.log("prop " + commandProp)

function handleSubmit() {

    const set_id = command.set_id
    const step_id = command.step_id
    const action = command.action
    const locator = command.locator
    const action_val = command.action_val
    const locator_val = command.locator_val
    const body = {set_id: set_id, 
        step_id: step_id,
        action: action, 
        locator: locator, 
        locator_val: locator_val, 
        action_val: action_val
    }
    body[commandProp] = inputRef.current.value

    const response = axios.post('http://localhost:8000/brenna/commands/modify', body).then(() => {
        //console.log(body)
        //console.log(response.data)
        const reload = async () => {
            await loadCommand()
            commandIsEdit(false)
        }
    })
}

if (edit == "True") {
    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {name}
                    </div>
                    <div>
                        {IsEdit ? (
                            <input style={{width: '100%'}} id={name + "_box"} type="text" ref={inputRef} defaultValue={content} autoComplete="off" />
                        ) :
                        <div>{content}</div>}
                    </div>
                </div>
                <div className="col-xs-2 col-md-2">
                    {IsEdit ? (
                        <button style={{border: '1px solid black', float: "left"}} onClick={() => { handleSubmit() }}>Save</button>
                    ) : <button style={{border: '1px solid black', float: "left"}} onClick={(e) => { e.preventDefault(); e.stopPropagation(), commandIsEdit(true) }}>Edit</button>}
                </div>
            </form>
        </div>
    )
} else {
    return (
        <div className="row">
            <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                <div style={{border: '1px solid black'}}>
                    {name}
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}
}

export default CommandProperty;