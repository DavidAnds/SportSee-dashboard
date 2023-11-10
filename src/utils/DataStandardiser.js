class DataStandardizer {
  constructor(user, activity, averageSessions, performance) {
    this.user = user
    this.activity = activity
    this.averageSessions = averageSessions
    this.performance = performance
    this.day = ["L", "M", "M", "J", "V", "S", "D"]
  }

  standardize() {
    const user = this.standardizeUser()
    const activity = this.activity
    const averageSessions = this.standardizeAverageSessions()
    const performance = this.standardizePerformance()

    return {
      user,
      activity,
      averageSessions,
      performance,
    }
  }

  standardizeUser() {
    const user = this.user

    Object.keys(user).forEach((key) => {
      if (key === "score" || key === "todayScore") {
        user.userScore = [
          {
            value: user[key],
            kind: "score",
            fill: "red",
          },
        ]
        delete user[key]
      }
    })

    return user
  }

  standardizePerformance() {
    const performance = this.performance

    performance.data = performance.data.map((element, index) => {
      return {
        ...element,
        kind: performance.kind[index + 1],
      }
    })

    return performance
  }

  standardizeAverageSessions() {
    const averageSessions = this.averageSessions

    averageSessions.sessions = averageSessions.sessions.map((element) => {
      return {
        sessionLength: element.sessionLength,
        day: this.day[element.day - 1],
      }
    })

    return averageSessions
  }
}

export default DataStandardizer
