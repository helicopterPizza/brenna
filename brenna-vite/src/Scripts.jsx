import { useEffect, useState } from 'react'
import axios from 'axios'
import './Sets.css'
import SetField from './SetField.jsx'
import SetList from './SetList.jsx'
import 'bootstrap/dist/css/bootstrap.css'

function Scripts() {
    const [sets, setSets] = useState([])
    const [currentSet, setCurrentSet] = useState([])
    const [page, setPage] = useState([])

    useEffect(() => {
        const setsListUrl = 'http://localhost:8000/brenna/sets/fetch_all'
        const res = axios.post(setsListUrl)
            .then(response => {setPage(<SetList sets={response.data} setPage={setPage}/>); setSets(response.data)})
    }, [])


    function CreateCommand(){
        const uid = '10'
        const stepID = '1'
        const action = 'click'
        const locator = 'title'
        const locatorVal = 'Apple'
        const body = {uid, stepID, action, locator, locatorVal}
        const response = axios.post('http://localhost:8000/brenna/command', body)
        console.log(response)
    }

    function FetchSet() {
        const body = {uid: '10'}
        const response = axios.post('http://localhost:8000/brenna/sets/fetch', body)
        console.log(response)
    }

    function FetchAllSets() {
        const response = axios.post('http://localhost:8000/brenna/sets/fetch_all')
        console.log(response)
    }

    return(page)
}

export default Scripts
