import React, { Component, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import SetProperty from './SetProperty.jsx'

/*
    Editable set property component
 */

const SetPropertyTextbox = ({set, setProp, name, content, edit, loadSet, setIsEdit}) => {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const uid = set.uid
        const set_name = set.name
        const description = set.description
        const url = set.url
        const body = {uid: uid, name: set_name, description: description, url: url}
        body[setProp] = inputRef.current.value

        const response = axios.post('http://localhost:8000/brenna/sets/modify', body).then(() => {
            const reload = async () => {
                await loadSet()
                setIsEdit(false)
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
                    <button type="submit" style={{border: '1px solid black', float: "left"}}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default SetPropertyTextbox;