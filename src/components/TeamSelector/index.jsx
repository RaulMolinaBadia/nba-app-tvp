import React from 'react'
import { TeamSelectorContainer, Select } from './styles'
import useHandlerTeams from '../api/teams'

const TeamSelector = () => {
  const teams = useHandlerTeams()
  const Redirect = e => {
    window.location.href = '/home'
  }
  return (
    <TeamSelectorContainer>
      <Select
        data-testid='teams'
        onChange={e => {
          Redirect(e)
        }}
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
