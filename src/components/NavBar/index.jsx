import React from 'react'
import { Link } from 'react-router-dom'
import {
  MenuBarWrapper,
  NavBarLeft,
  NavBarRight,
  ListMenu,
  ListMenuItem,
  Image
} from './styles.js'

const NavBar = () => {
  return (
    <MenuBarWrapper>
      <NavBarLeft>
        <Link to='/'>
          <Image
            src='/app-logo/Logo-NBA.png'
            alt='logo NBA'
            width={100}
            height={60}
          />
        </Link>
      </NavBarLeft>
      <NavBarRight>
        <ListMenu>
          <Link to='/teams'>
            <ListMenuItem className='ListMenuItem'>
              Teams
            </ListMenuItem>
          </Link>
          <Link to='/news'>
            <ListMenuItem className='ListMenuItem'>
              News
            </ListMenuItem>
          </Link>
        </ListMenu>
      </NavBarRight>
    </MenuBarWrapper>
  )
}

export default NavBar
