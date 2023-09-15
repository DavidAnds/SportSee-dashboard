import "./App.css"
import Layout from "./layout/layout"
import Dashboard from "./components/dashboard/dashboard"
import useApi from "./hooks/useApi"

function App() {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    )
}

export default App
