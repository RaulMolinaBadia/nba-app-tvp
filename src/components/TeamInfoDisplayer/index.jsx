import React from 'react'
import { Teams, TeamInfo, Image } from './styles'
import TeamsList from '../../data/nbaLogos'
import useHandlerTeams from '../../api/teams'
const teamsURL = 'https://www.balldontlie.io/api/v1/teams'
const TeamInfoDisplayer = () => {
  const teams = useHandlerTeams(teamsURL)

  return (
    <Teams>
      {teams.map((team, i) => {
        const teamName = teams[i].name.split(' ')
        const findTeam = TeamsList.find(
          t => t.name === teamName[teamName.length - 1]
        )
        return (
          <TeamInfo key={i}>
            {findTeam
              ? (
                <Image
                  src={findTeam.logo}
                  alt={team.name}
                  height={200}
                  width={200}
                />
                )
              : null}
            {/* </a> */}
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
