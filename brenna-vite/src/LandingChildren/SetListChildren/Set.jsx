import React, { Component } from 'react';
import SetProperty from './SetChildren/SetProperty.jsx'
import CommandField from './SetChildren/CommandField.jsx'
import CommandColumn from './SetChildren/CommandColumn'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import SetPropertyTextbox from './SetChildren/SetPropertyTextbox.jsx'
import { DndContext, closestCorners } from '@dnd-kit/core'


/*
    Main display component for a specific set
 */

document.title="Set.jsx"

const Set = ({set}) => {
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [url, setUrl] = useState([])

    const [nameComponent, setNameComponent] = useState([])
    const [descriptionComponent, setDescriptionComponent] = useState([])
    const [urlComponent, setUrlComponent] = useState([])

    const [commands, setCommands] = useState([])

    useEffect(() => {
        setName(set.name)
        setDescription(set.description)
        setUrl(set.url)

        setNameComponent(<SetProperty set={set} setProp="name" name="Name" content={set.name} edit="True" setComponent={setNameComponent}></SetProperty>)
        setDescriptionComponent(<SetProperty set={set} setProp="description" name="Description" content={set.description} edit="True" setComponent={setDescriptionComponent}></SetProperty>)
        setUrlComponent(<SetProperty set={set} setProp="url" name="URL" content={set.url} edit="True" setComponent={setUrlComponent}></SetProperty>)

        const setUid = set.uid
        const body = {setUid}
        const response = axios.post('http://localhost:8000/brenna/commands/fetch', body)
            .then(response => {setCommands(response.data)})
    }, [])

    function RunSuite(){
        const setUid = set.uid
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
                            <SetProperty set={set} name="UID" content={set.uid} edit="False"></SetProperty>
                        </div>
                    </div>
                    <DndContext collisionDetection={closestCorners}>
                        <CommandColumn commands={commands}></CommandColumn>
                    </DndContext>
                </div>
            </div>
        </div>
    )
}

export default Set;