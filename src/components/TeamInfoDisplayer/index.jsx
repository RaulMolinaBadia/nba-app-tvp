import React from 'react'
import { Teams, TeamInfo } from './styles'
import TeamsList from '../../public/nbaLogos'

const TeamInfoDisplayer = (props) => {
  const teams = props.teams.teams.data

  return (
    <Teams>
      {teams.map((team, i) => {
        const teamName = teams[i].name.split(' ')
        const findTeam = TeamsList.find((t) => t.name === teamName[teamName.length - 1])
        return (
          <TeamInfo key={i}>
            {findTeam ? <img src={findTeam.logo.src} alt={team.name} /> : null}
            <div>{team.full_name}</div>
            <div>Divsion: {team.division}</div>
            <div>Conference: {team.conference}</div>
            <div>{team.city} 📍</div>
          </TeamInfo>
        )
      })}
    </Teams>
  )
}

export default TeamInfoDisplayer
