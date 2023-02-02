import TeamSelector from '../components/TeamSelector'
import { useState } from 'react'
import useHandlerTeams from '../api/teams'
import NavBar from '../components/NavBar'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

export default function LandingPage () {
  const [teamName, setTeamName] = useState('Hawks')
  const teams = useHandlerTeams(teamsURL)
  console.log(teams)
  console.log(teamName)
  return (
    <div>
      <NavBar teamName={teamName} />
      <TeamSelector setTeamName={setTeamName} teams={teams} />
    </div>
  )
}
