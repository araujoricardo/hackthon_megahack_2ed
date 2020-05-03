import React from 'react';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import {LivePageWrapper, LogoWrapper, Logo, ChatWrapper,
        ProfileSideBar, ContentWrapper} from "./styled"
import logoImg from "../../images/logo.png"
import CardLiveStream from '../../components/CardLivestream'
import MiniCardProfileSideBar from "../../components/MiniCardProfileSideBar"


class LiveStreamPage extends React.Component{

    render(){

        const {goToFeedPage, goToEventPage, goToProfileEntrepreneurPage} = this.props;

        return(
            <LivePageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToFeedPage}/>
                </LogoWrapper>

                <ProfileSideBar>
                    <CardProfileSideBar
                    events={goToEventPage}
                    profile={goToProfileEntrepreneurPage}/>
                </ProfileSideBar>

                <ContentWrapper>
                    <CardLiveStream />
                </ContentWrapper>

                <ChatWrapper>
                    Aqui vai o chat
                </ChatWrapper>

            </LivePageWrapper>
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

export default connect(null, mapDispatchToProps)(LiveStreamPage)