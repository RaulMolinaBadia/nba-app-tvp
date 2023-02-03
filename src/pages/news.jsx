import React from 'react'
import Frame from '../components/Frame'
import Footer from '../components/Footer/index'
import TeamListBar from '../components/TeamListBar'
import NavBar from '../components/NavBar'

export default function News () {
  return (
    <div>
      <NavBar teamName='Logo-NBA' />
      <TeamListBar />
      <Frame teamName='NEWS' />
      <Footer />
    </div>
  )
}
