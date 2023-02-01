import React from 'react'
import {
  GeneralFrame,
  FrameWrapper,
  LeftFrame,
  MidFrame,
  RightFrame,
  ImageNews,
  NewsFrame,
  ImageNewsWrapper,
  Image
} from './styles'
import { Header, TeamName } from './propStyles'
import WesternLeaderboard from '../Leaderboard/WesternLeaderboard'
import EasternLeaderboard from '../Leaderboard/EasternLeaderboard'

const Frame = props => {
  return (
    <GeneralFrame className='GeneralFrame'>
      <Header className='Header'>
        {props.teamName === 'NEWS'
          ? (
            <div />
            )
          : (
            <Image
              src={props.teamLogo}
              width={70}
              height={70}
              alt='team logo'
              priority
              quality={100}
            />
            )}
        <TeamName className='TeamName'>{props.teamName}</TeamName>
      </Header>
      <FrameWrapper className='FrameWrapper'>
        <LeftFrame className='LeftFrame'>
          <WesternLeaderboard />
        </LeftFrame>
        <MidFrame className='MidFrame'>
          {props.news === undefined
            ? (
              <div>Recargar página</div>
              )
            : props.news && props.news.length === 0
              ? (
                <NewsFrame className='NewsFrame'>
                  No hay noticias disponibles de los {props.teamName}
                </NewsFrame>
                )
              : (
                  props.news.map((newsItem, i) => (
                    <NewsFrame key={i} className='NewsFrame'>
                      <h1>{newsItem.title}</h1>
                      <a href={newsItem.url}>
                        <ImageNewsWrapper className='ImageNewsWrapper'>
                          <ImageNews
                            src={
                      props.imagesUrls[i] === 'defaultImage.jpg'
                        ? '/background-images/mjordan.png'
                        : props.imagesUrls[i]
                    }
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
