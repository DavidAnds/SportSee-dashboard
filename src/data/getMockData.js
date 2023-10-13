import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./data.js"

const getMockData = (id, name = "") => {
    const dataHandler = () => {
        console.log("id", id)
        console.log("name", name)
        switch (name) {
            case "activity":
                return USER_ACTIVITY.find((user) => user.userId === id)
                break
            case "average-sessions":
                return USER_AVERAGE_SESSIONS.find((user) => user.userId === id)
                break
            case "performance":
                return USER_PERFORMANCE.find((user) => user.userId === id)
                break
            default:
                return USER_MAIN_DATA.find((user) => user.id === id)
        }
    }

    const data = dataHandler()

    return data
}

export default getMockData
