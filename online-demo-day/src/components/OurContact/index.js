
import React from 'react'
import {ContactWrapper, TitleWrapper, Wrapper,
        DiogoContactWrapper, IcaroContactWrapper, RicardoContactWrapper, LorenzoContactWrapper, IgorContactWrapper,
        PersonPicture, PersonName, GitHubButton, LinkedInButton, SocialMediaWrapper, Title} from './style';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import icaroImage from '../../images/icaro.JPEG';
import ricardoImage from '../../images/ricardo.png';
import diogoImage from "../../images/diogo.jpg";
import lorenzoImage from "../../images/lorenzo.png";
import igorImage from "../../images/igor.png";

export default function OurContact(props){
    return(
        <Wrapper>
            <TitleWrapper>
                <Title variant="h3"><b>CONTATOS</b></Title>
            </TitleWrapper>
            <ContactWrapper>
                <DiogoContactWrapper>
                    <PersonPicture src={diogoImage}></PersonPicture>
                    <PersonName variant="h4"><b>Diogo Gaspar</b></PersonName>
                    <SocialMediaWrapper>
                        <a href="https://github.com/gaspar-d" target="_blank"><GitHubButton><GitHubIcon></GitHubIcon></GitHubButton></a>
                        <a href="https://www.linkedin.com/in/diogo-gaspar-a6732a37/" target="_blank"><LinkedInButton><LinkedInIcon></LinkedInIcon></LinkedInButton></a>
                    </SocialMediaWrapper>
                    
                </DiogoContactWrapper>
                <IcaroContactWrapper>
                    <PersonPicture alt="Icaro" src={icaroImage}></PersonPicture>
                    <PersonName variant="h4"><b>Icaro Souza</b></PersonName>
                    <SocialMediaWrapper>
                        <a href="https://github.com/icarohadouken" target="_blank"><GitHubButton><GitHubIcon></GitHubIcon></GitHubButton></a>
                        <a href="https://www.linkedin.com/in/icaro-de-souza-santos-920030122/" target="_blank"><LinkedInButton><LinkedInIcon></LinkedInIcon></LinkedInButton></a>
                    </SocialMediaWrapper>
                </IcaroContactWrapper>
                <RicardoContactWrapper>
                    <PersonPicture src={ricardoImage}></PersonPicture>
                    <PersonName variant="h4"><b>Ricardo Araujo</b></PersonName>
                    <SocialMediaWrapper>
                        <a href="https://github.com/araujoricardo" target="_blank"><GitHubButton><GitHubIcon></GitHubIcon></GitHubButton></a>
                        <a href="https://linkedin.com/in/araujo-ricardo" target="_blank"><LinkedInButton><LinkedInIcon></LinkedInIcon></LinkedInButton></a>
                    </SocialMediaWrapper>
                </RicardoContactWrapper>
                <LorenzoContactWrapper>
                    <PersonPicture src={lorenzoImage}></PersonPicture>
                    <PersonName variant="h4"><b>Lorenzo</b></PersonName>
                    <SocialMediaWrapper>
                        <a href="https://github.com/lorenzono" target="_blank"><GitHubButton><GitHubIcon></GitHubIcon></GitHubButton></a>
                        <a href="https://www.linkedin.com/in/lorenzo-nathaniel-no-0392b6129/" target="_blank"><LinkedInButton><LinkedInIcon></LinkedInIcon></LinkedInButton></a>
                    </SocialMediaWrapper>
                </LorenzoContactWrapper>
                <IgorContactWrapper>
                    <PersonPicture src={igorImage}></PersonPicture>
                    <PersonName variant="h4"><b>Igor</b></PersonName>
                    <SocialMediaWrapper>
                        <a href="https://github.com/igoralvesantos" target="_blank"><GitHubButton><GitHubIcon></GitHubIcon></GitHubButton></a>
                        <a href="https://www.linkedin.com/in/igor-alves-santos/" target="_blank"><LinkedInButton><LinkedInIcon></LinkedInIcon></LinkedInButton></a>
                    </SocialMediaWrapper>
                </IgorContactWrapper>
            </ContactWrapper>
        </Wrapper>
    )

}