import React, { useState } from 'react'
import TeamsList from '../../data/nbaLogos'
import LandingPage from '../../pages/landingPage'
import Teams from '../../pages/teams'
import News from '../../pages/news'
import {
  MenuBarWrapper,
  NavBarLeft,
  NavBarRight,
  ListMenu,
  ListMenuItem,
  Image
} from './styles.js'

const NavBar = props => {
  const [currentPage, setCurrentPage] = useState('')
  // const teamName = props.teamName.split(' ')
  // let teamLogo = ''
  // if (teamName[0] === 'Logo-NBA') {
  // teamLogo = 'Logo-NBA'
  // } else {
  // teamLogo = TeamsList.find(
  // team => team.name === teamName[teamName.length - 1]
  // )
  // }
  // console.log(teamLogo.logo)
  const navigateToPage = page => {
    setCurrentPage(page)
    // if (currentPage === 'landingPage') {
    //   console.log('a')
    //   return <LandingPage />
    // } else if (currentPage === 'Teams') {
    //   return <Teams />
    // } else if (currentPage === 'News') {
    //   return <News />
    // } else {
    //   return <h1>nada encontrado</h1>
    // }
  }
  return (
    <>
      <MenuBarWrapper>
        <NavBarLeft>
          {/* <a href='/'> */}
          <button onClick={() => navigateToPage('landingPage')}>
            <Image
              src='/app-logo/Logo-NBA.png'
              alt='logo NBA'
              width={100}
              height={60}
            />
          </button>
          {/* </a> */}
        </NavBarLeft>
        <NavBarRight>
          <ListMenu>
            <button onClick={() => navigateToPage('teams')}>
              <ListMenuItem>
                {/* <a href=''>Teams</a> */}
                Teams
              </ListMenuItem>
            </button>
            <button onClick={() => navigateToPage('landingPage')}>
              <ListMenuItem>
                {/* <a href='/news'>News</a> */}
                News
              </ListMenuItem>
            </button>
          </ListMenu>
        </NavBarRight>
      </MenuBarWrapper>
      {currentPage === 'landingPage' && <LandingPage />}
      {currentPage === 'teams' && <Teams />}
      {currentPage === 'news' && <News />}
    </>
  )
}

export default NavBar
