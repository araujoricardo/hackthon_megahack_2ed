import React from "react";
import { AboutWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
         Logo, LinksWrapper, LinksText , PaperWrapper } from "./style";
import logoImg from "../../images/logo.png"
import { push } from "connected-react-router";
import {connect} from "react-redux";
import {routes} from "../Router";
import Header from "../Header";



class AboutPage extends React.Component{
    
    render(){
        const{goToHomePage}=this.props

        return(
            <AboutWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <Header/>
                </TopBottonWrapper>

                <LinksWrapper>
                    <PaperWrapper>
                        <LinksText>Links de referência do desenvolvimento deste projeto</LinksText>
                        <br/>
                        <LinksText href={"https://github.com/araujoricardo/megahack_desafio_PEGN/blob/master/README.md"} target="_blank">README</LinksText>
                        <LinksText href={"https://youtu.be/Fx6QeuSnYYU"} target="_blank">Pitch</LinksText>
                        <LinksText href={"https://drive.google.com/file/d/1S6D87BA-l5k4de0NVxO6rok4O8SlzncF/view?usp=sharing"} target="_blank">Apresentação</LinksText>
                        <LinksText href={"https://trello.com/b/Ldo0iXyx/pegn"} target="_blank">Trello</LinksText>
                        <LinksText href={"https://github.com/araujoricardo/megahack_desafio_PEGN/tree/master/online-demo-day/src"} target="_blank">GitHub</LinksText>
                        <LinksText href={"https://diogogaspar462897.invisionapp.com/board/Mockup------Layout-ck9og55lh01wy17vj240vste5?v=Byt5WyH2piftRaSXbfQA5A%3D%3D&linkshare=urlcopied"} target="_blank">Figma</LinksText>
                    </PaperWrapper>
                </LinksWrapper>

                <ContentWrapper>
                    <ContentText variant="p">SOBRE NÓS</ContentText> 
                </ContentWrapper>

              
             </AboutWrapper>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHomePage: () => dispatch(push(routes.root)),
    }
}


export default connect (null, mapDispatchToProps) (AboutPage);