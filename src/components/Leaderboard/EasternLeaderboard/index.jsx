import React from 'react'
import TeamsList from '../../../data/nbaLogos'
import { useDataAPI } from '../../../api/data'
import {
  ConferenceHeader,
  TeamContainer,
  TeamName,
  Leaderboard,
  Teams,
  Position,
  Image
} from './styles'
const teamsURL = 'https://www.balldontlie.io/api/v1/teams'

const EasternLeaderboard = () => {
  const teamsData = useDataAPI(teamsURL)
  let position = 1
  return (
    <Leaderboard>
      <Teams>
        <ConferenceHeader>EAST CONFERENCE</ConferenceHeader>
        {teamsData.map((team, i) => {
          if (team.conference === 'East') {
            const teamName = teamsData[i].name.split(' ')
            const findTeam = TeamsList.find(
              t => t.name === teamName[teamName.length - 1]
            )
            return (
              <TeamContainer key={i}>
                <Position>{position++}</Position>
                {findTeam
                  ? (
                    <Image
                      src={findTeam.logo}
                      alt={team.name}
                      width={30}
                      height={30}
                    />
                    )
                  : null}
                <TeamName>{team.full_name}</TeamName>
              </TeamContainer>
            )
          } else {
            return null
          }
        })}
      </Teams>
    </Leaderboard>
  )
}

export default EasternLeaderboard
