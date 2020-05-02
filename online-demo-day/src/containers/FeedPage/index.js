import React from "react";
import CardFeed from "../../components/CardFeed";
import { FeedPageWrapper, ProfileSideBar, ContentWrapper, RankingWrapper  } from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"

class FeedPage extends React.Component{



    render(){
        return(
            <FeedPageWrapper>



                <ProfileSideBar>
                    <CardProfileSideBar/>
                </ProfileSideBar>


                <ContentWrapper>
                    <CardFeed/>
                </ContentWrapper>


                <RankingWrapper>
                    CARDS RANKING
                </RankingWrapper>
            </FeedPageWrapper>
        )
    }


}

export default FeedPage;