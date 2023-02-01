import { useRouter } from 'next/router'
import Frame from '../../components/Frame'
import Footer from '../../components/Footer/index'
import TeamListBar from '../../components/TeamListBar'
import NavBar from '../../components/NavBar'
import TeamsList from '../../public/nbaLogos'

export default function News ({ id }) {
  const router = useRouter()
  const { query } = router
  const teamSplited = query.id.split(' ')
  const findTeam = TeamsList.find(team => team.name === query.id)
  console.log(findTeam)
  return (
    <div>
      <NavBar teamName={teamSplited[teamSplited.length - 1]} />
      <TeamListBar />
      <Frame
        teamLogo={findTeam.logo.src}
        teamName={query.id}
        news={[]}
        imagesUrls={[]}
      />
      <Footer />
    </div>
  )
}

News.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
