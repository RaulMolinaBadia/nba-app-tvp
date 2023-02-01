import React from 'react'
import Footer from '../components/Footer/index'
import NavBar from '../components/NavBar'
import TeamInfoDisplayer from '../components/TeamInfoDisplayer'

const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

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

export async function getServerSideProps () {
  try {
    const response = await fetch(teamsURL)
    const teams = await response.json()
    return {
      props: {
        teams
      }
    }
  } catch (error) {
    console.log(error)
  }
}