import React from 'react'
import { TeamSelectorContainer, Select } from './styles'

const TeamSelector = props => {
  const teams = props.teams.teams.data
  const handleChange = e => {
    props.setTeamName(e.target.value)
  }

  return (
    <TeamSelectorContainer>
      <Select
        data-testid='teams'
        onChange={handleChange}
        id='teams'
      >
        {teams.map((team, i) => (
          <option key={i}>{team.full_name}</option>
        ))}
      </Select>
    </TeamSelectorContainer>
  )
}

export default TeamSelector
