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

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed()
  }

  render() {
    const { goToFeedPage, goToEventPage, goToProfileEntrepreneurPage, feed } = this.props;
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
              video="https://www.youtube.com/embed/HY6T2zcsSsQ"
              logoImg="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e7a1e52fcda283f91287398_logoLabenu100.png"
              votes=""
              knowmore={goToProfileEntrepreneurPage}
            />
          ))}
        </ContentWrapper>

        <TitleRankingWrapper>
          <TitleRanking variant="h3" color="white">Ranking</TitleRanking>
        </TitleRankingWrapper>
        <RankingWrapper>
          <CardRanking />
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
    goToProfileEntrepreneurPage: () => dispatch(push(routes.profileentrepreneurpage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)