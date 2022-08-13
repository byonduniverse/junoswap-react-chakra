import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './containers/Home'
import AppPage from 'containers/AppPage'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apps/:appId' element={<AppPage />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
