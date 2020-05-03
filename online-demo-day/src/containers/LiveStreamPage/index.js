import React from 'react';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import {LivePageWrapper, LogoWrapper, Logo, ChatWrapper,
        ProfileSideBar, ContentWrapper, SearchWrapper, TitleChatWrapper, TitleChat, InputSearch, ButtonSearchWrapper} from "./styled"
import logoImg from "../../images/logo.png"
import CardLiveStream from '../../components/CardLivestream'
import ChatLive from '../../components/ChatLive'
import SearchIcon from '@material-ui/icons/Search';


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
                    events={goToEventPage}/>
                </ProfileSideBar>

                <SearchWrapper>
                    <InputSearch label="Pesquisar..."></InputSearch>
                    <ButtonSearchWrapper><SearchIcon></SearchIcon></ButtonSearchWrapper>
                </SearchWrapper>

                <ContentWrapper>
                    <CardLiveStream />
                </ContentWrapper>

                <TitleChatWrapper>
                    <TitleChat>CHAT</TitleChat>
                </TitleChatWrapper>

                <ChatWrapper>
                    <ChatLive></ChatLive>
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