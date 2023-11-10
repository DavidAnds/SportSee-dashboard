import { ApiHandler } from "../utils/ApiHandler"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import getMockData from "../data/getMockData"
import DataStandardiser from "../utils/DataStandardiser"

const useData = (id, mock) => {
  const [data, setData] = useState({})
  const [user, setUser] = useState({})
  const [activity, setActivity] = useState({})
  const [averageSessions, setAverageSessions] = useState({})
  const [performance, setPerformance] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (mock) {
      const standardizeData = new DataStandardiser(
        getMockData(id),
        getMockData(id, "activity"),
        getMockData(id, "average-sessions"),
        getMockData(id, "performance")
      ).standardize()

      setUser(standardizeData.user)
      setActivity(standardizeData.activity)
      setAverageSessions(standardizeData.averageSessions)
      setPerformance(standardizeData.performance)
    } else {
      const api = new ApiHandler(id)
      const allFetch = [api.getMain(), api.getActivity(), api.getAverageSessions(), api.getPerfomance()]

      Promise.all(allFetch)
        .then((res) => {
          const standardizeData = new DataStandardiser(res[0], res[1], res[2], res[3]).standardize()

          setUser(standardizeData.user)
          setActivity(standardizeData.activity)
          setAverageSessions(standardizeData.averageSessions)
          setPerformance(standardizeData.performance)
        })
        .catch((err) => {
          console.log("err", err)
          navigate("/500", { replace: true })
        })
    }
  }, [id])

  return { data, user, activity, averageSessions, performance }
}

export default useData

// Utiliser rescharts pour afficher les données
// passer de l'api au mock simplement
