import Info from './components/Info'
import NavBar from './components/NavBar'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <>
      <NavBar />
      <Info />
    </>
  )
}

export default App
