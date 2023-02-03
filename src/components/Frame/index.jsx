import React from 'react'
import {
  GeneralFrame,
  FrameWrapper,
  LeftFrame,
  MidFrame,
  RightFrame,
  ImageNews,
  NewsFrame,
  ImageNewsWrapper
} from './styles'
import { Header, TeamName } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'
import useHandlerNews from '../../api/news'

const Frame = () => {
  const news = useHandlerNews()
  console.log()
  return (
    <GeneralFrame className='GeneralFrame'>
      <Header className='Header'>
        <TeamName className='TeamName'>NEWS</TeamName>
      </Header>
      <FrameWrapper className='FrameWrapper'>
        <LeftFrame className='LeftFrame'>
          <WesternLeaderboard />
        </LeftFrame>
        <MidFrame className='MidFrame'>
          {news === undefined
            ? (
              <div>Recargar página</div>
              )
            : news && news.length === 0
              ? (
                <NewsFrame className='NewsFrame'>
                  No hay noticias disponibles
                </NewsFrame>
                )
              : (
                  news.map((newsItem, i) => (
                    <NewsFrame key={i} className='NewsFrame'>
                      <h1>{newsItem.title}</h1>
                      <a href={newsItem.url}>
                        <ImageNewsWrapper className='ImageNewsWrapper'>
                          <ImageNews
                            src='/background-images/mjordan.png'
                            alt='newsImages'
                            className='ImageNews'
                          />
                        </ImageNewsWrapper>
                      </a>
                    </NewsFrame>
                  ))
                )}
        </MidFrame>

        <RightFrame className='RightFrame'>
          <EasternLeaderboard />
        </RightFrame>
      </FrameWrapper>
    </GeneralFrame>
  )
}

export default Frame
