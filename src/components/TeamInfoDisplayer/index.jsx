import React from 'react'
import { Teams, TeamInfo, Image } from './styles'
import TeamsList from '../../public/nbaLogos'
// import Link from 'next/link'

const TeamInfoDisplayer = props => {
  const teams = props.teams.teams.data

  return (
    <Teams>
      {teams.map((team, i) => {
        const teamName = teams[i].name.split(' ')
        const findTeam = TeamsList.find(
          t => t.name === teamName[teamName.length - 1]
        )
        return (
          <TeamInfo key={i}>
            <a href={`/teams/${teamName}`}>
              {findTeam
                ? (
                  <Image
                    src={findTeam.logo.src}
                    alt={team.name}
                    height={200}
                    width={200}
                  />
                  )
                : null}
            </a>
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
