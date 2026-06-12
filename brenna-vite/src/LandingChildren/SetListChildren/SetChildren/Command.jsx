/*
    Main display component for a specific set
 */

import { useParams } from 'react-router-dom'
import CommandProperty from './CommandChildren/CommandProperty.jsx'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

document.title="Command.jsx"

const Command = () => {
    const [command, setCommand] = useState([])
    const { set_id, step_id } = useParams()

    function LoadCommand() {
        const body = { set_id }
        const commands_response = axios.post('http://localhost:8000/brenna/commands/fetch', body)
            .then(response => {
                response.data.sort((a,b) => a.step_id - b.step_id);
                response.data = response.data.filter((x) => {
                    return Number(x.step_id) === Number(step_id)
                })
                console.log(response.data)
                setCommand(response.data[0])
            })
    }

    useEffect(() => {
        LoadCommand()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6 h-100">
                        <div className="container">
                            <CommandProperty command={command} name="Step Number" content={command.step_id + 1} edit="False" loadCommand={LoadCommand}></CommandProperty>
                            <CommandProperty command={command} commandProp="action" name="Action" content={command.action} edit="True" loadCommand={LoadCommand}></CommandProperty>
                            <CommandProperty command={command} commandProp="locator" name="Locator" content={command.locator} edit="True" loadCommand={LoadCommand}></CommandProperty>
                            <CommandProperty command={command} commandProp="action_val" name="Action Value" content={command.action_val} edit="True" loadCommand={LoadCommand}></CommandProperty>
                            <CommandProperty command={command} commandProp="locator_val" name="Locator Value" content={command.locator_val} edit="True" loadCommand={LoadCommand}></CommandProperty>
                            <CommandProperty command={command} name="Set ID" content={command.set_id} edit="False" loadCommand={LoadCommand}></CommandProperty>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Command;