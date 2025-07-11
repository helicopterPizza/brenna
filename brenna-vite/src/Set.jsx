import React, { Component } from 'react';
import SetProperty from './SetProperty.jsx'
import CommandField from './CommandField.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SetPropertyTextbox from './SetPropertyTextbox.jsx'

document.title="Set.jsx"

function Set(props) {
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [url, setUrl] = useState([])

    const [nameComponent, setNameComponent] = useState([])
    const [descriptionComponent, setDescriptionComponent] = useState([])
    const [urlComponent, setUrlComponent] = useState([])

    const [commands, setCommands] = useState([])

    useEffect(() => {
        setName(props.set.name)
        setDescription(props.set.description)
        setUrl(props.set.url)

        setNameComponent(<SetProperty set={props.set} setProp="name" name="Name" content={props.set.name} edit="True" setComponent={setNameComponent}></SetProperty>)
        setDescriptionComponent(<SetProperty set={props.set} setProp="description" name="Description" content={props.set.description} edit="True" setComponent={setDescriptionComponent}></SetProperty>)
        setUrlComponent(<SetProperty set={props.set} setProp="url" name="URL" content={props.set.url} edit="True" setComponent={setUrlComponent}></SetProperty>)

        const setUid = props.set.uid
        const body = {setUid}
        const response = axios.post('http://localhost:8000/brenna/commands/fetch', body)
            .then(response => {setCommands(response.data)})
    }, [])

    function RunSuite(){
        const setUid = props.set.uid
        console.log(setUid)
        const body = {setUid}
        const response = axios.post('http://localhost:8000/brenna/sets/execute', body)
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <button onClick={() => RunSuite()} type="submit" style={{border: '1px solid black', margin: '20px', float: "left"}}>Execute</button>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6 h-100">
                        <div className="container">
                            {nameComponent}
                            {descriptionComponent}
                            {urlComponent}
                            <SetProperty set={props.set} name="UID" content={props.set.uid} edit="False"></SetProperty>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="container">
                            {commands.map((command, index) => (
                                <div key={command.uid}>
                                    hi
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Set;