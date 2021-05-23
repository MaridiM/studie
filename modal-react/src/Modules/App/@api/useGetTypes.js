import axios from 'axios'
import { useState } from 'react'

export const useGetTypes = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getTypes = async () => {
        setLoading(true)
        const res = await axios.get('http://localhost:8000/api/1')
        setData([...res.data])
        setLoading(false)
    } 
    return [ getTypes, { data, loading }]
}