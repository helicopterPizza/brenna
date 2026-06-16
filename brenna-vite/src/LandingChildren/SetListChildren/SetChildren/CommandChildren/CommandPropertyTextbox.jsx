import React, { Component, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
//import SetProperty from './SetProperty.jsx'

const CommandPropertyTextbox = ({command, commandProp, name, content, edit, loadCommand, commandIsEdit}) => {
const inputRef = useRef();

const handleSubmit = (event) => {
    event.preventDefault();

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
        console.log(body)
        console.log(response.data)
        const reload = async () => {
            await loadCommand()
            commandIsEdit(false)
        }
        reload()
    })
}

return (
    <div className="row">
        <form onSubmit={handleSubmit}>
            <div className="col-xs-6 col-md-6 h-100" style={{border: '1px solid black', height: "100px"}}>
                <div style={{border: '1px solid black'}}>
                    {name}
                </div>
                <input id={name + "_box"} type="text" ref={inputRef} defaultValue={content} autoComplete="off" />
            </div>
            <div className="col-xs-6 col-md-6">
                <button type="submit" class="btn btn-default" style={{border: '1px solid black', float: "left"}}>Save</button>
            </div>
        </form>
    </div>
)
}

export default CommandPropertyTextbox;