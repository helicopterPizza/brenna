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
import { useParams } from 'react-router-dom';


/*
    Main display component for a specific set
 */

document.title="Set.jsx"

const Set = () => {
    const { set_uid } = useParams()

    const [set, setSet] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [url, setUrl] = useState([])

    const [nameComponent, setNameComponent] = useState([])
    const [descriptionComponent, setDescriptionComponent] = useState([])
    const [urlComponent, setUrlComponent] = useState([])

    const [commands, setCommands] = useState([])

    function LoadSet() {
        const body = {set_uid}
        const response = axios.post('http://localhost:8000/brenna/sets/fetch', body)
            .then(response => {setSet(response.data[0])})
    }

    useEffect(() => {
        LoadSet()
    }, [])

    function RunSuite(){
        const body = { set_uid }
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
            <div className="container">
                <div className="row">
                    <button onClick={() => RunSuite()} type="submit" style={{border: '1px solid black', margin: '20px', float: "left"}}>Execute</button>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6 h-100">
                        <div className="container">
                            <SetProperty set={set} setProp="name" name="Name" content={set.name} edit="True" loadSet={LoadSet}></SetProperty>
                            <SetProperty set={set} setProp="description" name="Description" content={set.description} edit="True" loadSet={LoadSet}></SetProperty>
                            <SetProperty set={set} setProp="url" name="URL" content={set.url} edit="True" loadSet={LoadSet}></SetProperty>
                            <SetProperty set={set} name="UID" content={set.uid} edit="False" loadSet={LoadSet}></SetProperty>
                        </div>
                    </div>
                    <div className="max-w-2xl mx-auto grid gap-2 my-10">
                        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
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