import TeamSelector from '../components/TeamSelector'
import { useState } from 'react'
import { useDataAPI } from '../api/data'
import NavBar from '../components/NavBar'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

export default function LandingPage () {
  const [teamName, setTeamName] = useState('Hawks')
  const teams = useDataAPI(teamsURL)
  console.log(teams)
  return (
    <div>
      <NavBar teamName={teamName} />
      <TeamSelector setTeamName={setTeamName} teams={teams} />
    </div>
  )
}
