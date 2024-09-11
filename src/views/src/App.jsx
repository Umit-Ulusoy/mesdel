import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Router from "./routes/router"



function App() {
  const navigate = useNavigate()
  useEffect(()=> {
    navigate('/')
  }, [])
  return (
    <>
      <Router />
    </>

  )
}

export default App
