import React from "react";
import {LivePageWrapper, LogoWrapper, Logo, ChatWrapper,
        ProfileSideBar, ContentWrapper} from "./styled"
import logoImg from "../../images/logo.png"
import MiniCardProfileSideBar from "../../components/MiniCardProfileSideBar"


class LiveStreamPage extends React.Component{



    render(){
        return(
            <LivePageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg}/>
                </LogoWrapper>

                <ProfileSideBar>
                    <MiniCardProfileSideBar>

                    </MiniCardProfileSideBar>
                </ProfileSideBar>

                <ContentWrapper>
                    LIVESTREAMPAGE
                </ContentWrapper>

                <ChatWrapper>
                    Aqui vai o chat
                </ChatWrapper>

            </LivePageWrapper>
        )
    }


}

export default LiveStreamPage;