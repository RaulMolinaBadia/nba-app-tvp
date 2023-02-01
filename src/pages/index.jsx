import TeamSelector from '../components/TeamSelector'
import { useState } from 'react'
import NavBar from '../components/NavBar'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

export default function LandingPage (teams) {
  const [teamName, setTeamName] = useState('Hawks')
  return (
    <div>
      <NavBar teamName={teamName} />
      <TeamSelector setTeamName={setTeamName} teams={teams} />
    </div>
  )
}

export async function getServerSideProps () {
  try {
    const response = await fetch(teamsURL)
    const teams = await response.json()
    return {
      props: {
        teams
      }
    }
  } catch (error) {}
}
