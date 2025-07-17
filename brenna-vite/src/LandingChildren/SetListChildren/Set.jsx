import React, { Component } from 'react';
import SetProperty from './SetChildren/SetProperty.jsx'
import CommandField from './SetChildren/CommandField.jsx'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import SetPropertyTextbox from './SetChildren/SetPropertyTextbox.jsx'
import { DndContext, closestCorners } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'


/*
    Main display component for a specific set
 */

document.title="Set.jsx"

const Set = ({sets, set, updateSets}) => {
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

        setNameComponent(<SetProperty set={set} setProp="name" name="Name" content={set.name} edit="True" setComponent={setNameComponent} updateSets={updateSets}></SetProperty>)
        setDescriptionComponent(<SetProperty set={set} setProp="description" name="Description" content={set.description} edit="True" setComponent={setDescriptionComponent} updateSets={updateSets}></SetProperty>)
        setUrlComponent(<SetProperty set={set} setProp="url" name="URL" content={set.url} edit="True" setComponent={setUrlComponent} updateSets={updateSets}></SetProperty>)

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

    const getCommandPos = id => commands.findIndex(command => command.id === id)

    const handleDragEnd = event => {
        const {active, over} = event

        console.log({active, over})

        if (active.id === over.id) return;

        setCommands(commands => {
            const originalCommandPos = getCommandPos(active.id)
            const newCommandPos = getCommandPos(over.id)

            return arrayMove(commands, originalCommandPos, newCommandPos)
        })
    }

    return(
        <div>
            <button onClick={() => {console.log(sets); sets={}}}>ra</button>
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
                    <div className="max-w-2xl mx-auto grid gap-2 my-10">
                        <DndContext collisionDetection={closestCorners} onDragStart={() => {console.log("i drag")}} onDragEnd={handleDragEnd}>
                            <SortableContext items={commands}>
                                {commands.map((command, index) => (
                                    <CommandField id={command.id} command={command} key={command.id}></CommandField>
                                ))}
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Set;