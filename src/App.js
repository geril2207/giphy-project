import { Header, Main } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  )
}

export default App
