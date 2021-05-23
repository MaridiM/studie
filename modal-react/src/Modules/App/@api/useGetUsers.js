import axios from 'axios'
import { useState } from 'react'

export const useGetUsers = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getUsers = async () => {
        setLoading(true)
        const res = await axios.get('http://localhost:8000/api/')
        setData([...res.data])
        setLoading(false)
    } 
    return [ getUsers, { data, loading }]
}