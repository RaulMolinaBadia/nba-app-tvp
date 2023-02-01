import React from 'react'
import { FooterContainer, Image } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Image
        src='/app-logo/Logo-NBA.png'
        alt='NBA Logo'
      />
      <p> Copyright 2023 &copy; By: Yerai & Raul</p>
    </FooterContainer>
  )
}

export default Footer
