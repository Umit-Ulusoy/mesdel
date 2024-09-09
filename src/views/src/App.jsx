import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Router from "./routes/router"
import { Provider } from "react-redux"
import { store } from './store/index'
function App() {
  const navigate = useNavigate()
  useEffect(()=> {
    navigate('/')
  }, [])
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>

  )
}

export default App
