import React from 'react'
// import Link from 'next/link'
import TeamsList from '../../public/nbaLogos'
import { TeamListBarWrapper, Logo } from './styles'

const TeamListBar = () => {
  return (
    <TeamListBarWrapper>
      {TeamsList.map((team) => (
        <div key={team.name}>
          <a href={`/teams/${team.name}`}>
            <Logo
              src={team.logo.src} alt={team.name}
            />
          </a>
        </div>
      ))}
    </TeamListBarWrapper>
  )
}

export default TeamListBar
