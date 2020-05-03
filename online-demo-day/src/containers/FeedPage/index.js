import React from "react";
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import CardFeed from "../../components/CardFeed";
import { FeedPageWrapper, ProfileSideBar, ContentWrapper, RankingWrapper, LogoWrapper, Logo,
        SearchWrapper, TitleRankingWrapper, TitleRanking, InputSearch, ButtonSearchWrapper  } from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import logoImg from "../../images/logo.png"
import CardRanking from '../../components/CardRanking'
import SearchIcon from '@material-ui/icons/Search';

class FeedPage extends React.Component{

   

    render(){
        const {goToFeedPage, goToEventPage, goToProfileEntrepreneurPage} = this.props;

        return(
            <FeedPageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToFeedPage}/>
                </LogoWrapper>

                <ProfileSideBar>
                    <CardProfileSideBar
                        events={goToEventPage}/>
                </ProfileSideBar>

                <SearchWrapper>
                    <InputSearch label="Pesquisar..."></InputSearch>
                    <ButtonSearchWrapper><SearchIcon></SearchIcon></ButtonSearchWrapper>
                </SearchWrapper>

                <ContentWrapper>
                    <CardFeed
                        title={"Resolvedores"}
                        description={"Startup focada em resolver o que ninguém resolve, com anos de experiência em resolver o que ninguém resolve, já falei que resolvemos tudo ?"}
                        thumbnail={"https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-é-8-dicas-de-como-fazer-e-principais-ferramentas.jpg"}
                        logoImg={"https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e7a1e52fcda283f91287398_logoLabenu100.png"}
                        votes={"9"}
                        knowmore={goToProfileEntrepreneurPage}
                    />
                </ContentWrapper>

                <TitleRankingWrapper>
                    <TitleRanking variant="h3" color="white">Ranking</TitleRanking>
                </TitleRankingWrapper>
                <RankingWrapper>
                    <CardRanking/>
                </RankingWrapper>
            </FeedPageWrapper>
        )
    }


}

const mapDispatchToProps = dispatch =>{
    return{
        goToFeedPage: () => dispatch(push(routes.feedpage)),
        goToEventPage: () => dispatch(push(routes.livestream)),
        goToProfileEntrepreneurPage: () => dispatch(push(routes.profileentrepreneurpage))
    }
}

export default connect(null, mapDispatchToProps)(FeedPage)