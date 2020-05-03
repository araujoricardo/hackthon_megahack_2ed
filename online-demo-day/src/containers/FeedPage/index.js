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
                    <CardFeed
                        title={"Resolvedores"}
                        description={"Startup focada em resolver o que ninguém resolve, com anos de experiência em resolver o que ninguém resolve, já falei que resolvemos tudo ?"}
                        thumbnail={"https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/07/03165544/Thumbnail-Youtube-o-que-é-8-dicas-de-como-fazer-e-principais-ferramentas.jpg"}
                        logoImg={"https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e7a1e52fcda283f91287398_logoLabenu100.png"}
                        votes={"9"}
                    />
                </ContentWrapper>


                <RankingWrapper>
                    CARDS RANKING
                </RankingWrapper>
            </FeedPageWrapper>
        )
    }


}

export default FeedPage;