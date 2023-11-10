class DataStandardizer {
  constructor(user, activity, averageSessions, performance) {
    this.user = user
    this.activity = activity
    this.averageSessions = averageSessions
    this.performance = performance
  }

  standardize() {
    const user = this.user
    const activity = this.activity
    const averageSessions = this.averageSessions
    const performance = this.performance

    console.log("user", user)
    console.log("activity", activity)
    console.log("averageSessions", averageSessions)
    console.log("performance", performance)

    return {
      user,
      activity,
      averageSessions,
      performance,
    }
  }
}

export default DataStandardizer
