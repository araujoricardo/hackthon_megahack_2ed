import React from "react";
import {ProfileSideBarWrapper, ProfilePicture, PictureWrapper,
        LinksWrapper, LogoutWrapper, ButtonWrapper, LogoutButton,
        TextButton, TextName, TextButtonLogout} from "./style"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import NotificationIcon from '@material-ui/icons/AddAlarm';
import MensageIcon from '@material-ui/icons/MailOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EventIcon from '@material-ui/icons/Event';
import AccountIcon from '@material-ui/icons/AccountBox';

class CardProfileSideBar extends React.Component{

    render(){

        const {goToHomePage} = this.props;
        return(
            <ProfileSideBarWrapper>        
                <PictureWrapper>
                    <ProfilePicture src={require("../../images/image.png")}/>
                    <TextName>Bill Gates</TextName>
                </PictureWrapper>
                <LinksWrapper>
                    <ButtonWrapper>
                        <NotificationIcon/>
                        <TextButton variant="button">Notificações</TextButton>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <MensageIcon/>
                        <TextButton variant="button">Mensagens</TextButton>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LikeIcon/>
                        <TextButton variant="button">Favoritos</TextButton>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <EventIcon/>
                        <TextButton variant="button">Eventos</TextButton>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <AccountIcon/>
                        <TextButton variant="button">Perfil</TextButton>
                    </ButtonWrapper>
                </LinksWrapper>
                <LogoutWrapper>
                    <LogoutButton variant="contained" color="primary" onClick={goToHomePage}>
                        <TextButtonLogout variant="button">SAIR</TextButtonLogout>
                    </LogoutButton>
                </LogoutWrapper>
            </ProfileSideBarWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToHomePage: () => dispatch(push(routes.root)),
    }
}

export default connect(null, mapDispatchToProps) (CardProfileSideBar);
