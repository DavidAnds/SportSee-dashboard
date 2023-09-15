import { ApiHandler } from "../utils/ApiHandler"
import { useEffect, useState } from "react"

const useApi = (id, name) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const api = new ApiHandler(id, name)
        api.handler().then((res) => {
            setData(res)
        })
    }, [id, name])

    return data
}

export default useApi
