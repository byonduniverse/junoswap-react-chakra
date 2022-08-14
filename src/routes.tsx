import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from 'containers/Home'
import AppPage from 'containers/AppPage'
import Submit from 'containers/Submit'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apps/:appId' element={<AppPage />}></Route>
        <Route path='/submit' element={<Submit></Submit>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
