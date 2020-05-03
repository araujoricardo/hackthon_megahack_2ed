import React from "react"
import { connect } from "react-redux"
import { routes } from "../Router"
import { push } from "connected-react-router"
import { getFeed } from "../../actions/investor/feed"
import CardFeed from "../../components/CardFeed"
import { FeedPageWrapper, ProfileSideBar, ContentWrapper, RankingWrapper, LogoWrapper, Logo } from "./style"
import CardProfileSideBar from "../../components/CardProfileSideBar"
import logoImg from "../../images/logo.png"
import CardRanking from "../../components/CardRanking"

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
            events={goToEventPage}
            profile={goToProfileEntrepreneurPage} />

        </ProfileSideBar>

        <ContentWrapper>
          {feed.map(startup => (
            <CardFeed
              title={startup.name}
              description={startup.summarizedProposal}
              thumbnail="https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-é-8-dicas-de-como-fazer-e-principais-ferramentas.jpg"
              logoImg="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e7a1e52fcda283f91287398_logoLabenu100.png"
              votes="9"
            />
          ))}
        </ContentWrapper>


        <RankingWrapper>
          <CardRanking />
        </RankingWrapper>
      </FeedPageWrapper >
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