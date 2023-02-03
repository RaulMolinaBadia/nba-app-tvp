import React from 'react'
import Footer from '../components/Footer/index'
import Frame from '../components/Frame'
import TeamListBar from '../components/TeamListBar'
import NavBar from '../components/NavBar/index'

export default function Home () {
  return (
    <div>
      <NavBar teamName='Logo-NBA' />
      <TeamListBar />
      <Frame teamName='NEWS' news={[]} imagesUrls={[]} />
      <Footer />
    </div>
  )
}
