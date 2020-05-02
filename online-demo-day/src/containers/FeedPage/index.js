import React from "react";
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import CardFeed from "../../components/CardFeed";
import { FeedPageWrapper, ProfileSideBar, ContentWrapper, RankingWrapper, LogoWrapper, Logo  } from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import logoImg from "../../images/logo.png"
import CardRanking from '../../components/CardRanking'

class FeedPage extends React.Component{

   

    render(){
        const {goToFeedPage} = this.props;

        return(
            <FeedPageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToFeedPage}/>
                </LogoWrapper>

                <ProfileSideBar>
                    <CardProfileSideBar/>
                </ProfileSideBar>


                <ContentWrapper>
                    <CardFeed/>
                </ContentWrapper>


                <RankingWrapper>
                    <CardRanking/>
                </RankingWrapper>
            </FeedPageWrapper>
        )
    }


}

const mapDispatchToProps = dispatch =>{
    return{
        goToFeedPage: () => dispatch(push(routes.feed))
    }
}

export default connect(null, mapDispatchToProps)(FeedPage)