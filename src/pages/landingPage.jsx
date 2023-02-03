import React from 'react'
import TeamSelector from '../components/TeamSelector'
import NavBar from '../components/NavBar'
import Home from './home'
import Teams from './teams'
import News from './news'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function LandingPage () {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <NavBar />
                <TeamSelector />
              </>
            }
          />
          <Route path='/home' element={<Home />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </Router>
    </div>
  )
}
