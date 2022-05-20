import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './Routers/mainRouter'
import Navbar from './components/Navigation'
import Footer from './components/Footer'
import React from 'react'
function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Navbar />
          <MainRouter />
          <Footer />
        </Router>
      </React.StrictMode>
    </Provider>
  )
}

export default App
