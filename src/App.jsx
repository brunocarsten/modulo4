import './styles/transition.scss'
import Routes from './routes'
import { ProgressProvider } from './context/progress'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <ProgressProvider>
        <Routes />
      </ProgressProvider>
    </HashRouter>
  )
}

export default App
