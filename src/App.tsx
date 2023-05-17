import { CssBaseline } from '@mui/material'
import { Theme } from './theme'
import { Home } from './pages/home'


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />
        <Home />
      </Theme>
    </>
  )
}

export default App
