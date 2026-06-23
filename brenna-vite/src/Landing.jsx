import { useEffect, useState } from 'react'
import axios from 'axios'
import './Sets.css'
import SetList from './LandingChildren/SetList.jsx'
import 'bootstrap/dist/css/bootstrap.css'

/*
    Landing page
 */

function Landing() {
    const [sets, setSets] = useState([])

    useEffect(() => {
        FetchAllSets()
    }, [])


    /*function CreateCommands(){
        //const body = {uid: 20, name: "clicktest TWO", description: "testing clicks again", url: "wikipedia.com"}
        //const response = axios.post('http://localhost:8000/brenna/sets/create', body)
        console.log("hi")
        const body2 = {uid: 1, set_uid: 10, step_id: 1, action: 'click', locator: 'title', locator_val: 'apple'}
        const response2 = axios.post('http://localhost:8000/brenna/commands/create', body2)
    }*/

    function FetchSet() {
        const body = {id: '10'}
        const response = axios.post('http://localhost:8000/brenna/sets/fetch', body)
        console.log(response)
    }

    function FetchAllSets() {
        const setsListUrl = 'http://localhost:8000/brenna/sets/fetch_all'
        const res = axios.get(setsListUrl).then(response => {
            setSets(response.data)
        })
    }

    function CreateSet() {
        var setName = window.prompt("Enter a name for the new set")
        if (setName == null) {
            setName = ''
        }
        const body = {name: setName, description: '', url: ''}
        const load = async () => {
            const response = await axios.post('http://localhost:8000/brenna/sets/create', body)
            FetchAllSets()
        } 
        load()
    }

    return(
        <div>
            <button onClick={() => CreateSet()} type='button' style={{border: '1px solid black', margin: '20px'}}>New Set</button>
            <SetList sets={sets}/>
        </div>
    )
}

export default Landing
