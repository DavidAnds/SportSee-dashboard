export class ApiHandler {
    constructor(id, name) {
        this.id = id
        this.method = "GET"
        this.name = name
        this.url = `http://localhost:3000/user/${this.id}/`
    }

    async handler() {
        switch (this.name) {
            case "infos":
                return await this.getInfos()
                break
            case "activity":
                return await this.getActivity()
                break
            case "average-sessions":
                return await this.getAverageSessions()
                break
            case "today-score":
                return await this.getTodayScore()
                break
            case "activity-type":
                return await this.getActivityType()
                break
            case "activity-keys":
                return await this.getActivityKeys()
                break
            default:
                return await this.fetch()
        }
    }

    async fetch(routes = "") {
        return fetch(this.url + routes, {
            method: this.method,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                return res.data
            })
            .catch((err) => {
                console.log(err)
                return err
            })
    }

    async getInfos() {
        const data = await this.fetch()
        return data.userInfos
    }

    async getActivity() {
        const data = await this.fetch("activity")
        return data.sessions
    }

    async getAverageSessions() {
        const data = await this.fetch("average-sessions")
        return data.sessions
    }

    async getTodayScore() {
        const data = await this.fetch()
        return data.todayScore
    }

    async getActivityType() {
        const data = await this.fetch("performance")
        return data.kind
    }

    async getActivityKeys() {
        const data = await this.fetch()
        return data.keyData
    }
}
