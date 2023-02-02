// import Link from 'next/link'
import React from 'react'
import TeamsList from '../../data/nbaLogos'
import {
  MenuBarWrapper,
  NavBarLeft,
  NavBarRight,
  ListMenu,
  ListMenuItem,
  Image
} from './styles.js'

const NavBar = props => {
  const teamName = props.teamName.split(' ')
  let teamLogo = ''
  if (teamName[0] === 'Logo-NBA') {
    teamLogo = 'Logo-NBA'
  } else {
    teamLogo = TeamsList.find(
      team => team.name === teamName[teamName.length - 1]
    )
  }
  console.log(teamLogo.logo)
  return (
    <MenuBarWrapper>
      <NavBarLeft>
        <a href='/'>
          <Image
            src='/app-logo/Logo-NBA.png'
            alt='logo NBA'
            width={100}
            height={60}
          />
        </a>
      </NavBarLeft>
      <NavBarRight>
        <ListMenu>
          <ListMenuItem>
            <a href='/teams'>Teams</a>
          </ListMenuItem>
          <ListMenuItem>
            <a href='/news'>News</a>
          </ListMenuItem>
        </ListMenu>
        {teamLogo === 'Logo-NBA'
          ? (
            <div />
            )
          : (
            <Image
              src={`${teamLogo.logo.src}`}
              width={50}
              height={50}
              alt='team logo'
            />
            )}
      </NavBarRight>
    </MenuBarWrapper>
  )
}

export default NavBar
