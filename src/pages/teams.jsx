import React from 'react'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar'
import TeamInfoDisplayer from '../components/TeamInfoDisplayer'

const Teams = (teams) => {
  return (
    <div>
      <NavBar teamName='Logo-NBA' />
      <TeamInfoDisplayer teams={teams} />
      <Footer />
    </div>
  )
}
export default Teams
