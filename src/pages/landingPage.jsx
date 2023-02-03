import { useState, React } from 'react'
import TeamSelector from '../components/TeamSelector'
import useHandlerTeams from '../api/teams'
import NavBar from '../components/NavBar'
import Home from './home'
import Teams from './teams'
import News from './news'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function LandingPage () {
  const [teamName, setTeamName] = useState('Hawks')
  const teams = useHandlerTeams()
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <NavBar teamName={teamName} />
                <TeamSelector setTeamName={setTeamName} teams={teams} />
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
