import React from "react"
import { connect } from "react-redux"
import { routes } from "../Router"
import { push } from "connected-react-router"
import { getFeed } from "../../actions/investor/feed"
import CardFeed from "../../components/CardFeed"
import {
  FeedPageWrapper, ProfileSideBar, ContentWrapper, RankingWrapper, LogoWrapper, Logo,
  SearchWrapper, TitleRankingWrapper, TitleRanking, InputSearch, ButtonSearchWrapper
} from "./style"
import CardProfileSideBar from "../../components/CardProfileSideBar"
import logoImg from "../../images/logo.png"
import CardRanking from "../../components/CardRanking"
import SearchIcon from '@material-ui/icons/Search'
import { ranking } from "./startups"

class FeedPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getFeed()
  }

  render() {
    const { goToFeedPage, goToEventPage, goToProfileEntrepreneurPage, feed } = this.props
    return (
      <FeedPageWrapper>
        <LogoWrapper>
          <Logo src={logoImg} onClick={goToFeedPage} />
        </LogoWrapper>

        <ProfileSideBar>
          <CardProfileSideBar
            events={goToEventPage} />
        </ProfileSideBar>


        <ProfileSideBar>
          <CardProfileSideBar
            events={goToEventPage} />
        </ProfileSideBar>

        <SearchWrapper>
          <InputSearch label="Pesquisar..."></InputSearch>
          <ButtonSearchWrapper><SearchIcon></SearchIcon></ButtonSearchWrapper>
        </SearchWrapper>

        <ContentWrapper>
          {feed.map(startup => (
            <CardFeed
              title={startup.name}
              description={startup.summarizedProposal}
              video={startup.video}
              logoImg={startup.picture}
              votes={startup.summarizedProposal.length}
              knowmore={goToProfileEntrepreneurPage}
            />
          ))}
        </ContentWrapper>

        <TitleRankingWrapper>
          <TitleRanking variant="h3" color="white">Ranking</TitleRanking>
        </TitleRankingWrapper>
        <RankingWrapper>
          {ranking.map(startup => (
            <CardRanking
              sector={startup.sector}
              name={startup.name}
              voteNumber={startup.voteNumber}
              ranking={startup.ranking}
            />
          ))}
        </RankingWrapper>
      </FeedPageWrapper>
    )
  }

}

const mapStateToProps = state => ({
  feed: state.feed.feed,
})

const mapDispatchToProps = dispatch => {
  return {
    getFeed: () => dispatch(getFeed()),
    goToFeedPage: () => dispatch(push(routes.feedpage)),
    goToEventPage: () => dispatch(push(routes.livestream)),
    goToProfileEntrepreneurPage: () => dispatch(push(routes.profileentrepreneurpage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)