export class ApiHandler {
  constructor(id, name) {
    this.id = id
    this.method = "GET"
    this.name = name
    this.url = `http://localhost:3000/user/${this.id}/`
  }

  async handler() {
    switch (this.name) {
      case "activity":
        return await this.getActivity()
        break
      case "average-sessions":
        return await this.getAverageSessions()
        break
      case "performance":
        return await this.getActivityType()
        break
      default:
        return await this.getMain()
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
        throw new Error(err)
      })
  }

  async getMain() {
    const data = await this.fetch()
    return data
  }

  async getActivity() {
    const data = await this.fetch("activity")
    return data
  }

  async getAverageSessions() {
    const data = await this.fetch("average-sessions")
    return data
  }

  async getPerfomance() {
    const data = await this.fetch("performance")
    return data
  }
}
