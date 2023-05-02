import { Container, CssBaseline } from '@mui/material'
import { Theme } from './theme'
import { Home } from './pages/home'


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />
        <Container>
          <Home />
        </Container>
      </Theme>
    </>
  )
}

export default App
