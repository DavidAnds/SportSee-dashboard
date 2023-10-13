import { ApiHandler } from "../utils/ApiHandler"
import { useEffect, useState } from "react"

const useApi = (id, name = "") => {
    const [data, setData] = useState({})

    useEffect(() => {
        const api = new ApiHandler(id, name)
        api.handler()
            .then((res) => {
                console.log("api")
                setData(res)
            })
            .catch((err) => {
                setData(undefined)
            })
    }, [id, name])

    return data
}

export default useApi

// Utiliser rescharts pour afficher les données
// passer de l'api au mock simplement
